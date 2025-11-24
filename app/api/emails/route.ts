import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db/prisma";

// Email configuration - can be extended with real email service like Nodemailer, SendGrid, etc.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { senderId, recipientId, subject, content, attachments } = body;

    // Validate required fields
    if (!senderId || !recipientId || !subject || !content) {
      return NextResponse.json(
        {
          error:
            "Please provide all required fields: sender, recipient, subject, and content",
        },
        { status: 400 }
      );
    }

    // Store message in database
    const message = await prisma.message.create({
      data: {
        senderId,
        receiverId: recipientId,
        content: JSON.stringify({
          subject,
          body: content,
          attachments: attachments || [],
        }),
      },
      include: {
        sender: true,
      },
    });

    // TODO: Integrate with actual email service (Nodemailer, SendGrid, etc.)
    // For now, we're just storing in database
    // Example for future: await sendEmailViaProvider(recipient.email, subject, content);

    return NextResponse.json(
      {
        success: true,
        message: "Email message created successfully",
        messageId: message.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Send email error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to send email. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const type = searchParams.get("type"); // "sent" or "received"

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    let messages;
    if (type === "sent") {
      messages = await prisma.message.findMany({
        where: { senderId: userId },
        include: { sender: true },
        orderBy: { createdAt: "desc" },
      });
    } else {
      messages = await prisma.message.findMany({
        where: { receiverId: userId },
        include: { sender: true },
        orderBy: { createdAt: "desc" },
      });
    }

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Get emails error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to load emails. Please try again later." },
      { status: 500 }
    );
  }
}
