import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      className="container mt-5 p-4 rounded"
      style={{
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 className="text-center mb-4">Privacy Policy</h1>
      <p>
        Welcome to Shelter Me! Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your personal
        information.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly, such as when you register
        an account, make a donation, or contact us for support. This includes
        your name, email address, and any additional details you provide.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use your information to provide services, process donations, and
        improve our platform. Your data helps us connect pets with adopters and
        ensure a seamless experience.
      </p>
      <h2>Sharing Your Information</h2>
      <p>
        We do not sell or share your personal information with third parties,
        except when required by law or with your consent.
      </p>
      <h2>Data Security</h2>
      <p>
        We take data protection seriously and implement measures to secure your
        personal information.
      </p>
      <p className="text-center mt-4">
        If you have any questions or concerns, please contact us at
        support@shelterme.com.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
