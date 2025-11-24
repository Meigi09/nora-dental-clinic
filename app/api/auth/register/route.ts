import { NextRequest, NextResponse } from "next/server";
import { createSession, hashPassword } from "@/lib/auth";
import prisma from "@/lib/db/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, phone } = body;

    // Validate input
    if (!email || !password || !name || !phone) {
      return NextResponse.json(
        {
          error:
            "Please provide all required information: email, password, name, and phone",
        },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error:
            "This email is already registered. Please use a different email.",
        },
        { status: 400 }
      );
    }

    // Only allow PATIENT role for public registration
    // Clinic staff (DOCTOR, RECEPTIONIST, DIRECTOR) can only be registered by the director
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "PATIENT",
        phone,
      },
    });

    // Create session
    const session = await createSession(user.id);

    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        user: userWithoutPassword,
        sessionId: session.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to complete registration. Please try again later." },
      { status: 500 }
    );
  }
}
