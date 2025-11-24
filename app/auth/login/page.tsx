"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/store/auth";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { setUser, setSessionId } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Login failed");
        return;
      }

      const data = await response.json();
      setUser(data.user);
      setSessionId(data.sessionId);

      // Redirect based on role
      const dashboardRoutes: Record<string, string> = {
        DOCTOR: "/doctor",
        RECEPTIONIST: "/receptionist",
        PATIENT: "/patient",
        DIRECTOR: "/director",       
      };

      router.push(dashboardRoutes[data.user.role] || "/doctor");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">🦷</h1>
          <h2 className="text-3xl font-bold text-gray-800">
            Nora Dental Clinic
          </h2>
          <p className="text-gray-600 mt-2">Management System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4  text-black py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Demo Credentials:
          </p>
          <p className="text-xs text-gray-600">
            Doctor: doctor@clinic.com / password
          </p>
          <p className="text-xs text-gray-600">
            Receptionist: receptionist@clinic.com / password
          </p>        
          <p className="text-xs text-gray-600">
            Director: director@clinic.com / password
          </p>
        </div>
      </div>
    </div>
  );
}
