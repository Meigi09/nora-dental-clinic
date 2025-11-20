"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DirectorAnalyticsPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics & Insights
          </h1>
          <p className="text-gray-700 mt-2">
            Performance metrics and clinic insights
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Avg. Appointment Duration
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">45 min</p>
            <p className="text-gray-600 text-xs mt-2">Slightly above target</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">
              Patient Satisfaction
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">4.7/5</p>
            <p className="text-gray-600 text-xs mt-2">↑ Excellent feedback</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">
              Staff Efficiency
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">92%</p>
            <p className="text-gray-600 text-xs mt-2">On-time appointments</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">
              Patient Retention
            </p>
            <p className="text-3xl font-bold text-gray-900 mt-2">87%</p>
            <p className="text-gray-600 text-xs mt-2">Returning patients</p>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Appointments by Doctor
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Dr. James Smith</span>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <span className="text-gray-900 font-semibold">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Dr. Sarah Wilson</span>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600"
                    style={{ width: "33%" }}
                  ></div>
                </div>
                <span className="text-gray-900 font-semibold">33%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Dr. Robert Chen</span>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600"
                    style={{ width: "32%" }}
                  ></div>
                </div>
                <span className="text-gray-900 font-semibold">32%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Service Distribution
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Check-ups</span>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <span className="text-gray-900 font-semibold">40%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Treatments</span>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-600"
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <span className="text-gray-900 font-semibold">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Consultations</span>
                <div className="flex-1 mx-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-600"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <span className="text-gray-900 font-semibold">25%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Key Insights & Recommendations
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-green-600 mr-3 text-lg">✓</span>
              <span className="text-gray-700">
                Patient satisfaction is excellent at 4.7/5. Continue current
                service quality standards.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-3 text-lg">→</span>
              <span className="text-gray-700">
                Dr. James Smith has higher patient volume. Consider load
                balancing with other doctors.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-600 mr-3 text-lg">!</span>
              <span className="text-gray-700">
                Check-up appointments represent 40% of revenue. Consider
                promotional packages to increase treatments.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-3 text-lg">+</span>
              <span className="text-gray-700">
                Staff efficiency is at 92%. Maintain current scheduling
                practices.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
