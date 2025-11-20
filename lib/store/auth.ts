import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: "DOCTOR" | "RECEPTIONIST" | "PATIENT" | "DIRECTOR" | "ADMIN";
  phone?: string;
  specialty?: string;
}

interface AuthStore {
  user: AuthUser | null;
  sessionId: string | null;
  isAuthenticated: boolean;
  setUser: (user: AuthUser | null) => void;
  setSessionId: (sessionId: string | null) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      sessionId: null,
      isAuthenticated: false,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),
      setSessionId: (sessionId) => set({ sessionId }),
      logout: () =>
        set({
          user: null,
          sessionId: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "auth-store",
    }
  )
);
