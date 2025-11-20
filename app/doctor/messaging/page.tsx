"use client";

import { useAuthStore } from "@/lib/store/auth";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useState } from "react";

export default function DoctorMessagingPage() {
  const { user } = useAuthStore();
  const [selectedChat, setSelectedChat] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Thanks for the appointment reminder!",
      timestamp: "2 min ago",
      unread: true,
      avatar: "JD",
    },
    {
      id: 2,
      name: "Mary Johnson",
      lastMessage: "Can I schedule an appointment for next week?",
      timestamp: "1 hour ago",
      unread: true,
      avatar: "MJ",
    },
    {
      id: 3,
      name: "Sarah Johnson (Receptionist)",
      lastMessage: "Patient postponed appointment",
      timestamp: "3 hours ago",
      unread: false,
      avatar: "SJ",
    },
    {
      id: 4,
      name: "Dr. Sarah Wilson",
      lastMessage: "Can you review this patient case?",
      timestamp: "Yesterday",
      unread: false,
      avatar: "SW",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      text: "Hi Dr. Smith, thanks for the appointment reminder",
      time: "2:15 PM",
      isMe: false,
    },
    {
      id: 2,
      sender: "You",
      text: "You're welcome! See you tomorrow at 9 AM",
      time: "2:16 PM",
      isMe: true,
    },
    {
      id: 3,
      sender: "John Doe",
      text: "Thanks for the appointment reminder!",
      time: "2:20 PM",
      isMe: false,
    },
  ];

  return (
    <DashboardLayout role="doctor" userName={user?.name || "Doctor"}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-700 mt-2">
            Communicate with patients and staff
          </p>
        </div>

        {/* Messaging Interface */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-96 md:h-96">
          {/* Chat List */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer transition ${
                    selectedChat === chat.id
                      ? "bg-blue-50 border-l-4 border-blue-500"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {chat.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-semibold text-sm ${
                          chat.unread ? "text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {chat.name}
                      </p>
                      <p className="text-gray-600 text-xs truncate">
                        {chat.lastMessage}
                      </p>
                    </div>
                    {chat.unread && (
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900">
                {chats.find((c) => c.id === selectedChat)?.name}
              </h3>
              <p className="text-gray-600 text-sm">Active now</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isMe ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.isMe
                        ? "bg-blue-600 text-white rounded-br-none"
                        : "bg-gray-200 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    {!msg.isMe && (
                      <p className="text-xs font-semibold mb-1">{msg.sender}</p>
                    )}
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.isMe ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
