import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const patientId = searchParams.get("patientId");
    const doctorId = searchParams.get("doctorId");
    const status = searchParams.get("status");

    let where: Record<string, string> = {};
    if (patientId) where.patientId = patientId;
    if (doctorId) where.doctorId = doctorId;
    if (status) where.status = status;

    const plans = await prisma.treatmentPlan.findMany({
      where,
      include: {
        patient: true,
        doctor: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(plans);
  } catch (error) {
    console.error("Get treatment plans error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to load treatment plans. Please try again later." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      patientId,
      doctorId,
      diagnosis,
      procedures,
      totalCost,
      sessions,
      timeline,
      notes,
    } = body;

    if (
      !patientId ||
      !doctorId ||
      !diagnosis ||
      !procedures ||
      totalCost === undefined
    ) {
      return NextResponse.json(
        {
          error:
            "Please provide all required treatment plan information: patient, doctor, diagnosis, procedures, and cost",
        },
        { status: 400 }
      );
    }

    const plan = await prisma.treatmentPlan.create({
      data: {
        patientId,
        doctorId,
        diagnosis,
        procedures: JSON.stringify(procedures),
        totalCost,
        sessions: sessions || 1,
        status: "PENDING",
        timeline: timeline ? new Date(timeline) : null,
        notes,
      },
      include: {
        patient: true,
        doctor: true,
      },
    });

    return NextResponse.json(plan, { status: 201 });
  } catch (error) {
    console.error("Create treatment plan error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to create treatment plan. Please try again later." },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Treatment plan ID is required" },
        { status: 400 }
      );
    }

    const plan = await prisma.treatmentPlan.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(notes && { notes }),
      },
      include: {
        patient: true,
        doctor: true,
      },
    });

    return NextResponse.json(plan);
  } catch (error) {
    console.error("Update treatment plan error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to update treatment plan. Please try again later." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Treatment plan ID is required" },
        { status: 400 }
      );
    }

    await prisma.treatmentPlan.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete treatment plan error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to delete treatment plan. Please try again later." },
      { status: 500 }
    );
  }
}
