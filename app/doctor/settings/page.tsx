"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useRouter } from "next/navigation";

export default function DoctorSettingsPage() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <DashboardLayout role="doctor" userName={user?.name || "Doctor"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-700 mt-2">
            Manage your profile and preferences
          </p>
        </div>

        {/* Profile Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Profile Picture
            </h3>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mb-4">
                DS
              </div>
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
                Upload Photo
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Dr. James Smith"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="doctor@clinic.com"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Specialization
                </label>
                <input
                  type="text"
                  defaultValue="General Dentistry"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Notification Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">
                  Email Notifications
                </p>
                <p className="text-gray-600 text-sm">
                  Receive email alerts for appointments
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">SMS Reminders</p>
                <p className="text-gray-600 text-sm">
                  Get SMS reminders before appointments
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-gray-900 font-semibold">Task Reminders</p>
                <p className="text-gray-600 text-sm">
                  Get reminders for pending tasks
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between pb-4">
              <div>
                <p className="text-gray-900 font-semibold">
                  Message Notifications
                </p>
                <p className="text-gray-600 text-sm">
                  Get notified of new messages
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Account & Security
          </h3>
          <div className="space-y-4">
            <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50">
              Change Password
            </button>
            <button className="w-full border-2 border-orange-600 text-orange-600 font-semibold py-2 px-4 rounded-lg hover:bg-orange-50">
              Two-Factor Authentication
            </button>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-gray-700 text-sm mb-3">
                Want to leave? You can delete your account, but please note this
                action cannot be undone.
              </p>
              <button className="w-full border-2 border-red-600 text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-50">
                Delete Account
              </button>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
