import React, { useState, useEffect } from "react";
import UpNavbar from "../components/UpNavbar";
import Navbar from "../components/Navbar";

const NotificationComponent = () => {
  // Mock notification data
  const mockNotifications = [
    {
      _id: "1",
      title: "Adoption Request Approved",
      description: "Your request to adopt a pet has been approved.",
      createdAt: "2025-01-01T10:30:00Z",
    },
    {
      _id: "2",
      title: "New Event Added",
      description: "Join us for the upcoming Pet Adoption Event this weekend.",
      createdAt: "2025-01-02T12:00:00Z",
    },
    {
      _id: "3",
      title: "Donation Received",
      description: "Thank you for your generous donation!",
      createdAt: "2025-01-03T14:15:00Z",
    },
  ];

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate fetching notifications (replace with API call in real use case)
    setNotifications(mockNotifications);
  }, []);

  return (
    <div>
      <UpNavbar />
      <Navbar />
      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-5">Notifications</h2>
        {notifications.length > 0 ? (
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification._id}
                className="bg-gray-100 p-4 rounded-md shadow-md"
              >
                <h4 className="font-bold text-lg">{notification.title}</h4>
                <p className="text-gray-700">{notification.description}</p>
                <small className="text-gray-500">
                  {new Date(notification.createdAt).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationComponent;
