// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";

// // Data for pets
// const petData = [
//   {
//     id: "1",
//     type: "Dog",
//     name: "Rocky",
//     age: "4 years",
//     location: "Dhapasi",
//     description: "Meet Rocky, a gorgeous Husky with soft brown fur and captivating bi-colored eyes—one sky-blue and the other warm brown. Energetic, friendly, and incredibly loyal, Rocky is perfect for an active home filled with love and adventure. He’s great with people and other pets, making him a wonderful addition to any family.",
//     image: "/assets/images/husky.png",
//     gallery: ["/assets/images/husky.png", "/assets/images/husky.png"],
//   },
//   {
//     id: "2",
//     type: "Dog",
//     name: "Buddy",
//     age: "3 years",
//     location: "Lalitpur",
//     description: "Buddy is a cheerful Labrador Retriever with a golden coat and a heart full of love. He is playful, gentle, and a perfect companion for kids and adults alike.",
//     image: "/assets/images/LabRetriever.jpg",
//     gallery: ["/assets/images/LabRetriever.jpg", "/assets/images/LabRetriever.jpg"],
//   },
//   {
//     id: "3",
//     type: "Dog",
//     name: "Max",
//     age: "5 years",
//     location: "Kathmandu",
//     description: "Max is a strong and protective German Shepherd. He’s well-trained, obedient, and ideal for anyone looking for a loyal guard dog.",
//     image: "/assets/images/german.webp",
//     gallery: ["/assets/images/german.webp", "/assets/images/german.webp"],
//   },
//   {
//     id: "4",
//     type: "Dog",
//     name: "Bruno",
//     age: "6 years",
//     location: "Bhaktapur",
//     description: "Bruno is a charming Bull Dog who loves to laze around. He’s calm, affectionate, and perfect for apartment living.",
//     image: "/assets/images/bull dog.webp",
//     gallery: ["/assets/images/bull dog.webp", "/assets/images/bull dog.webp"],
//   },
//   {
//     id: "5",
//     type: "Cat",
//     name: "Mimi",
//     age: "2 years",
//     location: "Patan",
//     description: "Mimi is a beautiful tabby cat with striking green eyes. She’s curious, playful, and loves cuddles.",
//     image: "/assets/images/mimi.avif",
//     gallery: ["/assets/images/mimi.avif", "/assets/images/mimi.avif"],
//   },
//   {
//     id: "6",
//     type: "Cat",
//     name: "Rainbow",
//     age: "3 years",
//     location: "Pokhara",
//     description: "Rainbow is a graceful white Persian cat. She’s quiet, independent, and loves lounging in sunny spots.",
//     image: "/assets/images/rainbow.jpeg",
//     gallery: ["/assets/images/rainbow.jpeg", "/assets/images/rainbow.jpeg"],
//   },
//   {
//     id: "7",
//     type: "Cat",
//     name: "Saimon",
//     age: "1 year",
//     location: "Biratnagar",
//     description: "Saimon is an energetic Bengal cat who loves climbing and exploring. He’s full of energy and perfect for an active family.",
//     image: "/assets/images/saimon.webp",
//     gallery: ["/assets/images/saimon.webp", "/assets/images/saimon.webp"],
//   },
//   {
//     id: "8",
//     type: "Cat",
//     name: "Puntu",
//     age: "2.5 years",
//     location: "Dharan",
//     description: "Puntu is a friendly Siamese cat with striking blue eyes. She’s vocal, affectionate, and loves being around people.",
//     image: "/assets/images/puntu.jpeg",
//     gallery: ["/assets/images/puntu.jpeg", "/assets/images/puntu.jpeg"],
//   },
// ];

// const DetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const pet = petData.find((pet) => pet.id === id);

//   if (!pet) {
//     return <div className="text-center mt-20 font-sans">Pet not found.</div>;
//   }

//   const handleAdoptClick = () => {
//     navigate("/adopt", { state: { pet } }); // Navigate to Adopt page with pet details
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 font-sans">
//       <div className="grid grid-cols-2 gap-8 items-center">
//         {/* Main Image */}
//         <img src={pet.image} alt={pet.name} className="w-full h-auto rounded-lg shadow-md" />

//         {/* Pet Details */}
//         <div>
//           <h1 className="text-3xl font-bold mb-4">{pet.name}</h1>
//           <p><strong>Type:</strong> {pet.type}</p>
//           <p><strong>Age:</strong> {pet.age}</p>
//           <p><strong>Location:</strong> {pet.location}</p>
//           <p className="mt-4">{pet.description}</p>
//           <button
//             onClick={handleAdoptClick}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
//           >
//             Adopt {pet.name}
//           </button>
//         </div>
//       </div>

