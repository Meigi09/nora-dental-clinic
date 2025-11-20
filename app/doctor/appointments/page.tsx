'use client';

import { useAuthStore } from '@/lib/store/auth';
import { DashboardLayout } from '@/components/DashboardLayout';
import { useState } from 'react';

export default function DoctorAppointmentsPage() {
  const { user } = useAuthStore();
  const [filter, setFilter] = useState('all');

  return (
    <DashboardLayout role="doctor" userName={user?.name || 'Doctor'}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-700 mt-2">Manage and view your appointments</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 flex-wrap">
          {['all', 'today', 'upcoming', 'completed', 'cancelled'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition ${
                filter === f
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-900 border border-gray-300 hover:border-blue-500'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 p-4 bg-green-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-900 font-bold">9:00 AM - John Doe</p>
                  <p className="text-gray-700 text-sm">Regular Check-up</p>
                  <p className="text-gray-600 text-xs mt-1">Room 1 • Duration: 30 min</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">View Details</button>
                <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm">Add Notes</button>
              </div>
            </div>

            <div className="border-l-4 border-green-500 p-4 bg-green-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-900 font-bold">10:30 AM - Mary Johnson</p>
                  <p className="text-gray-700 text-sm">Cavity Filling</p>
                  <p className="text-gray-600 text-xs mt-1">Room 2 • Duration: 45 min</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Completed</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">View Details</button>
                <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm">Add Notes</button>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-900 font-bold">12:00 PM - Robert Williams</p>
                  <p className="text-gray-700 text-sm">Cleaning & Scaling</p>
                  <p className="text-gray-600 text-xs mt-1">Room 3 • Duration: 30 min</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">In Progress</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Complete</button>
                <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm">Add Notes</button>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-900 font-bold">2:00 PM - Jennifer Martinez</p>
                  <p className="text-gray-700 text-sm">Root Canal</p>
                  <p className="text-gray-600 text-xs mt-1">Room 1 • Duration: 60 min</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Scheduled</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Start</button>
                <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm">Reschedule</button>
                <button className="text-red-600 hover:text-red-800 font-semibold text-sm">Cancel</button>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-900 font-bold">4:00 PM - David Taylor</p>
                  <p className="text-gray-700 text-sm">Consultation</p>
                  <p className="text-gray-600 text-xs mt-1">Room 2 • Duration: 30 min</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">Scheduled</span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Start</button>
                <button className="text-gray-600 hover:text-gray-800 font-semibold text-sm">Reschedule</button>
                <button className="text-red-600 hover:text-red-800 font-semibold text-sm">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Completed Today</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">In Progress</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-700 text-sm font-semibold">Scheduled</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-gray-500">
            <p className="text-gray-700 text-sm font-semibold">Total This Week</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">18</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
