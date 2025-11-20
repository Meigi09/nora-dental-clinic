"use client";

import { useAuthStore } from "@/lib/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export default function ProtectedLayout({
  children,
  allowedRoles = [],
}: ProtectedLayoutProps) {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    } else if (
      allowedRoles.length > 0 &&
      user &&
      !allowedRoles.includes(user.role)
    ) {
      router.push("/unauthorized");
    }
  }, [isAuthenticated, user, allowedRoles, router]);

  if (
    !isAuthenticated ||
    (allowedRoles.length > 0 && user && !allowedRoles.includes(user.role))
  ) {
    return <div>Loading...</div>;
  }

  return children;
}
