"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function PatientBillingPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="patient" userName={user?.name || "Patient"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Billing & Payments
          </h1>
          <p className="text-gray-700 mt-2">
            Manage your invoices and payment history
          </p>
        </div>

        {/* Account Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">
              Outstanding Balance
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$400</p>
            <p className="text-gray-600 text-xs">1 invoice due</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Total Paid</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$1,250</p>
            <p className="text-gray-600 text-xs">This year</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Insurance Active
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">Yes</p>
            <p className="text-gray-600 text-xs">Delta Dental</p>
          </div>
        </div>

        {/* Pending Invoices */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Pending Invoices
          </h3>
          <div className="space-y-3">
            <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-gray-900 font-bold">INV-2025-0061</p>
                  <p className="text-gray-700 text-sm">
                    Braces Installation Consultation
                  </p>
                </div>
                <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
                  Due Soon
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                <div>
                  <span className="font-semibold">Amount:</span> $400
                </div>
                <div>
                  <span className="font-semibold">Due:</span> Jan 15, 2025
                </div>
              </div>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Payment History
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Invoice
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Service
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Date Paid
                  </th>
                  <th className="text-left py-3 px-4 text-gray-900 font-semibold text-sm">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold text-sm">
                    INV-2025-0042
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Cavity Filling
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $350
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Jan 10, 2025
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Paid
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold text-sm">
                    INV-2025-0030
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Regular Check-up
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $150
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Jan 5, 2025
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Paid
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700 font-semibold text-sm">
                    INV-2025-0015
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Professional Cleaning
                  </td>
                  <td className="py-3 px-4 text-gray-900 font-semibold">
                    $200
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-sm">
                    Dec 20, 2024
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Paid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Insurance & Benefits */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Insurance Information
          </h3>
          <div className="space-y-3">
            <div>
              <p className="text-gray-700 text-sm font-semibold">Provider</p>
              <p className="text-gray-900">Delta Dental</p>
            </div>
            <div>
              <p className="text-gray-700 text-sm font-semibold">
                Policy Number
              </p>
              <p className="text-gray-900">DT-123456789</p>
            </div>
            <div>
              <p className="text-gray-700 text-sm font-semibold">Coverage</p>
              <p className="text-gray-900">
                80% preventive, 70% basic, 50% major
              </p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex gap-3">
          <button className="flex-1 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
            Update Payment Method
          </button>
          <button className="flex-1 bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700">
            Download Invoice
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
