"use client";

import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import toast from "react-hot-toast";

interface AddAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAppointmentAdded?: () => void;
  patientId?: string;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
}

export default function AddAppointmentModal({
  isOpen,
  onClose,
  onAppointmentAdded,
  patientId,
}: AddAppointmentModalProps) {
  const [formData, setFormData] = useState({
    patientId: patientId || "",
    doctorId: "",
    date: "",
    time: "",
    type: "Consultation",
    notes: "",
    reasonVisit: "",
  });
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch doctors on mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/patients?search=doctor");
        // Since we don't have a dedicated doctors endpoint, we'll mock this
        // In a real app, create /api/doctors endpoint
        setDoctors([
          { id: "1", name: "Dr. James Smith", specialty: "General Dentistry" },
          { id: "2", name: "Dr. Sarah Wilson", specialty: "Orthodontics" },
          {
            id: "3",
            name: "Dr. Robert Chen",
            specialty: "Pediatric Dentistry",
          },
        ]);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          patientId: formData.patientId || undefined,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error(data.error || "Failed to add appointment");
        return;
      }

      toast.success("Appointment booked successfully!");
      setFormData({
        patientId: patientId || "",
        doctorId: "",
        date: "",
        time: "",
        type: "Consultation",
        notes: "",
        reasonVisit: "",
      });
      onClose();
      onAppointmentAdded?.();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Book Appointment"
      size="lg"
      footer={
        <>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="add-appointment-form"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </>
      }
    >
      <form
        id="add-appointment-form"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {!patientId && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Patient ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="patientId"
              value={formData.patientId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Doctor <span className="text-red-500">*</span>
          </label>
          <select
            name="doctorId"
            value={formData.doctorId}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Appointment Type <span className="text-red-500">*</span>
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          >
            <option value="Consultation">Consultation</option>
            <option value="Treatment">Treatment</option>
            <option value="Check-up">Check-up</option>
            <option value="Emergency">Emergency</option>
            <option value="Cleaning">Cleaning</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Reason for Visit
          </label>
          <input
            type="text"
            name="reasonVisit"
            value={formData.reasonVisit}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="e.g., Tooth pain, Regular checkup"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Any additional information..."
          />
        </div>
      </form>
    </Modal>
  );
}
