"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function PatientMedicalHistoryPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="patient" userName={user?.name || "Patient"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
          <p className="text-gray-700 mt-2">
            Your complete dental and health records
          </p>
        </div>

        {/* Personal Health Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 text-sm font-semibold">Full Name</p>
                <p className="text-gray-900">John Doe</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Date of Birth
                </p>
                <p className="text-gray-900">June 15, 1989</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">Age</p>
                <p className="text-gray-900">35 years</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">Gender</p>
                <p className="text-gray-900">Male</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Allergies & Medications
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Known Allergies
                </p>
                <p className="text-gray-900">No known allergies</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Current Medications
                </p>
                <p className="text-gray-900">None reported</p>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-semibold">
                  Medical Conditions
                </p>
                <p className="text-gray-900">None reported</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dental History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Dental History
          </h3>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-semibold">Cavity Filling</p>
                  <p className="text-gray-700 text-sm">Left lower molar #36</p>
                </div>
                <span className="text-gray-600 text-sm">Jan 8, 2025</span>
              </div>
              <p className="text-gray-600 text-sm">
                Dr. James Smith - Composite filling material used
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-semibold">
                    Regular Check-up
                  </p>
                  <p className="text-gray-700 text-sm">
                    Full mouth examination
                  </p>
                </div>
                <span className="text-gray-600 text-sm">Jan 1, 2025</span>
              </div>
              <p className="text-gray-600 text-sm">
                Dr. James Smith - Overall dental health excellent
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-semibold">
                    Professional Cleaning
                  </p>
                  <p className="text-gray-700 text-sm">Full mouth cleaning</p>
                </div>
                <span className="text-gray-600 text-sm">Dec 15, 2024</span>
              </div>
              <p className="text-gray-600 text-sm">
                Dr. Sarah Wilson - Plaque and tartar removed
              </p>
            </div>

            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-semibold">
                    Initial Consultation
                  </p>
                  <p className="text-gray-700 text-sm">General examination</p>
                </div>
                <span className="text-gray-600 text-sm">Dec 1, 2024</span>
              </div>
              <p className="text-gray-600 text-sm">
                Dr. Robert Chen - New patient registration
              </p>
            </div>
          </div>
        </div>

        {/* Dental Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Digital Dental Chart
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Visual representation of your teeth and their conditions
          </p>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 32 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square flex items-center justify-center rounded border-2 font-semibold text-white text-xs ${
                  i === 5
                    ? "bg-orange-600 border-orange-700"
                    : "bg-green-600 border-green-700"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-600 rounded"></div>
              <span className="text-gray-700">Healthy</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-4 bg-orange-600 rounded"></div>
              <span className="text-gray-700">Treated (Filling)</span>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
            Download Records (PDF)
          </button>
          <button className="flex-1 bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700">
            Print Records
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
