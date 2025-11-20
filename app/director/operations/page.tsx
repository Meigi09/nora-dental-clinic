"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DirectorOperationsPage() {
  const { user } = useAuthStore();

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Clinic Operations
          </h1>
          <p className="text-gray-700 mt-2">
            Manage clinic schedule and daily workflow
          </p>
        </div>

        {/* Weekly Schedule */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Weekly Schedule
          </h2>
          <div className="grid grid-cols-7 gap-2">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div key={day} className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="font-semibold text-gray-900">{day}</p>
                <p className="text-sm text-gray-700 mt-2">8:00 AM - 5:00 PM</p>
                <div className="mt-3 space-y-1">
                  <div className="text-xs bg-green-100 text-green-800 p-1 rounded">
                    Dr. Smith
                  </div>
                  <div className="text-xs bg-blue-100 text-blue-800 p-1 rounded">
                    Dr. Wilson
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Schedules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Dr. James Smith
            </h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Monday:</strong> 8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700">
                <strong>Tuesday:</strong> 8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700">
                <strong>Wednesday:</strong> 8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700">
                <strong>Thursday:</strong> 8:00 AM - 5:00 PM
              </p>
              <p className="text-gray-700">
                <strong>Friday:</strong> 8:00 AM - 1:00 PM
              </p>
              <p className="text-gray-700">
                <strong>Saturday:</strong> OFF
              </p>
              <p className="text-gray-700">
                <strong>Sunday:</strong> OFF
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Clinic Settings
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-gray-900 font-medium mb-1">
                  Opening Time
                </label>
                <input
                  type="time"
                  defaultValue="08:00"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-1">
                  Closing Time
                </label>
                <input
                  type="time"
                  defaultValue="17:00"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-gray-900"
                />
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
