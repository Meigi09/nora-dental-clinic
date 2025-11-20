import prisma from "../lib/db/prisma";
import { hashPassword } from "../lib/auth";

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.treatmentPlan.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.user.deleteMany();

  // ============ DOCTORS ============
  const doctor1 = await prisma.user.create({
    data: {
      email: "doctor@clinic.com",
      password: await hashPassword("password"),
      name: "Dr. James Smith",
      role: "DOCTOR",
      phone: "+1-555-0101",
      specialty: "General Dentistry",
      licenseNumber: "DDS-2019-0001",
      yearsExp: 8,
      isActive: true,
    },
  });

  const doctor2 = await prisma.user.create({
    data: {
      email: "dr.sarah@clinic.com",
      password: await hashPassword("password"),
      name: "Dr. Sarah Wilson",
      role: "DOCTOR",
      phone: "+1-555-0102",
      specialty: "Orthodontics",
      licenseNumber: "DDS-2020-0002",
      yearsExp: 6,
      isActive: true,
    },
  });

  const doctor3 = await prisma.user.create({
    data: {
      email: "dr.robert@clinic.com",
      password: await hashPassword("password"),
      name: "Dr. Robert Chen",
      role: "DOCTOR",
      phone: "+1-555-0103",
      specialty: "Pediatric Dentistry",
      licenseNumber: "DDS-2021-0003",
      yearsExp: 4,
      isActive: true,
    },
  });

  // ============ RECEPTIONISTS ============
  const receptionist1 = await prisma.user.create({
    data: {
      email: "receptionist@clinic.com",
      password: await hashPassword("password"),
      name: "Sarah Johnson",
      role: "RECEPTIONIST",
      phone: "+1-555-0201",
      isActive: true,
    },
  });

  const receptionist2 = await prisma.user.create({
    data: {
      email: "emily.davis@clinic.com",
      password: await hashPassword("password"),
      name: "Emily Davis",
      role: "RECEPTIONIST",
      phone: "+1-555-0202",
      isActive: true,
    },
  });

  // ============ DIRECTOR ============
  const director = await prisma.user.create({
    data: {
      email: "director@clinic.com",
      password: await hashPassword("password"),
      name: "Dr. Michael Brown",
      role: "DIRECTOR",
      phone: "+1-555-0301",
      specialty: "Dental Administration",
      licenseNumber: "DDS-2018-0004",
      yearsExp: 12,
      isActive: true,
    },
  });

  // ============ PATIENTS ============
  const patients = [];

  const patient1 = await prisma.patient.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "patient@email.com",
      phone: "+1-555-1001",
      dob: new Date("1990-01-15"),
      gender: "Male",
      address: "123 Main St, Springfield, IL 62701",
      medicalHistory: "No significant medical history. Occasional migraines.",
      allergies: "Penicillin",
      insuranceProvider: "Blue Cross Blue Shield",
      insuranceNumber: "BCBS-123456-001",
      emergyContactName: "Jane Doe",
      emergencyContactPhone: "+1-555-1002",
      status: "RETURNING",
    },
  });
  patients.push(patient1);

  const patient2 = await prisma.patient.create({
    data: {
      firstName: "Mary",
      lastName: "Johnson",
      email: "mary.johnson@email.com",
      phone: "+1-555-1003",
      dob: new Date("1985-05-20"),
      gender: "Female",
      address: "456 Oak Ave, Springfield, IL 62702",
      medicalHistory: "Diabetes Type 2 (managed)",
      allergies: "None known",
      insuranceProvider: "Aetna",
      insuranceNumber: "AET-654321-001",
      emergyContactName: "Tom Johnson",
      emergencyContactPhone: "+1-555-1004",
      status: "ACTIVE",
    },
  });
  patients.push(patient2);

  const patient3 = await prisma.patient.create({
    data: {
      firstName: "Robert",
      lastName: "Williams",
      email: "robert.w@email.com",
      phone: "+1-555-1005",
      dob: new Date("1988-08-10"),
      gender: "Male",
      address: "789 Pine Rd, Springfield, IL 62703",
      medicalHistory: "Hypertension (controlled)",
      allergies: "Sulfa drugs",
      insuranceProvider: "United Healthcare",
      insuranceNumber: "UHC-789012-001",
      emergyContactName: "Lisa Williams",
      emergencyContactPhone: "+1-555-1006",
      status: "NEW",
    },
  });
  patients.push(patient3);

  const patient4 = await prisma.patient.create({
    data: {
      firstName: "Jennifer",
      lastName: "Martinez",
      email: "jen.martinez@email.com",
      phone: "+1-555-1007",
      dob: new Date("1992-03-25"),
      gender: "Female",
      address: "321 Elm St, Springfield, IL 62704",
      medicalHistory: "Anxiety disorder (treated)",
      allergies: "Aspirin",
      insuranceProvider: "Cigna",
      insuranceNumber: "CIG-345678-001",
      emergyContactName: "Carlos Martinez",
      emergencyContactPhone: "+1-555-1008",
      status: "ACTIVE",
    },
  });
  patients.push(patient4);

  const patient5 = await prisma.patient.create({
    data: {
      firstName: "David",
      lastName: "Taylor",
      email: "david.taylor@email.com",
      phone: "+1-555-1009",
      dob: new Date("1995-11-30"),
      gender: "Male",
      address: "654 Maple Dr, Springfield, IL 62705",
      medicalHistory: "No known medical conditions",
      allergies: "Latex",
      insuranceProvider: "CIGNA",
      insuranceNumber: "CIG-901234-001",
      emergyContactName: "Karen Taylor",
      emergencyContactPhone: "+1-555-1010",
      status: "NEW",
    },
  });
  patients.push(patient5);

  // ============ APPOINTMENTS ============
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const apt1 = await prisma.appointment.create({
    data: {
      patientId: patient1.id,
      doctorId: doctor1.id,
      date: tomorrow,
      time: "10:00 AM",
      type: "Consultation",
      reasonVisit: "Regular checkup and cleaning",
      status: "SCHEDULED",
      notes: "First-time checkup, patient nervous",
    },
  });

  const apt2 = await prisma.appointment.create({
    data: {
      patientId: patient2.id,
      doctorId: doctor1.id,
      date: tomorrow,
      time: "11:00 AM",
      type: "Treatment",
      reasonVisit: "Cavity filling",
      status: "SCHEDULED",
      notes: "Filling needed on tooth #14",
    },
  });

  const apt3 = await prisma.appointment.create({
    data: {
      patientId: patient3.id,
      doctorId: doctor2.id,
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      time: "02:00 PM",
      type: "Consultation",
      reasonVisit: "Braces consultation",
      status: "SCHEDULED",
      notes: "Interested in orthodontic treatment",
    },
  });

  const apt4 = await prisma.appointment.create({
    data: {
      patientId: patient4.id,
      doctorId: doctor3.id,
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      time: "03:30 PM",
      type: "Check-up",
      reasonVisit: "Child dental checkup",
      status: "SCHEDULED",
      notes: "Annual pediatric checkup",
    },
  });

  // ============ TREATMENT PLANS ============
  const tp1 = await prisma.treatmentPlan.create({
    data: {
      patientId: patient1.id,
      doctorId: doctor1.id,
      diagnosis: "Plaque buildup and gingivitis",
      procedures: JSON.stringify([
        "Professional Cleaning",
        "Scaling",
        "Root Planning",
      ]),
      totalCost: 250,
      sessions: 2,
      status: "ACTIVE",
      timeline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      notes: "Patient needs improved oral hygiene",
    },
  });

  const tp2 = await prisma.treatmentPlan.create({
    data: {
      patientId: patient2.id,
      doctorId: doctor1.id,
      diagnosis: "Multiple cavities",
      procedures: JSON.stringify(["Cavity Fillings x3", "Fluoride Treatment"]),
      totalCost: 450,
      sessions: 3,
      status: "PENDING",
      timeline: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      notes: "Recommend dietary changes to prevent more cavities",
    },
  });

  const tp3 = await prisma.treatmentPlan.create({
    data: {
      patientId: patient3.id,
      doctorId: doctor2.id,
      diagnosis: "Malocclusion requiring orthodontic correction",
      procedures: JSON.stringify([
        "Initial Consultation",
        "Impressions",
        "Braces Installation",
      ]),
      totalCost: 3500,
      sessions: 1,
      status: "PENDING",
      timeline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      notes: "Patient approved for braces. 24-month treatment plan.",
    },
  });

  // ============ CONSULTATION NOTES ============
  const cn1 = await prisma.consultationNote.create({
    data: {
      patientId: patient1.id,
      doctorId: doctor1.id,
      date: new Date(),
      diagnosis: "Gingivitis Stage 1",
      treatment: "Professional cleaning, patient education on oral hygiene",
      notes: "Patient complies with instructions. Follow-up in 4 weeks.",
      attachments: JSON.stringify(["xray_01.jpg", "chart_01.pdf"]),
    },
  });

  const cn2 = await prisma.consultationNote.create({
    data: {
      patientId: patient2.id,
      doctorId: doctor1.id,
      date: new Date(),
      diagnosis: "Dental caries (cavities) x3",
      treatment: "Scheduled for composite fillings",
      notes: "Patient reports pain on #14. Recommended sugar-free diet.",
      attachments: JSON.stringify(["xray_02.jpg"]),
    },
  });

  // ============ PRESCRIPTIONS ============
  const presc1 = await prisma.prescription.create({
    data: {
      patientId: patient1.id,
      medication: "Amoxicillin",
      dosage: "500mg",
      instructions:
        "Take one tablet three times daily for 7 days. With or without food.",
      issuedBy: doctor1.id,
      date: new Date(),
    },
  });

  const presc2 = await prisma.prescription.create({
    data: {
      patientId: patient2.id,
      medication: "Ibuprofen",
      dosage: "200mg",
      instructions:
        "Take one tablet every 6-8 hours as needed for pain. Do not exceed 3 tablets per day.",
      issuedBy: doctor1.id,
      date: new Date(),
    },
  });

  // ============ PAYMENTS ============
  const payment1 = await prisma.payment.create({
    data: {
      patientId: patient1.id,
      amount: 250,
      method: "CARD",
      status: "PAID",
      invoiceNumber: "INV-2025-11-001",
      date: new Date(),
    },
  });

  const payment2 = await prisma.payment.create({
    data: {
      patientId: patient2.id,
      amount: 450,
      method: "CARD",
      status: "UNPAID",
      invoiceNumber: "INV-2025-11-002",
      date: new Date(),
    },
  });

  const payment3 = await prisma.payment.create({
    data: {
      patientId: patient3.id,
      amount: 150,
      method: "CASH",
      status: "PAID",
      invoiceNumber: "INV-2025-11-003",
      date: new Date(),
    },
  });

  // ============ DENTAL CHARTS ============
  const chart1 = await prisma.dentalChart.create({
    data: {
      patientId: patient1.id,
      chartData: JSON.stringify({
        teeth: {
          1: { status: "healthy", notes: "No issues" },
          2: { status: "healthy", notes: "No issues" },
          3: { status: "cavity", notes: "Small cavity detected" },
          4: { status: "crown", notes: "Old crown - may need replacement" },
        },
      }),
    },
  });

  const chart2 = await prisma.dentalChart.create({
    data: {
      patientId: patient2.id,
      chartData: JSON.stringify({
        teeth: {
          1: { status: "healthy", notes: "No issues" },
          14: { status: "cavity", notes: "Cavity filled" },
          15: { status: "cavity", notes: "Cavity filled" },
        },
      }),
    },
  });

  // ============ TASKS ============
  const task1 = await prisma.task.create({
    data: {
      assignedTo: receptionist1.id,
      description: "Confirm tomorrow's appointments with patients",
      patientId: patient1.id,
      priority: "HIGH",
      deadline: tomorrow,
      status: "IN_PROGRESS",
    },
  });

  const task2 = await prisma.task.create({
    data: {
      assignedTo: doctor1.id,
      description: "Review Mary Johnson's X-rays and prepare treatment plan",
      patientId: patient2.id,
      priority: "MEDIUM",
      deadline: new Date(Date.now() + 24 * 60 * 60 * 1000),
      status: "NOT_STARTED",
    },
  });

  const task3 = await prisma.task.create({
    data: {
      assignedTo: receptionist2.id,
      description: "Process insurance claim for patient Robert Williams",
      patientId: patient3.id,
      priority: "MEDIUM",
      deadline: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      status: "NOT_STARTED",
    },
  });

  // ============ MESSAGES ============
  const msg1 = await prisma.message.create({
    data: {
      senderId: doctor1.id,
      receiverId: receptionist1.id,
      content: "Please reschedule patient John Doe to next week if possible",
      read: false,
    },
  });

  const msg2 = await prisma.message.create({
    data: {
      senderId: receptionist1.id,
      receiverId: doctor1.id,
      content: "Done. Rescheduled to next Tuesday at 10:00 AM",
      read: false,
    },
  });

  // ============ QUEUE ============
  const queue1 = await prisma.queue.create({
    data: {
      patientId: patient1.id,
      status: "WAITING",
      reason: "Regular checkup",
      doctorId: doctor1.id,
      estimatedWait: 15,
    },
  });

  // ============ NOTIFICATIONS ============
  const notif1 = await prisma.notification.create({
    data: {
      userId: doctor1.id,
      type: "APPOINTMENT",
      message: "You have 2 appointments scheduled for tomorrow",
      read: false,
    },
  });

  const notif2 = await prisma.notification.create({
    data: {
      userId: receptionist1.id,
      type: "BILLING",
      message: "1 unpaid invoice due in 3 days",
      read: false,
    },
  });

  // ============ INVENTORY ============
  await prisma.inventory.create({
    data: {
      itemName: "Dental Suction Tips",
      quantity: 150,
      minLevel: 50,
    },
  });

  await prisma.inventory.create({
    data: {
      itemName: "Disposable Gloves (XL)",
      quantity: 500,
      minLevel: 200,
    },
  });

  await prisma.inventory.create({
    data: {
      itemName: "Dental Burs - Diamond",
      quantity: 80,
      minLevel: 20,
    },
  });

  await prisma.inventory.create({
    data: {
      itemName: "Composite Resin Material",
      quantity: 30,
      minLevel: 10,
    },
  });

  // ============ REPORTS ============
  await prisma.report.create({
    data: {
      type: "financial",
      data: JSON.stringify({
        month: "November 2025",
        totalRevenue: 2850,
        totalExpenses: 1200,
        netProfit: 1650,
      }),
      createdBy: director.id,
    },
  });

  console.log("✅ Database seeded successfully!");
  console.log("\n📋 Demo Credentials:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🏥 DOCTORS:");
  console.log("  • Dr. James Smith: doctor@clinic.com");
  console.log("  • Dr. Sarah Wilson: dr.sarah@clinic.com");
  console.log("  • Dr. Robert Chen: dr.robert@clinic.com");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("👥 RECEPTIONISTS:");
  console.log("  • Sarah Johnson: receptionist@clinic.com");
  console.log("  • Emily Davis: emily.davis@clinic.com");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("👔 DIRECTOR:");
  console.log("  • Dr. Michael Brown: director@clinic.com");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("🧑‍🏥 PATIENTS:");
  console.log("  • John Doe: patient@email.com");
  console.log("  • Mary Johnson: mary.johnson@email.com");
  console.log("  • Robert Williams: robert.w@email.com");
  console.log("  • Jennifer Martinez: jen.martinez@email.com");
  console.log("  • David Taylor: david.taylor@email.com");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("\n🔐 All accounts use password: 'password'");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
