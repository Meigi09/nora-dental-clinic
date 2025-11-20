import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const search = searchParams.get("search");
    const id = searchParams.get("id");

    if (id) {
      const patient = await prisma.patient.findUnique({
        where: { id },
        include: {
          appointments: true,
          treatmentPlans: true,
          prescriptions: true,
          documents: true,
          dentalChart: true,
        },
      });

      if (!patient) {
        return NextResponse.json(
          { error: "Patient not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(patient);
    }

    let where: any = {};
    if (search) {
      where = {
        OR: [
          { firstName: { contains: search, mode: "insensitive" } },
          { lastName: { contains: search, mode: "insensitive" } },
          { phone: { contains: search } },
          { email: { contains: search, mode: "insensitive" } },
        ],
      };
    }

    const patients = await prisma.patient.findMany({
      where,
      include: {
        appointments: {
          take: 1,
          orderBy: { date: "desc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(patients);
  } catch (error) {
    console.error("Get patients error:", error);
    return NextResponse.json(
      { error: "Failed to fetch patients" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      dob,
      gender,
      address,
      medicalHistory,
      allergies,
      insuranceProvider,
      insuranceNumber,
    } = body;

    if (!firstName || !lastName || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const patient = await prisma.patient.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        dob: dob ? new Date(dob) : null,
        gender,
        address,
        medicalHistory,
        allergies,
        insuranceProvider,
        insuranceNumber,
        status: "NEW",
      },
    });

    return NextResponse.json(patient, { status: 201 });
  } catch (error: any) {
    console.error("Create patient error:", error);
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Patient with this phone/email already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create patient" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { error: "Patient ID required" },
        { status: 400 }
      );
    }

    const patient = await prisma.patient.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(patient);
  } catch (error) {
    console.error("Update patient error:", error);
    return NextResponse.json(
      { error: "Failed to update patient" },
      { status: 500 }
    );
  }
}
