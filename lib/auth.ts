import bcryptjs from "bcryptjs";
import prisma from "@/lib/db/prisma";

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcryptjs.compare(password, hashedPassword);
}

export async function createUser(
  email: string,
  password: string,
  name: string,
  role: "DOCTOR" | "RECEPTIONIST" | "PATIENT" | "DIRECTOR" | "ADMIN",
  phone?: string,
  specialty?: string,
  licenseNumber?: string
) {
  const hashedPassword = await hashPassword(password);

  return prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role,
      phone,
      specialty,
      licenseNumber,
    },
  });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
  });
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function validateUserCredentials(email: string, password: string) {
  const user = await getUserByEmail(email);

  if (!user) {
    return null;
  }

  const isPasswordValid = await verifyPassword(password, user.password);

  if (!isPasswordValid) {
    return null;
  }

  // Don't return password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export function generateSessionToken(): string {
  return Math.random().toString(36).substring(2, 15);
}

export async function createSession(userId: string, expiresInDays: number = 7) {
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + expiresInDays);

  return prisma.session.create({
    data: {
      userId,
      expiresAt,
    },
  });
}

export async function getSessionByToken(sessionId: string) {
  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  });

  if (!session) {
    return null;
  }

  // Check if session expired
  if (session.expiresAt < new Date()) {
    await prisma.session.delete({
      where: { id: sessionId },
    });
    return null;
  }

  return session;
}

export async function deleteSession(sessionId: string) {
  return prisma.session.delete({
    where: { id: sessionId },
  });
}
