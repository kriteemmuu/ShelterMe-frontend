import React from "react";

const OurServices = () => {
  return (
    <div
      className="py-16 px-4 bg-gray-50"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          Dedicated to providing love, care, and support for pets and their
          families. Explore our services to learn how we make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <img
            src="../assets/images/ADOPTION.jpeg"
            alt="Pet Adoption"
            className="h-32 w-32 mx-auto mb-4 object-cover rounded-full"
          />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Pet Adoption</h3>
          <p className="text-gray-600">
            We connect loving pets with caring families. Find your perfect
            companion and give them a forever home.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <img
            src="../assets/images/volunteer.webp"
            alt="Volunteer Opportunities"
            className="h-32 w-32 mx-auto mb-4 object-cover rounded-full"
          />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Volunteer Opportunities</h3>
          <p className="text-gray-600">
            Join us to make a difference in the lives of animals. Help care for
            pets and support our shelter activities.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <img
            src="../assets/images/donation.webp"
            alt="Donations"
            className="h-32 w-32 mx-auto mb-4 object-cover rounded-full"
          />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Donations</h3>
          <p className="text-gray-600">
            Your generous contributions support our mission to provide better
            care, food, and shelter for pets in need.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <img
            src="../assets/images/education.png"
            alt="Pet Education"
            className="h-32 w-32 mx-auto mb-4 object-cover rounded-full"
          />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Pet Education</h3>
          <p className="text-gray-600">
            Learn about pet care, training, and health to ensure a happy and
            healthy life for your furry friends.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <img
            src="../assets/images/health.jpg"
            alt="Pet Healthcare"
            className="h-32 w-32 mx-auto mb-4 object-cover rounded-full"
          />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">Pet Healthcare</h3>
          <p className="text-gray-600">
            We partner with veterinarians to provide medical care, vaccinations,
            and health checkups for pets in need.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 text-lg">
          Join us in our mission to create a loving and caring world for all
          pets.
        </p>
      </div>
    </div>
  );
};

export default OurServices;