//       {/* Gallery */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-bold mb-4">Gallery</h2>
//         <div className="grid grid-cols-3 gap-4">
//           {pet.gallery.map((image, index) => (
//             <img key={index} src={image} alt={`${pet.name} gallery`} className="w-full h-40 object-cover rounded-lg shadow-sm" />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;
// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// // Data for pets
// const petData = [
//   {
//     id: "1",
//     type: "Dog",
//     name: "Rocky",
//     age: "4 years",
//     location: "Dhapasi",
//     description:
//       "Meet Rocky, a gorgeous Husky with soft brown fur and captivating bi-colored eyes—one sky-blue and the other warm brown. Energetic, friendly, and incredibly loyal, Rocky is perfect for an active home filled with love and adventure. He’s great with people and other pets, making him a wonderful addition to any family.",
//     image: "/assets/images/husky.png",
//     gallery: ["/assets/images/husky.png", "/assets/images/husky.png"],
//   },
//   {
//     id: "2",
//     type: "Dog",
//     name: "Buddy",
//     age: "3 years",
//     location: "Lalitpur",
//     description:
//       "Buddy is a cheerful Labrador Retriever with a golden coat and a heart full of love. He is playful, gentle, and a perfect companion for kids and adults alike.",
//     image: "/assets/images/LabRetriever.jpg",
//     gallery: ["/assets/images/LabRetriever.jpg", "/assets/images/LabRetriever.jpg"],
//   },
//   {
//     id: "3",
//     type: "Dog",
//     name: "Max",
//     age: "5 years",
//     location: "Kathmandu",
//     description:
//       "Max is a strong and protective German Shepherd. He’s well-trained, obedient, and ideal for anyone looking for a loyal guard dog.",
//     image: "/assets/images/german.webp",
//     gallery: ["/assets/images/german.webp", "/assets/images/german.webp"],
//   },
//   {
//     id: "4",
//     type: "Dog",
//     name: "Bruno",
//     age: "6 years",
//     location: "Bhaktapur",
//     description:
//       "Bruno is a charming Bull Dog who loves to laze around. He’s calm, affectionate, and perfect for apartment living.",
//     image: "/assets/images/bull dog.webp",
//     gallery: ["/assets/images/bull dog.webp", "/assets/images/bull dog.webp"],
//   },
//   {
//     id: "5",
//     type: "Cat",
//     name: "Mimi",
//     age: "2 years",
//     location: "Patan",
//     description:
//       "Mimi is a beautiful tabby cat with striking green eyes. She’s curious, playful, and loves cuddles.",
//     image: "/assets/images/mimi.avif",
//     gallery: ["/assets/images/mimi.avif", "/assets/images/mimi.avif"],
//   },
//   {
//     id: "6",
//     type: "Cat",
//     name: "Rainbow",
//     age: "3 years",
//     location: "Pokhara",
//     description:
//       "Rainbow is a graceful white Persian cat. She’s quiet, independent, and loves lounging in sunny spots.",
//     image: "/assets/images/rainbow.jpeg",
//     gallery: ["/assets/images/rainbow.jpeg", "/assets/images/rainbow.jpeg"],
//   },
//   {
//     id: "7",
//     type: "Cat",
//     name: "Saimon",
//     age: "1 year",
//     location: "Biratnagar",
//     description:
//       "Saimon is an energetic Bengal cat who loves climbing and exploring. He’s full of energy and perfect for an active family.",
//     image: "/assets/images/saimon.webp",
//     gallery: ["/assets/images/saimon.webp", "/assets/images/saimon.webp"],
//   },
//   {
//     id: "8",
//     type: "Cat",
//     name: "Puntu",
//     age: "2.5 years",
//     location: "Dharan",
//     description:
//       "Puntu is a friendly Siamese cat with striking blue eyes. She’s vocal, affectionate, and loves being around people.",
//     image: "/assets/images/puntu.jpeg",
//     gallery: ["/assets/images/puntu.jpeg", "/assets/images/puntu.jpeg"],
//   },
// ];

// const DetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const pet = petData.find((pet) => pet._id === id);
//   const [reviews, setReviews] = useState([]);
//   const [newReview, setNewReview] = useState("");

//   if (!pet) {
//     return <div className="text-center mt-20 font-sans">Pet not found.</div>;
//   }

//   const handleAdoptClick = () => {
//     navigate("/adopt", { state: { pet } }); // Navigate to Adopt page with pet details
//   };

//   const handleAddReview = () => {
//     if (newReview.trim()) {
//       setReviews([...reviews, newReview]);
//       setNewReview("");
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 font-sans">
//       <div className="border-2 border-gray-300 rounded-lg shadow-lg p-6">
//         <div className="grid grid-cols-2 gap-8 items-center">
//           {/* Main Image */}
//           <img
//             src={pet.image}
//             alt={pet.name}
//             className="w-full h-auto rounded-lg shadow-md border-2 border-gray-300"
//           />

//           {/* Pet Details */}
//           <div className="border-2 border-gray-300 rounded-lg p-4">
//             <h1 className="text-3xl font-bold mb-4">{pet.name}</h1>
//             <p>
//               <strong>Type:</strong> {pet.type}
//             </p>
//             <p>
//               <strong>Age:</strong> {pet.age}
//             </p>
//             <p>
//               <strong>Location:</strong> {pet.location}
//             </p>
//             <p className="mt-4">{pet.description}</p>
//             <button
//               onClick={handleAdoptClick}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
//             >
//               Adopt {pet.name}
//             </button>
//           </div>
//         </div>

//         {/* Gallery */}
//         <div className="mt-8 border-t-2 border-gray-300 pt-4">
//           <h2 className="text-2xl font-bold mb-4">Gallery</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {pet.gallery.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`${pet.name} gallery`}
//                 className="w-full h-40 object-cover rounded-lg shadow-sm border-2 border-gray-300"
//               />
//             ))}
//           </div>
//         </div>

//         {/* Reviews */}
//         <div className="mt-8 border-t-2 border-gray-300 pt-4">
//           <h2 className="text-2xl font-bold mb-4">Reviews</h2>
//           <div className="space-y-4">
//             {reviews.map((review, index) => (
//               <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-sm">
//                 {review}
//               </div>
//             ))}
//           </div>
//           <div className="mt-4">
//             <textarea
//               value={newReview}
//               onChange={(e) => setNewReview(e.target.value)}
//               placeholder="Write your review..."
//               className="w-full border border-gray-300 p-2 rounded-lg"
//               rows="4"
//             ></textarea>
//             <button
//               onClick={handleAddReview}
//               className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Submit Review
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPage;

