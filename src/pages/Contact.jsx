
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { contactApi } from "../apis/Api";
// import Navbar from "../components/Navbar";

// const Contact = () => {
//   const [contactName, setContactName] = useState("");
//   const [contactEmail, setContactEmail] = useState("");
//   const [contactMessage, setContactMessage] = useState("");

//   const [contactNameError, setContactNameError] = useState("");
//   const [contactEmailError, setContactEmailError] = useState("");
//   const [contactMessageError, setContactMessageError] = useState("");

//   const validate = () => {
//     let isValid = true;
//     setContactEmailError("");
//     setContactNameError("");
//     setContactMessageError("");

//     if (contactEmail.trim() === "") {
//       setContactEmailError("Email is required");
//       isValid = false;
//     }
//     if (contactMessage.trim() === "") {
//       setContactMessageError("Message is required");
//       isValid = false;
//     }
//     if (contactName.trim() === "") {
//       setContactNameError("Name is required");
//       isValid = false;
//     }
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       return;
//     }

//     const data = {
//       contactEmail,
//       contactName,
//       contactMessage,
//     };

//     contactApi(data)
//       .then((res) => {
//         if (res.data.success === false) {
//           toast.error(res.data.message);
//         } else {
//           toast.success(res.data.message);
//           setContactName("");
//           setContactEmail("");
//           setContactMessage("");
//         }
//       })
//       .catch((err) => {
//         toast.error("Server Error");
//         console.log(err.message);
//       });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex flex-col items-center py-12 bg-gray-50">
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Us</h1>
//         <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
//           Have a question or feedback? We'd love to hear from you. Fill out the form below or reach us using the provided contact details.
//         </p>
//         <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
//           {/* Contact Form */}
//           <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
//             <form>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-1">Your Name</label>
//                 <input
//                   onChange={(e) => setContactName(e.target.value)}
//                   value={contactName}
//                   type="text"
//                   className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="Enter your name"
//                 />
//                 {contactNameError && <p className="text-red-500 text-sm mt-1">{contactNameError}</p>}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-1">Email Address</label>
//                 <input
//                   onChange={(e) => setContactEmail(e.target.value)}
//                   value={contactEmail}
//                   type="email"
//                   className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="Enter your email"
//                 />
//                 {contactEmailError && <p className="text-red-500 text-sm mt-1">{contactEmailError}</p>}
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 mb-1">Message</label>
//                 <textarea
//                   onChange={(e) => setContactMessage(e.target.value)}
//                   value={contactMessage}
//                   rows="5"
//                   className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                   placeholder="Write your message"
//                 ></textarea>
//                 {contactMessageError && <p className="text-red-500 text-sm mt-1">{contactMessageError}</p>}
//               </div>
//               <button
//                 onClick={handleSubmit}
//                 className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="bg-gray-100 shadow-lg rounded-lg p-6 flex-1">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
//             <p className="text-gray-700 mb-4">
//               <strong>Address:</strong> Dillibazar, Kathmandu
//             </p>
//             <p className="text-gray-700 mb-4">
//               <strong>Phone:</strong> 9800000000
//             </p>
//             <p className="text-gray-700 mb-4">
//               <strong>Email:</strong> shelterme@gmail.com
//             </p>
//             <div className="overflow-hidden rounded-lg shadow-lg">
//               <iframe
//                 title="Google Maps"
//                 width="100%"
//                 height="250"
//                 style={{ border: 0 }}
//                 loading="lazy"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.238344509085!2d85.33091821451517!3d27.69807003210506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198eb11b4401%3A0x4ae15f2bb3f62b57!2sSoftwarica%20College%20of%20IT%20and%20E-Commerce!5e0!3m2!1sen!2snp!4v1641711407635!5m2!1sen!2snp"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { contactApi } from "../apis/Api";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const [contactNameError, setContactNameError] = useState("");
  const [contactEmailError, setContactEmailError] = useState("");
  const [contactMessageError, setContactMessageError] = useState("");

  const validate = () => {
    let isValid = true;
    setContactEmailError("");
    setContactNameError("");
    setContactMessageError("");

    if (contactEmail.trim() === "") {
      setContactEmailError("Email is required");
      isValid = false;
    }
    if (contactMessage.trim() === "") {
      setContactMessageError("Message is required");
      isValid = false;
    }
    if (contactName.trim() === "") {
      setContactNameError("Name is required");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const data = {
      contactEmail,
      contactName,
      contactMessage,
    };

    contactApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message, {
            position: "top-center",
            autoClose: 3000,
          });
        } else {
          toast.success("Thanks for reaching out! We will get back to you soon.", {
            position: "top-center",
            autoClose: 3000,
          });
          setContactName("");
          setContactEmail("");
          setContactMessage("");
        }
      })
      .catch((err) => {
        toast.error("Server Error. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
        console.error(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <ToastContainer /> {/* Toast container for pop-up messages */}
      <div className="flex flex-col items-center py-12 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
          Have a question or feedback? We'd love to hear from you. Fill out the form below or reach us using the provided contact details.
        </p>
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Your Name</label>
                <input
                  onChange={(e) => setContactName(e.target.value)}
                  value={contactName}
                  type="text"
                  className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your name"
                />
                {contactNameError && <p className="text-red-500 text-sm mt-1">{contactNameError}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email Address</label>
                <input
                  onChange={(e) => setContactEmail(e.target.value)}
                  value={contactEmail}
                  type="email"
                  className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
                {contactEmailError && <p className="text-red-500 text-sm mt-1">{contactEmailError}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  onChange={(e) => setContactMessage(e.target.value)}
                  value={contactMessage}
                  rows="5"
                  className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Write your message"
                ></textarea>
                {contactMessageError && <p className="text-red-500 text-sm mt-1">{contactMessageError}</p>}
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 shadow-lg rounded-lg p-6 flex-1">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              <strong>Address:</strong> Dillibazar, Kathmandu
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> 9800000000
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> shelterme@gmail.com
            </p>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                title="Google Maps"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.238344509085!2d85.33091821451517!3d27.69807003210506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198eb11b4401%3A0x4ae15f2bb3f62b57!2sSoftwarica%20College%20of%20IT%20and%20E-Commerce!5e0!3m2!1sen!2snp!4v1641711407635!5m2!1sen!2snp"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
