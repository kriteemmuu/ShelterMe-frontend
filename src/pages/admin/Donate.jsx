
// import React, { useState } from "react";

// const Donate = () => {
//   const [amount, setAmount] = useState("");
//   const [customAmount, setCustomAmount] = useState("");
//   const [comment, setComment] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [emailOrPhone, setEmailOrPhone] = useState("");

//   const handleAmountSelect = (selectedAmount) => {
//     setAmount(selectedAmount);
//     setCustomAmount("");
//   };

//   const handleCustomAmountChange = (e) => {
//     setAmount("");
//     setCustomAmount(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const donationDetails = {
//       amount: customAmount || amount,
//       comment,
//       fullName,
//       emailOrPhone,
//     };
//     console.log("Donation Details:", donationDetails);
//     alert("Thank you for your donation!");
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-center text-2xl font-bold mb-4">Donate Now</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Donation Image */}
//         <div className="flex justify-center">
//           <img
//             src="/assets/images/feed.jpg"
//             alt="Donate"
//             className="rounded-lg shadow-md"
//           />
//         </div>

//         {/* Donation Form */}
//         <div className="bg-blue-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4 text-center">
//             Select an amount
//           </h2>
//           <div className="grid grid-cols-3 gap-2 mb-4">
//             {["500", "1000", "2000", "5000"].map((amt) => (
//               <button
//                 key={amt}
//                 onClick={() => handleAmountSelect(amt)}
//                 className={`px-4 py-2 rounded-lg font-bold ${
//                   amount === amt
//                     ? "bg-blue-500 text-white"
//                     : "bg-white border border-gray-300"
//                 }`}
//               >
//                 Rs.{amt}
//               </button>
//             ))}
//             <input
//               type="number"
//               placeholder="Enter the amount you desire to contribute."
//               className="col-span-3 px-4 py-2 border rounded-lg"
//               value={customAmount}
//               onChange={handleCustomAmountChange}
//             />
//           </div>

//           {/* Form Fields */}
//           <form onSubmit={handleSubmit}>
//             <textarea
//               placeholder="Add comment"
//               className="w-full mb-4 px-4 py-2 border rounded-lg"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             ></textarea>
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               className="w-full mb-4 px-4 py-2 border rounded-lg"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="E-mail or Phone Number"
//               className="w-full mb-4 px-4 py-2 border rounded-lg"
//               value={emailOrPhone}
//               onChange={(e) => setEmailOrPhone(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600"
//             >
//               Proceed
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donate;
// import React, { useState } from "react";
// import KhaltiCheckout from "khalti-checkout-web";

// const Donate = () => {
//   const [amount, setAmount] = useState("");
//   const [customAmount, setCustomAmount] = useState("");
//   const [comment, setComment] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [emailOrPhone, setEmailOrPhone] = useState("");

//   const khaltiConfig = {
//     publicKey: 'test_public_key_617c4c6fe77c441d88451ec1408a0c0e', 
//     productIdentity: "donation",
//     productName: "Shelter Me Donation",
//     productUrl: "https://shelterme.com/donate", // Replace with your URL
//     eventHandler: {
//       onSuccess(payload) {
//         console.log("Payment Successful!", payload);
//         alert("Thank you for your donation!");
//       },
//       onError(error) {
//         console.error("Payment Error:", error);
//         alert("Payment failed. Please try again.");
//       },
//     },
//   };

//   const khaltiCheckout = new KhaltiCheckout(khaltiConfig);

//   const handleAmountSelect = (selectedAmount) => {
//     setAmount(selectedAmount);
//     setCustomAmount("");
//   };

//   const handleCustomAmountChange = (e) => {
//     setAmount("");
//     setCustomAmount(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const donationAmount = customAmount || amount;

//     if (!donationAmount) {
//       alert("Please select or enter an amount.");
//       return;
//     }

//     const donationDetails = {
//       amount: donationAmount,
//       comment,
//       fullName,
//       emailOrPhone,
//     };

//     console.log("Donation Details:", donationDetails);

