"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DoctorTreatmentPlansPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="doctor" userName={user?.name || "Doctor"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Treatment Plans</h1>
          <p className="text-gray-700 mt-2">
            Manage and track patient treatment plans
          </p>
        </div>

        {/* Treatment Plans List */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Cleaning & Scaling
                </h3>
                <p className="text-gray-700 text-sm">Patient: John Doe</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Start Date
                </p>
                <p className="text-gray-900">Jan 10, 2025</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Estimated Duration
                </p>
                <p className="text-gray-900">2 weeks</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">Progress</p>
                <p className="text-gray-900">40% Complete</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm font-semibold mb-2">
                Treatment Steps
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Initial
                  Assessment
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Plaque Removal
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">→</span> Root Scaling (In
                  Progress)
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">○</span> Fluoride
                  Treatment
                </li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
              Update Progress
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Cavity Treatment
                </h3>
                <p className="text-gray-700 text-sm">Patient: Mary Johnson</p>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                Active
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Start Date
                </p>
                <p className="text-gray-900">Jan 8, 2025</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Estimated Duration
                </p>
                <p className="text-gray-900">1 week</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">Progress</p>
                <p className="text-gray-900">75% Complete</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm font-semibold mb-2">
                Treatment Steps
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Examination
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Numbing
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">✓</span> Cavity Removal
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">→</span> Filling (In
                  Progress)
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">○</span> Polishing
                </li>
              </ul>
            </div>
            <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
              Update Progress
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Braces Installation
                </h3>
                <p className="text-gray-700 text-sm">
                  Patient: Robert Williams
                </p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                Scheduled
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Start Date
                </p>
                <p className="text-gray-900">Jan 20, 2025</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Estimated Duration
                </p>
                <p className="text-gray-900">24 months</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">Progress</p>
                <p className="text-gray-900">Not Started</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700 text-sm font-semibold mb-2">
                Treatment Steps
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">○</span> Consultation &
                  Planning
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">○</span> Teeth Cleaning
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">○</span> Braces
                  Installation
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">○</span> Regular
                  Adjustments
                </li>
              </ul>
            </div>
            <button
              className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
              disabled
            >
              Start Treatment
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Active Plans</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">Scheduled</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">Completed</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">
              Avg. Success Rate
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">94%</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
