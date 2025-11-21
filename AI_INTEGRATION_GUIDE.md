# AI Integration Guide - Nora Dental Clinic

## Overview
The Nora Dental Clinic Management System now has **5 fully functional AI agents** powered by Google's Gemini 2.5 Flash model. These agents provide intelligent automation and insights for clinic operations.

## Available AI Agents

### 1. Appointment Scheduling Agent
**Endpoint**: `POST /api/appointments` (with `useAI: true`)

**Purpose**: Optimizes appointment booking based on doctor availability, patient history, and clinic schedule.

**Features**:
- Analyzes doctor availability
- Recommends optimal appointment slots
- Suggests pre-appointment preparations
- Estimates appointment duration
- Identifies follow-up needs

**Example Usage**:
```javascript
const response = await fetch('/api/appointments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    patientId: '...',
    doctorId: '...',
    date: '2024-12-01',
    time: '10:00',
    type: 'Root Canal',
    useAI: true
  })
});
```

### 2. Diagnosis Assistance Agent
**Endpoint**: `POST /api/ai/execute`

**Purpose**: Provides informational diagnostic insights to support dentists (NOT a replacement for professional judgment).

**Features**:
- Reviews patient symptoms and medical history
- Suggests possible conditions to consider
- Recommends diagnostic tests
- Provides treatment approach suggestions
- Includes prescription considerations

**Example Usage**:
```javascript
const response = await fetch('/api/ai/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'diagnosis_assistance',
    context: {
      symptoms: 'Tooth pain, swelling',
      patientAge: 45,
      medicalHistory: 'Diabetes',
      allergies: 'Penicillin',
      examinationFindings: 'Decay in molar'
    }
  })
});
```

### 3. Billing Agent
**Endpoint**: `POST /api/payments` (with `useAI: true`)

**Purpose**: Automates invoice generation and provides payment recommendations.

**Features**:
- Generates itemized invoices
- Calculates total amounts due
- Suggests payment plan options
- Processes insurance claim information
- Creates follow-up reminders

**Example Usage**:
```javascript
const response = await fetch('/api/payments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    patientId: '...',
    amount: 450,
    method: 'CARD',
    useAI: true
  })
});
```

### 4. Analytics Agent
**Endpoint**: `POST /api/ai/execute`

**Purpose**: Analyzes clinic performance and provides actionable insights.

**Features**:
- Key insights and trends identification
- Areas for improvement analysis
- Revenue optimization suggestions
- Staff efficiency recommendations
- Patient satisfaction recommendations

**Example Usage**:
```javascript
const response = await fetch('/api/ai/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'analytics',
    context: {
      totalAppointments: 150,
      completedAppointments: 135,
      noShowRate: 10,
      revenue: 45000,
      topProcedures: ['Teeth Cleaning', 'Cavity Filling', 'Root Canal'],
      doctorPerformance: { 'Dr. Smith': 45, 'Dr. Wilson': 50 },
      peakHours: ['9:00-11:00', '14:00-16:00']
    }
  })
});
```

### 5. Queue Management Agent
**Endpoint**: `POST /api/ai/execute`

**Purpose**: Optimizes patient queue and wait times.

**Features**:
- Recommends optimal queue order
- Estimates wait times per patient
- Suggests doctor assignments
- Identifies potential delays
- Provides patient communication strategies

**Example Usage**:
```javascript
const response = await fetch('/api/ai/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'queue_management',
    context: {
      patientsWaiting: 5,
      avgWaitTime: 25,
      availableDoctors: ['Dr. Smith', 'Dr. Wilson'],
      urgentCases: 1,
      queue: [...]
    }
  })
});
```

## Technical Implementation

### SDK Used
- **Package**: `@google/genai` (v1.30.0)
- **Model**: `gemini-2.5-flash`
- **API Key**: Stored in `GEMINI_API_KEY` secret

### Response Format
All AI agents return responses in this format:
```typescript
interface AIAgentResponse {
  success: boolean;
  result?: any;
  error?: string;
}
```

### Integration Points
1. **Appointments API**: Integrated AI scheduling when `useAI: true`
2. **Payments API**: Integrated billing agent when `useAI: true`
3. **Dedicated AI Endpoint**: `POST /api/ai/execute` for all agent types

## Testing the AI Agents

### Using cURL:
```bash
# Test Analytics Agent
curl -X POST http://localhost:5000/api/ai/execute \
  -H "Content-Type: application/json" \
  -d '{
    "type": "analytics",
    "context": {
      "totalAppointments": 150,
      "completedAppointments": 135,
      "noShowRate": 10,
      "revenue": 45000,
      "topProcedures": ["Teeth Cleaning", "Cavity Filling"],
      "doctorPerformance": {"Dr. Smith": 45},
      "peakHours": ["9:00-11:00"]
    }
  }'
```

### From Frontend:
All AI agents can be called from the React frontend using the existing API routes. Simply add `useAI: true` to appointment and payment requests, or call `/api/ai/execute` directly for other agents.

## Benefits

### For Doctors:
- Diagnostic insights support clinical decision-making
- Automated scheduling recommendations
- Performance analytics

### For Receptionists:
- Optimized appointment booking
- Automated billing and invoicing
- Smart queue management

### For Directors:
- Comprehensive clinic analytics
- Revenue optimization insights
- Staff efficiency recommendations

### For Patients:
- Reduced wait times
- Better appointment scheduling
- Improved communication

## Security & Privacy
- All AI processing uses secure API calls
- Patient data is only sent to Google's Gemini API for processing
- No patient data is stored by the AI service
- API key is securely stored in Replit secrets

## Future Enhancements
- Real-time patient sentiment analysis
- Automated treatment plan generation
- Predictive patient no-show alerts
- Multi-language support for patient communication
- Integration with dental imaging analysis
