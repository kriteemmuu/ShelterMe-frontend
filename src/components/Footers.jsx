
import React from "react";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <footer className="font-sans bg-[#f9f9f9] border-t border-gray-300 text-black py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-wrap justify-between">
        {/* Column 1: Company */}
        <div className="flex flex-col mb-8 md:mb-0 w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-gray-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-600">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-gray-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Get Help and Donate Fund */}
        <div className="flex flex-col mb-8 md:mb-0 w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-6">Get Help</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/faq" className="hover:text-gray-600">
                FAQ
              </Link>
            </li>
          </ul>
          <h3 className="text-xl font-bold mt-8 mb-4">Donate Fund:</h3>
          <div className="flex space-x-4">
            <img
              src="../assets/images/esewa.png"
              alt="eSewa"
              className="w-16 h-auto"
            />
            <img
              src="../assets/images/khalti.jpg"
              alt="Khalti"
              className="w-16 h-auto"
            />
          </div>
        </div>

        {/* Column 3: Related Links */}
        <div className="flex flex-col mb-8 md:mb-0 w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-6">Related Links</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.aspca.org/adopt-pet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                ASPCA - Adopt a Pet
              </a>
            </li>
            <li>
              <a
                href="https://www.petfinder.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                Petfinder - Find Pets Near You
              </a>
            </li>
            <li>
              <a
                href="https://www.adoptapet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                Adopt-a-Pet.com
              </a>
            </li>
            <li>
              <a
                href="https://theshelterpetproject.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                The Shelter Pet Project
              </a>
            </li>
            <li>
              <a
                href="https://bestfriends.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600"
              >
                Best Friends Animal Society
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media and Shelter Me */}
        <div className="flex flex-col items-start md:items-end w-full md:w-1/4">
          <h3 className="text-xl font-bold mb-6">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../assets/images/facebook.webp"
                alt="Facebook"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-8 h-8 hover:opacity-80"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.shelterme.com"
              className="text-blue-600 hover:underline text-sm"
            >
              www.shelterme.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
