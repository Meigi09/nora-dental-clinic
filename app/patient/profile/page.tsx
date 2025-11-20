"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useRouter } from "next/navigation";

export default function PatientProfilePage() {
  const { user, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth/login");
  };

  return (
    <DashboardLayout role="patient" userName={user?.name || "Patient"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-700 mt-2">
            Manage your personal information and preferences
          </p>
        </div>

        {/* Profile Picture and Basic Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4">
              JD
            </div>
            <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
            <p className="text-gray-600">Patient #12345</p>
            <button className="mt-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 text-sm">
              Change Photo
            </button>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-900 font-semibold text-sm">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="text-gray-900 font-semibold text-sm">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john@email.com"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Phone
                </label>
                <input
                  type="tel"
                  defaultValue="(555) 123-4567"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Address & Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                Street Address
              </label>
              <input
                type="text"
                defaultValue="123 Main Street"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                City
              </label>
              <input
                type="text"
                defaultValue="New York"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                State
              </label>
              <input
                type="text"
                defaultValue="NY"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                ZIP Code
              </label>
              <input
                type="text"
                defaultValue="10001"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                Contact Name
              </label>
              <input
                type="text"
                defaultValue="Jane Doe"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                Relationship
              </label>
              <input
                type="text"
                defaultValue="Spouse"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                Phone
              </label>
              <input
                type="tel"
                defaultValue="(555) 987-6543"
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Notification Preferences
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <p className="text-gray-900 font-semibold">Email Reminders</p>
                <p className="text-gray-600 text-sm">
                  Get appointment reminders via email
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
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <p className="text-gray-900 font-semibold">SMS Notifications</p>
                <p className="text-gray-600 text-sm">
                  Get SMS alerts for important updates
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-semibold">
                  Marketing Communications
                </p>
                <p className="text-gray-600 text-sm">
                  Receive updates about clinic promotions
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Account Settings
          </h3>
          <div className="space-y-3">
            <button className="w-full border-2 border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50">
              Change Password
            </button>
            <button className="w-full border-2 border-red-600 text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-red-50">
              Delete Account
            </button>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
    </DashboardLayout>
  );
}
