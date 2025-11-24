import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";
import { appointmentSchedulingAgent } from "@/lib/ai/gemini-agents";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const patientId = searchParams.get("patientId");
    const doctorId = searchParams.get("doctorId");
    const dateFrom = searchParams.get("dateFrom");
    const dateTo = searchParams.get("dateTo");

    const where: Record<string, unknown> = {};

    if (patientId) where.patientId = patientId;
    if (doctorId) where.doctorId = doctorId;
    if (dateFrom || dateTo) {
      where.date = {};
      if (dateFrom) (where.date as Record<string, Date>).gte = new Date(dateFrom);
      if (dateTo) (where.date as Record<string, Date>).lte = new Date(dateTo);
    }

    const appointments = await prisma.appointment.findMany({
      where,
      include: {
        patient: true,
        doctor: true,
      },
      orderBy: { date: "asc" },
    });

    return NextResponse.json(appointments);
  } catch (error) {
    console.error("Get appointments error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to load appointments. Please try again later." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { patientId, doctorId, date, time, type, notes, reasonVisit, useAI } =
      body;

    if (!patientId || !doctorId || !date || !time || !type) {
      return NextResponse.json(
        { error: "Please provide all required appointment details: patient, doctor, date, time, and type" },
        { status: 400 }
      );
    }

    // If AI is requested, use the AI agent for optimization
    let aiSuggestion = null;
    if (useAI) {
      const existingAppointments = await prisma.appointment.findMany({
        where: { doctorId },
        select: { date: true, time: true },
      });

      aiSuggestion = await appointmentSchedulingAgent({
        doctorId,
        patientName: (
          await prisma.patient.findUnique({ where: { id: patientId } })
        )?.firstName,
        appointmentType: type,
        existingAppointments,
      });
    }

    const appointment = await prisma.appointment.create({
      data: {
        patientId,
        doctorId,
        date: new Date(date),
        time,
        type,
        notes,
        reasonVisit,
        status: "SCHEDULED",
      },
      include: {
        patient: true,
        doctor: true,
      },
    });

    return NextResponse.json(
      {
        appointment,
        aiSuggestion: aiSuggestion?.result || null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Create appointment error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to book the appointment. Please try again later." },
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
        { error: "Appointment ID is required" },
        { status: 400 }
      );
    }

    const appointment = await prisma.appointment.update({
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

    return NextResponse.json(appointment);
  } catch (error) {
    console.error("Update appointment error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to update the appointment. Please try again later." },
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
        { error: "Appointment ID is required" },
        { status: 400 }
      );
    }

    await prisma.appointment.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete appointment error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to delete the appointment. Please try again later." },
      { status: 500 }
    );
  }
}
