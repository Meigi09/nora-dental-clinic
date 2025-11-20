"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function DoctorTasksPage() {
  const { user } = useAuthStore();
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Review patient X-rays - John Doe",
      priority: "high",
      status: "pending",
      dueDate: "Today",
    },
    {
      id: 2,
      title: "Call Mary Johnson for follow-up",
      priority: "high",
      status: "pending",
      dueDate: "Today",
    },
    {
      id: 3,
      title: "Prepare treatment plan for Robert Williams",
      priority: "medium",
      status: "in-progress",
      dueDate: "Tomorrow",
    },
    {
      id: 4,
      title: "Review lab results",
      priority: "medium",
      status: "pending",
      dueDate: "Tomorrow",
    },
    {
      id: 5,
      title: "Update dental chart for Jennifer Martinez",
      priority: "low",
      status: "completed",
      dueDate: "Today",
    },
    {
      id: 6,
      title: "Submit insurance forms",
      priority: "medium",
      status: "pending",
      dueDate: "Jan 20",
    },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "completed" ? "pending" : "completed",
            }
          : task
      )
    );
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800",
    };
    return colors[priority] || colors.low;
  };

  const getStatusIcon = (status) => {
    const icons = {
      pending: "○",
      "in-progress": "→",
      completed: "✓",
    };
    return icons[status] || "○";
  };

  return (
    <DashboardLayout role="doctor" userName={user?.name || "Doctor"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks</h1>
          <p className="text-gray-700 mt-2">
            Manage your daily tasks and reminders
          </p>
        </div>

        {/* Task Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
            <p className="text-gray-700 text-sm font-semibold">High Priority</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <p className="text-gray-700 text-sm font-semibold">In Progress</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm font-semibold">Pending</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">4</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm font-semibold">Completed</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">1</p>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Your Tasks</h3>
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-start justify-between p-4 border-l-4 rounded-lg transition ${
                  task.status === "completed"
                    ? "border-gray-400 bg-gray-50"
                    : task.priority === "high"
                    ? "border-red-500 bg-red-50"
                    : task.priority === "medium"
                    ? "border-yellow-500 bg-yellow-50"
                    : "border-green-500 bg-green-50"
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`text-xl font-bold ${
                        task.status === "completed"
                          ? "text-green-600"
                          : "text-gray-400"
                      }`}
                    >
                      {getStatusIcon(task.status)}
                    </button>
                    <div>
                      <p
                        className={`font-semibold ${
                          task.status === "completed"
                            ? "text-gray-500 line-through"
                            : "text-gray-900"
                        }`}
                      >
                        {task.title}
                      </p>
                      <p className="text-gray-600 text-sm">
                        Due: {task.dueDate}
                      </p>
                    </div>
                  </div>
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getPriorityColor(
                    task.priority
                  )}`}
                >
                  {task.priority.charAt(0).toUpperCase() +
                    task.priority.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Task */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Create New Task
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-gray-900 font-semibold text-sm">
                Task Description
              </label>
              <input
                type="text"
                placeholder="Enter task description..."
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Priority
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
              <div>
                <label className="text-gray-900 font-semibold text-sm">
                  Due Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
