import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donar = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [donationType, setDonationType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !donationType) {
      toast.error("Please fill in all required fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const donorDetails = {
      fullName,
      email,
      donationType,
      message,
    };

    console.log("Donor Details:", donorDetails);

    // Display success message
    toast.success("Thank you for registering as a donor!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Reset form
    setFullName("");
    setEmail("");
    setDonationType("");
    setMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer /> {/* Toast container for pop-up messages */}
      <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">Register as a Donor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Donor Image */}
        <div className="flex justify-center">
          <img
            src="/assets/images/baby dog.jpg"
            alt="Donation"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>

        {/* Donor Form */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Donor Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">What would you like to donate?</label>
              <select
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={donationType}
                onChange={(e) => setDonationType(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Food">Food</option>
                <option value="Clothes">Clothes</option>
                <option value="Health Kit">Essential Health Kit</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                placeholder="Write a message (optional)"
                className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
            >
              Register as Donor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donar;
