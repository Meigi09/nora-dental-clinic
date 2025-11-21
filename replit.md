# Nora Dental Clinic Management System

## Overview
A comprehensive dental clinic management system built with Next.js 16, React 19, Prisma ORM, and AI-powered features using Google's Gemini API. The system provides role-based dashboards for Doctors, Receptionists, Patients, and Directors/HOD.

## Project Architecture
- **Frontend Framework**: Next.js 16 with React 19 (App Router)
- **Styling**: Tailwind CSS 4
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth v5 (beta)
- **AI Integration**: Google Gemini API for AI agents
- **State Management**: Zustand
- **Package Manager**: npm

## Database
- **Type**: SQLite (file-based)
- **Location**: `prisma/dev.db`
- **ORM**: Prisma
- **Migrations**: Located in `prisma/migrations/`

## Environment Variables
- `DATABASE_URL`: SQLite database path (currently: `file:./prisma/dev.db`)
- `NEXTAUTH_URL`: Authentication URL (currently: `http://localhost:3000`)
- `NEXTAUTH_SECRET`: Secret for NextAuth
- `GEMINI_API_KEY`: Google Gemini API key (required for AI features)

## Running the Application
The dev server runs on port 5000 with host 0.0.0.0 (configured for Replit proxy).

Command: `npm run dev`

## Demo Credentials
All demo accounts use password: `password`

**Doctors:**
- doctor@clinic.com
- dr.sarah@clinic.com
- dr.robert@clinic.com

**Receptionists:**
- receptionist@clinic.com
- emily.davis@clinic.com

**Director:**
- director@clinic.com

**Patients:**
- patient@email.com
- mary.johnson@email.com
- robert.w@email.com
- jen.martinez@email.com
- david.taylor@email.com

## Key Features
### AI Agents (Powered by Gemini)
1. Appointment Scheduling Agent
2. Diagnosis Assistance Agent
3. Billing Agent
4. Analytics Agent
5. Queue Management Agent

### Role-Based Dashboards
- **Doctor Dashboard**: 7 modules (appointments, patient records, treatment plans, tasks, messaging, settings)
- **Receptionist Dashboard**: 8 modules (appointments, patient registration, billing, queue management, reports)
- **Patient Portal**: 8 modules (appointments, medical history, prescriptions, billing, messages)
- **Director Dashboard**: 8 modules (user management, operations, financial reports, inventory, analytics)

## Project Structure
```
app/                    # Next.js app router pages
├── api/               # API routes
├── doctor/            # Doctor dashboard pages
├── receptionist/      # Receptionist dashboard pages
├── patient/           # Patient portal pages
├── director/          # Director dashboard pages
components/            # Reusable React components
lib/                   # Utility functions and configurations
├── ai/               # Gemini AI agent implementations
├── db/               # Prisma client setup
├── store/            # Zustand stores
prisma/               # Database schema and migrations
└── schema.prisma     # Prisma schema definition
```

## Recent Setup (Nov 21, 2024)
- Configured Next.js dev server for Replit environment (port 5000, host 0.0.0.0)
- Generated Prisma client and ran migrations
- Seeded database with demo data
- Added Gemini AI integration blueprint
- Configured workflow for frontend development
- Set up environment variables for development

## Notes
- TypeScript build errors are ignored in development (configured in next.config.ts)
- The system uses SQLite for development; production should use PostgreSQL or similar
- AI features require GEMINI_API_KEY to be set
