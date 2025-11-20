import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";
import { billingAgent } from "@/lib/ai/gemini-agents";
import { generateInvoiceNumber } from "@/lib/utils";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const patientId = searchParams.get("patientId");
    const status = searchParams.get("status");

    let where: any = {};
    if (patientId) where.patientId = patientId;
    if (status) where.status = status;

    const payments = await prisma.payment.findMany({
      where,
      include: {
        patient: true,
      },
      orderBy: { date: "desc" },
    });

    return NextResponse.json(payments);
  } catch (error) {
    console.error("Get payments error:", error);
    return NextResponse.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { patientId, amount, method, status, invoiceNumber, useAI } = body;

    if (!patientId || amount === undefined || !method) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate invoice if not provided
    const finalInvoiceNumber = invoiceNumber || generateInvoiceNumber();

    // If AI is requested, use billing agent
    let aiSuggestion = null;
    if (useAI) {
      const treatmentPlans = await prisma.treatmentPlan.findMany({
        where: { patientId },
      });

      aiSuggestion = await billingAgent({
        patientName: (
          await prisma.patient.findUnique({ where: { id: patientId } })
        )?.firstName,
        procedures: treatmentPlans.map((p) => p.diagnosis),
        costs: treatmentPlans.map((p) => ({
          description: p.diagnosis,
          amount: p.totalCost,
        })),
      });
    }

    const payment = await prisma.payment.create({
      data: {
        patientId,
        amount,
        method: method as any,
        status: status || "PAID",
        invoiceNumber: finalInvoiceNumber,
      },
      include: {
        patient: true,
      },
    });

    return NextResponse.json(
      {
        payment,
        aiSuggestion: aiSuggestion?.result || null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create payment error:", error);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Payment ID required" },
        { status: 400 }
      );
    }

    const payment = await prisma.payment.update({
      where: { id },
      data: { status: status as any },
      include: {
        patient: true,
      },
    });

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Update payment error:", error);
    return NextResponse.json(
      { error: "Failed to update payment" },
      { status: 500 }
    );
  }
}
