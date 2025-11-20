"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function PatientPrescriptionsPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="patient" userName={user?.name || "Patient"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Prescriptions</h1>
          <p className="text-gray-700 mt-2">
            Your prescription records and medications
          </p>
        </div>

        {/* Active Prescriptions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Active Prescriptions
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-bold">Amoxicillin 500mg</p>
                  <p className="text-gray-700 text-sm">Antibiotic</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-2">
                <div>
                  <span className="font-semibold">Prescribed:</span> Jan 8, 2025
                </div>
                <div>
                  <span className="font-semibold">Expires:</span> Jan 22, 2025
                </div>
                <div>
                  <span className="font-semibold">Dosage:</span> 1 tablet 3x
                  daily
                </div>
                <div>
                  <span className="font-semibold">Quantity:</span> 30 tablets
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Dr. James Smith - After cavity treatment
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Download
              </button>
            </div>

            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-bold">Ibuprofen 200mg</p>
                  <p className="text-gray-700 text-sm">Pain reliever</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-2">
                <div>
                  <span className="font-semibold">Prescribed:</span> Jan 8, 2025
                </div>
                <div>
                  <span className="font-semibold">Expires:</span> Jan 22, 2025
                </div>
                <div>
                  <span className="font-semibold">Dosage:</span> 1 tablet as
                  needed
                </div>
                <div>
                  <span className="font-semibold">Quantity:</span> 20 tablets
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Dr. James Smith - For post-treatment discomfort
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Prescription History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Past Prescriptions
          </h3>
          <div className="space-y-3">
            <div className="border-b border-gray-200 pb-3">
              <p className="text-gray-900 font-semibold">Fluoride Mouthwash</p>
              <p className="text-gray-600 text-sm">
                Prescribed Dec 15, 2024 • Completed
              </p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <p className="text-gray-900 font-semibold">
                Antibacterial Toothpaste
              </p>
              <p className="text-gray-600 text-sm">
                Prescribed Dec 1, 2024 • Completed
              </p>
            </div>
            <div>
              <p className="text-gray-900 font-semibold">
                Hydrogen Peroxide Rinse
              </p>
              <p className="text-gray-600 text-sm">
                Prescribed Nov 15, 2024 • Completed
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Important Information
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✓ Always take medications as prescribed by the doctor</li>
            <li>✓ Do not exceed recommended dosages</li>
            <li>✓ Report any adverse reactions to your dentist immediately</li>
            <li>✓ Store medications in cool, dry place</li>
            <li>✓ Do not share prescriptions with others</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
