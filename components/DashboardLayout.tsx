"use client";

import React from "react";
import Link from "next/link";
import { useAuthStore } from "@/lib/store/auth";
import { useRouter } from "next/navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
  role: string;
  userName: string;
}

export function DashboardLayout({
  children,
  role,
  userName,
}: DashboardLayoutProps) {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  const navItems = {
    doctor: [
      { label: "Overview", href: "/doctor" },
      { label: "Appointments", href: "/doctor/appointments" },
      { label: "Patient Records", href: "/doctor/patients" },
      { label: "Treatment Plans", href: "/doctor/treatment-plans" },
      { label: "Tasks", href: "/doctor/tasks" },
      { label: "Messaging", href: "/doctor/messaging" },
      { label: "Settings", href: "/doctor/settings" },
    ],
    receptionist: [
      { label: "Overview", href: "/receptionist" },
      { label: "Appointments", href: "/receptionist/appointments" },
      {
        label: "Register Patient",
        href: "/receptionist/register-patient",
      },
      { label: "Patient List", href: "/receptionist/patients" },
      { label: "Billing", href: "/receptionist/billing" },
      { label: "Queue", href: "/receptionist/queue" },
      { label: "Notifications", href: "/receptionist/notifications" },
      { label: "Reports", href: "/receptionist/reports" },
    ],
    patient: [
      { label: "Overview", href: "/patient" },
      { label: "My Appointments", href: "/patient/appointments" },
      {
        label: "Book Appointment",
        href: "/patient/book-appointment",
      },
      { label: "Medical History", href: "/patient/medical-history" },
      { label: "Prescriptions", href: "/patient/prescriptions" },
      { label: "Billing", href: "/patient/billing" },
      { label: "Messages", href: "/patient/messages" },
      { label: "Profile", href: "/patient/profile" },
    ],
    director: [
      { label: "Overview", href: "/director" },
      { label: "Users & Roles", href: "/director/users" },
      { label: "Operations", href: "/director/operations" },
      { label: "Financial Reports", href: "/director/financial" },
      { label: "Inventory", href: "/director/inventory" },
      { label: "Analytics", href: "/director/analytics" },
      { label: "System Management", href: "/director/system" },
      { label: "Reports & Settings", href: "/director/reports" },
    ],
  };

  const currentNavItems = navItems[role as keyof typeof navItems] || [];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600">🦷 Nora Dental</h1>
          <p className="text-xs text-gray-600 mt-2 uppercase tracking-wide">
            {role.charAt(0).toUpperCase() + role.slice(1)} Portal
          </p>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-gray-200 bg-linear-to-r from-blue-50 to-blue-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
              {userName.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">{userName}</p>
              <p className="text-xs text-gray-600 capitalize">{role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2 flex-1">
          {currentNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 transition font-medium text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-linear-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition font-medium text-sm"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
