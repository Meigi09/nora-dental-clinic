import { NextRequest, NextResponse } from "next/server";
import { validateUserCredentials, createSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Please enter your email and password" },
        { status: 400 }
      );
    }

    const user = await validateUserCredentials(email, password);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const session = await createSession(user.id);

    return NextResponse.json({
      user,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Login error:", error);

    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }

    return NextResponse.json(
      { error: "Unable to login. Please try again later." },
      { status: 500 }
    );
  }
}
