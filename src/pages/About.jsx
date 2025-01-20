import React from "react";
import { FiX } from "react-icons/fi";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('assets/images/side look.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold" style={{ fontFamily: "Poppins" }}>
            About Us
          </h1>
        </div>
      </div>
      <div className="bg-white mt-[-120px] p-10 rounded-lg shadow-lg w-full max-w-[90%] lg:max-w-[1062px] relative border border-gray-200">
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={() => window.history.back()}
        >
          <FiX className="text-gray-500" size={30} />
        </button>

        {/* Section: Welcome */}
        <section className="mb-10 text-center">
          <h2
            className="text-4xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "Poppins" }}
          >
            Welcome to <span style={{ color: "#EA9E1A" }}>Shelter</span>
            <span style={{ color: "#EA9E1A" }}>ME!!</span>
          </h2>
          <p
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: "Poppins" }}
          >
            At Shelter Me, we believe every child deserves a loving and
            supportive home. We connect prospective parents with children in
            need of a forever family, providing guidance and support throughout
            the adoption journey.
          </p>
        </section>

        {/* Section: Mission */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "Poppins" }}>
            Our Mission
          </h3>
          <p
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: "Poppins" }}
          >
            Our mission is to facilitate successful adoptions by offering
            compassionate, professional, and ethical services to adoptive
            families and birth parents. We are committed to ensuring that every
            adoption is handled with care and respect.
          </p>
        </section>

        {/* Section: Services */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "Poppins" }}>
            Our Services
          </h3>
          <ul className="list-disc pl-5 text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "Poppins" }}>
            <li>Adoption Counseling: Guidance and support to prepare for adoption.</li>
            <li>Matching Services: Finding the right family for each child.</li>
            <li>Legal Assistance: Simplifying the complexities of the legal process.</li>
            <li>Post-Adoption Support: Resources to help families adjust post-adoption.</li>
          </ul>
        </section>

        {/* Section: Why Choose Us */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "Poppins" }}>
            Why Choose Us?
          </h3>
          <ul className="list-disc pl-5 text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "Poppins" }}>
            <li>
              <strong>Experience:</strong> Over 20 years of facilitating successful adoptions.
            </li>
            <li>
              <strong>Compassion:</strong> Empathetic and sensitive approach to adoption.
            </li>
            <li>
              <strong>Ethical Standards:</strong> Transparent and fair processes prioritizing the child.
            </li>
            <li>
              <strong>Support:</strong> Comprehensive support from consultation to post-adoption.
            </li>
          </ul>
        </section>

        {/* Section: Team */}
        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4" style={{ fontFamily: "Poppins" }}>
            Our Team
          </h3>
          <p
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: "Poppins" }}
          >
            Our team includes licensed social workers, counselors, legal
            experts, and support staff, all dedicated to creating positive
            outcomes for children and families.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