//     // Open Khalti Payment
//     khaltiCheckout.show({ amount: donationAmount * 100 }); // Khalti requires amount in paisa
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-center text-2xl font-bold mb-4">Donate Now</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* Donation Image */}
//         <div className="flex justify-center">
//           <img
//             src="/assets/images/feed.jpg"
//             alt="Donate"
//             className="rounded-lg shadow-md"
//           />
//         </div>

//         {/* Donation Form */}
//         <div className="bg-blue-100 p-6 rounded-lg shadow-md">
//           <h2 className="text-xl font-bold mb-4 text-center">
//             Select an amount
//           </h2>
//           <div className="grid grid-cols-3 gap-2 mb-4">
//             {["500", "1000", "2000", "5000"].map((amt) => (
//               <button
//                 key={amt}
//                 onClick={() => handleAmountSelect(amt)}
//                 className={`px-4 py-2 rounded-lg font-bold ${
//                   amount === amt
//                     ? "bg-blue-500 text-white"
//                     : "bg-white border border-gray-300"
//                 }`}
//               >
//                 Rs.{amt}
//               </button>
//             ))}
//             <input
//               type="number"
//               placeholder="Enter the amount you desire to contribute."
//               className="col-span-3 px-4 py-2 border rounded-lg"
//               value={customAmount}
//               onChange={handleCustomAmountChange}
//             />
//           </div>

//           {/* Form Fields */}
//           <form onSubmit={handleSubmit}>
//             <textarea
//               placeholder="Add comment"
//               className="w-full mb-4 px-4 py-2 border rounded-lg"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             ></textarea>
//             <input
//               type="text"
//               placeholder="Your Full Name"
//               className="w-full mb-4 px-4 py-2 border rounded-lg"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="E-mail or Phone Number"
//               className="w-full mb-4 px-4 py-2 border rounded-lg"
//               value={emailOrPhone}
//               onChange={(e) => setEmailOrPhone(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600"
//             >
//               Proceed
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Donate;

import React, { useState } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [comment, setComment] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const khaltiConfig = {
    publicKey: "test_public_key_617c4c6fe77c441d88451ec1408a0c0e",
    productIdentity: "donation",
    productName: "Shelter Me Donation",
    productUrl: "https://shelterme.com/donate", // Replace with your URL
    eventHandler: {
      onSuccess(payload) {
        console.log("Payment Successful!", payload);
        toast.success(
          `🎉 Thank you for your generous donation of Rs. ${
            payload.amount / 100
          }! Your support makes a difference. 🙏`,
          {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        );
      },
      onError(error) {
        console.error("Payment Error:", error);
        toast.error("🚨 Payment failed. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      },
    },
  };

  const khaltiCheckout = new KhaltiCheckout(khaltiConfig);

  const handleAmountSelect = (selectedAmount) => {
    setAmount(selectedAmount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setAmount("");
    setCustomAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const donationAmount = customAmount || amount;

    if (!donationAmount) {
      toast.error("Please select or enter an amount.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    const donationDetails = {
      amount: donationAmount,
      comment,
      fullName,
      emailOrPhone,
    };

    console.log("Donation Details:", donationDetails);

    // Open Khalti Payment
    khaltiCheckout.show({ amount: donationAmount * 100 }); // Khalti requires amount in paisa
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer />
      <h1 className="text-center text-2xl font-bold mb-4">Donate Now</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Donation Image */}
        <div className="flex justify-center">
          <img
            src="/assets/images/feed.jpg"
            alt="Donate"
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Donation Form */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-center">
            Select an amount
          </h2>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {["500", "1000", "2000", "5000"].map((amt) => (
              <button
                key={amt}
                onClick={() => handleAmountSelect(amt)}
                className={`px-4 py-2 rounded-lg font-bold ${
                  amount === amt
                    ? "bg-blue-500 text-white"
                    : "bg-white border border-gray-300"
                }`}
              >
                Rs.{amt}
              </button>
            ))}
            <input
              type="number"
              placeholder="Enter the amount you desire to contribute."
              className="col-span-3 px-4 py-2 border rounded-lg"
              value={customAmount}
              onChange={handleCustomAmountChange}
            />
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit}>
            <textarea
              placeholder="Add comment"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="E-mail or Phone Number"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600"
            >
              Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donate;
