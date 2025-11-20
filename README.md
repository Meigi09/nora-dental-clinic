# 🦷 Nora Dental Clinic Management System

A comprehensive dental clinic management system built with Next.js, Prisma, Tailwind CSS, and AI-powered features using Google's Gemini API.

## 📋 Features Overview

### 🎯 Complete Dashboard System with 4 Role-Based Interfaces:

#### 👨‍⚕️ **Doctor Dashboard** (7 Modules)

1. **Dashboard Overview** - Quick metrics and daily schedule
2. **Appointments** - View and manage patient appointments
3. **Patient Records** - Complete patient medical history
4. **Treatment Plans** - Create and track treatment plans
5. **Tasks** - Task management with priorities
6. **Messaging** - Internal clinic communication
7. **Settings** - Profile and preference management

#### 📋 **Receptionist Dashboard** (8 Modules)

1. **Dashboard Overview** - Clinic operations snapshot
2. **Appointments** - Schedule and manage appointments
3. **Register Patient** - Add new patients to the system
4. **Patient List** - Search and manage patient records
5. **Billing & Payments** - Invoice and payment management
6. **Queue Management** - Manage patient waiting queue
7. **Notifications** - System alerts and reminders
8. **Reports** - Generate operational reports

#### 🧑‍🏥 **Patient Portal** (8 Modules)

1. **Dashboard Overview** - Upcoming appointments and messages
2. **My Appointments** - View and cancel appointments
3. **Book Appointment** - Schedule new appointments
4. **Medical History** - View past treatments and visits
5. **Prescriptions** - Access medication prescriptions
6. **Billing & Payments** - View bills and make payments
7. **Messages** - Chat with clinic staff
8. **Profile** - Personal information and preferences

#### 👔 **Director/HOD Dashboard** (8 Modules)

1. **Dashboard Overview** - Clinic performance metrics
2. **Users & Roles Management** - Staff management
3. **Clinic Operations** - Schedule and workflow oversight
4. **Financial Reports** - Revenue and expense analysis
5. **Inventory & Assets** - Stock and equipment management
6. **Analytics** - Performance metrics and insights
7. **System Management** - Backups and audit logs
8. **Settings** - System configuration

---

## 🤖 AI Agent Features (Powered by Gemini)

### 1. **Appointment Scheduling Agent**

- Analyzes doctor availability
- Recommends optimal appointment times
- Considers patient preferences and medical history
- Estimates appointment duration
- Suggests pre-appointment preparations

### 2. **Diagnosis Assistance Agent** (Informational)

- Provides diagnostic insights to doctors
- Reviews patient symptoms and medical history
- Recommends diagnostic tests
- Suggests treatment approaches
- **IMPORTANT:** NOT a replacement for professional medical judgment

### 3. **Billing Agent**

- Automated invoice generation
- Payment plan recommendations
- Insurance claim processing
- Financial analysis
- Payment tracking

### 4. **Analytics Agent**

- Clinic performance analysis
- Revenue optimization suggestions
- Patient trend analysis
- Staff efficiency metrics
- Peak hour identification
- Recommendations for improvement

### 5. **Queue Management Agent**

- Optimizes patient queue order
- Assigns doctors to patients
- Estimates wait times
- Identifies urgent cases
- Suggests communication strategies

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 16 with React 19
- **Styling:** Tailwind CSS 4
- **Database:** SQLite with Prisma ORM
- **Authentication:** Custom JWT-based auth
- **AI Integration:** Google Gemini API
- **State Management:** Zustand
- **Icons:** React Icons
- **Utilities:** Date-fns, Zod validation

