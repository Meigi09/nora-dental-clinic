import { NextRequest, NextResponse } from "next/server";
import { executeAIAgent, AIAgentTask } from "@/lib/ai/gemini-agents";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, context } = body;

    if (!type || !context) {
      return NextResponse.json(
        { error: "Missing task type or context" },
        { status: 400 }
      );
    }

    const task: AIAgentTask = {
      type: type as any,
      context,
    };

    const result = await executeAIAgent(task);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("AI agent error:", error);
    return NextResponse.json(
      { error: "Failed to execute AI agent" },
      { status: 500 }
    );
  }
}
