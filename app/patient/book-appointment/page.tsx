"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function PatientBookAppointmentPage() {
  const { user } = useAuthStore();
  const [formData, setFormData] = useState({
    doctor: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <DashboardLayout role="patient" userName={user?.name || "Patient"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Book an Appointment
          </h1>
          <p className="text-gray-700 mt-2">
            Schedule a visit with one of our doctors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <form className="space-y-4">
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Select Doctor
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a doctor...</option>
                  <option value="dr-james">
                    Dr. James Smith (General Dentistry)
                  </option>
                  <option value="dr-sarah">
                    Dr. Sarah Wilson (Orthodontics)
                  </option>
                  <option value="dr-robert">
                    Dr. Robert Chen (Pediatric Dentistry)
                  </option>
                </select>
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Service Type
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select service...</option>
                  <option value="checkup">Regular Check-up</option>
                  <option value="cleaning">Cleaning & Scaling</option>
                  <option value="filling">Cavity Filling</option>
                  <option value="root-canal">Root Canal</option>
                  <option value="braces">Braces Consultation</option>
                </select>
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or concerns..."
                  rows="3"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 text-sm mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Confirm Appointment
              </button>
            </form>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Our Doctors
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <span className="font-semibold">Dr. James Smith</span> -
                  General Dentistry, 8 years experience
                </li>
                <li>
                  <span className="font-semibold">Dr. Sarah Wilson</span> -
                  Orthodontics, 6 years experience
                </li>
                <li>
                  <span className="font-semibold">Dr. Robert Chen</span> -
                  Pediatric Dentistry, 4 years experience
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Clinic Hours
              </h3>
              <div className="space-y-2 text-gray-700 text-sm">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Need Help?
              </h3>
              <p className="text-gray-700 text-sm mb-3">
                Call us at (555) 123-4567 or email info@noradentalclinic.com
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