---

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn
- SQLite3
- Gemini API Key (free from [Google AI Studio](https://makersuite.google.com/app/apikey))

### 1. Clone & Install Dependencies

```bash
cd nora-dental-clinic
npm install
```

### 2. Environment Setup

Create `.env.local`:

```env
DATABASE_URL="file:./prisma/dev.db"
GEMINI_API_KEY="your-gemini-api-key-here"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-here-change-in-production"
```

### 3. Database Setup

```bash
# Set environment variable (Windows PowerShell)
$env:DATABASE_URL="file:./prisma/dev.db"

# Create database and run migrations
npx prisma migrate dev --name init

# Seed demo data
npx tsx prisma/seed.ts
```

### 4. Start Development Server

```bash
$env:DATABASE_URL="file:./prisma/dev.db"
npm run dev
```

Visit `http://localhost:3000`

---

## 🔐 Demo Credentials

All demo accounts have password: `password`

| Role         | Email                   |
| ------------ | ----------------------- |
| Doctor       | doctor@clinic.com       |
| Receptionist | receptionist@clinic.com |
| Patient      | patient@email.com       |
| Director     | director@clinic.com     |

---

## 📂 Project Structure

```
nora-dental-clinic/
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # Authentication endpoints
│   │   ├── appointments/       # Appointment management
│   │   ├── patients/          # Patient management
│   │   ├── payments/          # Payment processing
│   │   ├── treatment-plans/   # Treatment plan API
│   │   └── ai/execute/        # AI agent endpoint
│   ├── auth/
│   │   ├── login/             # Login page
│   │   └── register/          # Registration page
│   ├── dashboard/
│   │   ├── doctor/            # Doctor dashboard pages
│   │   ├── receptionist/      # Receptionist dashboard
│   │   ├── patient/           # Patient portal
│   │   └── director/          # Director dashboard
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
│
├── components/
│   ├── DashboardLayout.tsx    # Dashboard wrapper component
│   └── ProtectedLayout.tsx    # Route protection component
│
├── lib/
│   ├── auth.ts                # Authentication utilities
│   ├── utils.ts               # Helper functions
│   ├── db/
│   │   └── prisma.ts         # Prisma client
│   ├── ai/
│   │   └── gemini-agents.ts  # AI agent implementations
│   └── store/
│       └── auth.ts            # Zustand auth store
│
├── prisma/
│   ├── schema.prisma          # Database schema
│   ├── seed.ts                # Demo data seeding
│   └── dev.db                 # SQLite database
│
├── public/                    # Static assets
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── next.config.ts             # Next.js config
└── tailwind.config.js         # Tailwind config
```

---

## 🗄️ Database Models

### Core Models

- **User** - Staff accounts (Doctor, Receptionist, Director, Admin)
- **Patient** - Patient records with medical history
- **Appointment** - Scheduling and appointments
- **TreatmentPlan** - Treatment procedures and tracking
- **ConsultationNote** - Medical notes and observations
- **Prescription** - Medication prescriptions
- **Payment** - Billing and payment tracking
- **Document** - X-rays, lab results, scans
- **DentalChart** - Digital tooth charting

### Support Models

- **Session** - User sessions
- **Task** - Task management
- **Message** - Internal messaging
- **Notification** - System alerts
- **Inventory** - Equipment and supplies
- **Queue** - Patient waiting queue
- **Report** - Generated reports

---

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - New user registration

### Appointments

- `GET /api/appointments` - List appointments (filterable)
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments` - Update appointment
- `DELETE /api/appointments` - Cancel appointment

### Patients

- `GET /api/patients` - List/search patients
- `POST /api/patients` - Register new patient
- `PUT /api/patients` - Update patient info

### Payments

- `GET /api/payments` - List payments
- `POST /api/payments` - Record payment
- `PUT /api/payments` - Update payment status

### Treatment Plans

- `GET /api/treatment-plans` - List plans
- `POST /api/treatment-plans` - Create plan
- `PUT /api/treatment-plans` - Update plan

### AI Agents

- `POST /api/ai/execute` - Execute AI agent task

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📝 Development Guide

### Adding New Features

1. **Database Model Changes**

   ```bash
   # Update prisma/schema.prisma
   npx prisma migrate dev --name feature_name
   ```

2. **New API Route**

   - Create file in `app/api/[feature]/route.ts`
   - Follow existing patterns

3. **New Dashboard Page**

   - Create in `app/dashboard/[role]/[page]/page.tsx`
   - Use `ProtectedLayout` and `DashboardLayout`

4. **New AI Agent**
   - Add to `lib/ai/gemini-agents.ts`
   - Register in `executeAIAgent()` function
   - Create corresponding API endpoint

---

## 🔒 Security Notes

- Passwords are hashed with bcryptjs
- Session tokens expire after 7 days
- SQLite database stores sensitive data (encrypt in production)
- Change `NEXTAUTH_SECRET` in production
- Add rate limiting for API endpoints
- Implement HTTPS in production
- Regular database backups recommended

---

## 🐛 Troubleshooting

### Database Connection Issues

```bash
# Reset database
rm prisma/dev.db
$env:DATABASE_URL="file:./prisma/dev.db"
npx prisma migrate dev --name init
npx tsx prisma/seed.ts
```

### Gemini API Errors

- Verify API key is valid
- Check API limits and quotas
- Ensure network connectivity

### Port Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

---

## 📚 Additional Resources

- **Next.js Documentation:** https://nextjs.org/docs
- **Prisma Documentation:** https://www.prisma.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Google Gemini API:** https://ai.google.dev/
- **Zustand:** https://github.com/pmndrs/zustand

---

## 📞 Support & Contact

For issues, feature requests, or questions:

1. Check existing documentation
2. Review database schema in `prisma/schema.prisma`
3. Check API routes in `app/api/`
4. Review error logs in browser console

---

## 📄 License

MIT License - Feel free to use this for your clinic management needs.

---

## 🎯 Future Enhancements

- [ ] SMS/Email notifications
- [ ] Video consultation integration
- [ ] Advanced reporting with charts
- [ ] Mobile app (React Native)
- [ ] Multi-clinic support
- [ ] Insurance integration
- [ ] Prescription delivery system
- [ ] Patient feedback surveys
- [ ] Staff shift scheduling
- [ ] Dental procedure videos
- [ ] Teledentistry features
- [ ] ML-based diagnostic analysis

---

**Built with ❤️ for modern dental clinics**

Last Updated: November 20, 2025
