"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DirectorInventoryPage() {
  const { user } = useAuthStore();

  const inventory = [
    {
      id: 1,
      item: "Dental Suction Tips",
      quantity: 150,
      minLevel: 50,
      status: "Good",
    },
    {
      id: 2,
      item: "Disposable Gloves (XL)",
      quantity: 500,
      minLevel: 200,
      status: "Good",
    },
    {
      id: 3,
      item: "Dental Burs - Diamond",
      quantity: 80,
      minLevel: 20,
      status: "Good",
    },
    {
      id: 4,
      item: "Composite Resin Material",
      quantity: 30,
      minLevel: 10,
      status: "Good",
    },
    {
      id: 5,
      item: "Impression Paste",
      quantity: 12,
      minLevel: 15,
      status: "Low Stock",
    },
    { id: 6, item: "Gauze Pads", quantity: 200, minLevel: 100, status: "Good" },
  ];

  return (
    <DashboardLayout role="director" userName={user?.name || "Director"}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Inventory Management
            </h1>
            <p className="text-gray-700 mt-2">
              Track equipment, supplies, and materials
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            Add Item
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-sm">Total Items</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">6</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700 text-sm">In Stock</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-500">
            <p className="text-gray-700 text-sm">Low Stock Alert</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">1</p>
          </div>
        </div>

        {/* Inventory Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Item Name
                </th>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Current Qty
                </th>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Min Level
                </th>
                <th className="px-6 py-3 text-left text-gray-900 font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-gray-900 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-3 text-gray-900 font-medium">
                    {item.item}
                  </td>
                  <td className="px-6 py-3 text-gray-700">{item.quantity}</td>
                  <td className="px-6 py-3 text-gray-700">{item.minLevel}</td>
                  <td className="px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        item.status === "Good"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center space-x-2">
                    <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                      Edit
                    </button>
                    <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                      Reorder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
