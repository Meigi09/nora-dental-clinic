import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface AIAgentTask {
  type:
    | "appointment_scheduling"
    | "diagnosis_assistance"
    | "billing"
    | "analytics"
    | "queue_management";
  context: Record<string, unknown>;
}

export interface AIAgentResponse {
  success: boolean;
  result?: unknown;
  error?: string;
}

// AI Agent for Appointment Scheduling
export async function appointmentSchedulingAgent(
  context: Record<string, unknown>
): Promise<AIAgentResponse> {
  try {
    const prompt = `You are a dental clinic appointment scheduling assistant.
    
Given the following context:
- Available doctor: ${context.doctorName}
- Patient name: ${context.patientName}
- Patient medical history: ${context.medicalHistory || "None"}
- Requested appointment type: ${context.appointmentType}
- Preferred dates: ${
      Array.isArray(context.preferredDates)
        ? context.preferredDates.join(", ")
        : "None"
    }
- Current appointments in system: ${JSON.stringify(
      context.existingAppointments
    )}

Recommend:
1. The best appointment slot considering doctor availability
2. Any pre-appointment preparations needed
3. Estimated appointment duration
4. Follow-up appointment needs

Respond in JSON format with keys: recommendedSlot, preparations, duration, followUpNeeded`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response?.text() || "";

    // Parse JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return {
        success: true,
        result: JSON.parse(jsonMatch[0]),
      };
    }

    return {
      success: true,
      result: { recommendation: text },
    };
  } catch (error) {
    return {
      success: false,
      error: `Appointment scheduling agent error: ${error}`,
    };
  }
}

// AI Agent for Diagnosis Assistance
export async function diagnosisAssistanceAgent(
  context: Record<string, unknown>
): Promise<AIAgentResponse> {
  try {
    const prompt = `You are a dental diagnosis assistant AI (INFORMATIONAL ONLY - NOT A REPLACEMENT FOR PROFESSIONAL DIAGNOSIS).
    
Given the following clinical observations:
- Symptoms: ${context.symptoms}
- Patient age: ${context.patientAge}
- Medical history: ${context.medicalHistory || "None"}
- Allergies: ${context.allergies || "None"}
- Recent treatments: ${context.recentTreatments || "None"}
- Examination findings: ${context.examinationFindings}

Provide:
1. Possible conditions to consider (for doctor review)
2. Recommended diagnostic tests
3. General treatment approaches (informational)
4. Prescription considerations (informational)

IMPORTANT: This is for the dentist to review. Always recommend professional consultation.
Respond in JSON format.`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response?.text() || "";

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return {
        success: true,
        result: JSON.parse(jsonMatch[0]),
      };
    }

    return {
      success: true,
      result: { analysis: text },
    };
  } catch (error) {
    return {
      success: false,
      error: `Diagnosis assistance agent error: ${error}`,
    };
  }
}

// AI Agent for Billing & Invoicing
export async function billingAgent(
  context: Record<string, unknown>
): Promise<AIAgentResponse> {
  try {
    const prompt = `You are a dental clinic billing assistant.
    
Generate an invoice summary for:
- Patient: ${context.patientName}
- Procedures: ${
      Array.isArray(context.procedures) ? context.procedures.join(", ") : "None"
    }
- Costs: ${JSON.stringify(context.costs)}
- Insurance coverage: ${context.insuranceCoverage || "None"}
- Patient balance history: ${context.balanceHistory || "None"}

Provide:
1. Itemized invoice breakdown
2. Total amount due
3. Payment plan options if balance is high
4. Insurance claim information
5. Follow-up reminder

Respond in JSON format with keys: itemization, totalDue, paymentOptions, insuranceInfo, reminder`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response?.text() || "";

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return {
        success: true,
        result: JSON.parse(jsonMatch[0]),
      };
    }

    return {
      success: true,
      result: { billing: text },
    };
  } catch (error) {
    return {
      success: false,
      error: `Billing agent error: ${error}`,
    };
  }
}

// AI Agent for Analytics
export async function analyticsAgent(
  context: Record<string, unknown>
): Promise<AIAgentResponse> {
  try {
    const prompt = `You are a dental clinic analytics advisor.
    
Analyze the following clinic data:
- Total appointments (period): ${context.totalAppointments}
- Completed appointments: ${context.completedAppointments}
- No-show rate: ${context.noShowRate}%
- Revenue: ${context.revenue}
- Top procedures: ${
      Array.isArray(context.topProcedures)
        ? context.topProcedures.join(", ")
        : "None"
    }
- Doctor performance: ${JSON.stringify(context.doctorPerformance)}
- Peak hours: ${
      Array.isArray(context.peakHours) ? context.peakHours.join(", ") : "None"
    }

Provide:
1. Key insights and trends
2. Areas for improvement
3. Revenue optimization suggestions
4. Staff efficiency recommendations
5. Patient satisfaction recommendations

Respond in JSON format.`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response?.text() || "";

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return {
        success: true,
        result: JSON.parse(jsonMatch[0]),
      };
    }

    return {
      success: true,
      result: { analysis: text },
    };
  } catch (error) {
    return {
      success: false,
      error: `Analytics agent error: ${error}`,
    };
  }
}

// AI Agent for Queue Management
export async function queueManagementAgent(
  context: Record<string, unknown>
): Promise<AIAgentResponse> {
  try {
    const prompt = `You are a dental clinic queue management assistant.
    
Current queue status:
- Patients waiting: ${context.patientsWaiting}
- Average wait time: ${context.avgWaitTime} minutes
- Available doctors: ${
      Array.isArray(context.availableDoctors)
        ? context.availableDoctors.join(", ")
        : "None"
    }
- Doctor availability: ${JSON.stringify(context.doctorAvailability)}
- Urgent cases: ${context.urgentCases}
- Queue: ${JSON.stringify(context.queue)}

Recommend:
1. Optimal queue order based on urgency and doctor availability
2. Estimated wait times for each patient
3. Doctor assignments for efficiency
4. Potential delays or issues
5. Patient communication suggestions

Respond in JSON format.`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response?.text() || "";

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return {
        success: true,
        result: JSON.parse(jsonMatch[0]),
      };
    }

    return {
      success: true,
      result: { queueManagement: text },
    };
  } catch (error) {
    return {
      success: false,
      error: `Queue management agent error: ${error}`,
    };
  }
}

// Main AI Agent Router
export async function executeAIAgent(
  task: AIAgentTask
): Promise<AIAgentResponse> {
  switch (task.type) {
    case "appointment_scheduling":
      return appointmentSchedulingAgent(task.context);
    case "diagnosis_assistance":
      return diagnosisAssistanceAgent(task.context);
    case "billing":
      return billingAgent(task.context);
    case "analytics":
      return analyticsAgent(task.context);
    case "queue_management":
      return queueManagementAgent(task.context);
    default:
      return {
        success: false,
        error: "Unknown task type",
      };
  }
}
