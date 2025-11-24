import { NextRequest, NextResponse } from "next/server";
import { executeAIAgent, AIAgentTask } from "@/lib/ai/gemini-agents";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, context } = body;

    if (!type || !context) {
      return NextResponse.json(
        { error: "Please provide both task type and context for the AI agent" },
        { status: 400 }
      );
    }

    const task: AIAgentTask = {
      type,
      context,
    };

    const result = await executeAIAgent(task);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("AI agent error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
    }
    return NextResponse.json(
      { error: "Unable to process AI request. Please try again later." },
      { status: 500 }
    );
  }
}
