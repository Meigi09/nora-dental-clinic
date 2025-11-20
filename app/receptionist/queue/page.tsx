"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function ReceptionistQueuePage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout
      role="receptionist"
      userName={user?.name || "Receptionist"}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Queue</h1>
          <p className="text-gray-700 mt-2">
            Monitor and manage the patient queue
          </p>
        </div>

        {/* Queue Status */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">
              Total in Queue
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Being Served</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm font-semibold">Avg Wait Time</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">12 min</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-sm font-semibold">Served Today</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
          </div>
        </div>

        {/* Active Queue */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Active Queue</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Robert Williams</p>
                    <p className="text-gray-700 text-sm">
                      Dr. Sarah Wilson • Scaling | In Room 3
                    </p>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Being Served
                </span>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Jennifer Martinez</p>
                    <p className="text-gray-700 text-sm">
                      Dr. Robert Chen • Consultation | Waiting: 5 min
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Skip
                </button>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">David Taylor</p>
                    <p className="text-gray-700 text-sm">
                      Dr. James Smith • Check-up | Waiting: 10 min
                    </p>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                  Skip
                </button>
              </div>
            </div>

            <div className="border-l-4 border-gray-500 bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Sarah Anderson</p>
                    <p className="text-gray-700 text-sm">
                      Dr. Sarah Wilson • Filling | Waiting: 18 min
                    </p>
                  </div>
                </div>
                <button className="text-red-600 hover:text-red-800 font-semibold text-sm">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add Patient to Queue */}
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 w-full">
          + Add Patient to Queue
        </button>
      </div>
    </DashboardLayout>
  );
}
