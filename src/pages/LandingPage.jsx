// import { CircularProgress } from "@mui/material";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   addToCartApi,
//   contactApi,
//   getAllEventsApi,
//   getAllProductApi,
//   getAllStoryApi,
// } from "../apis/Api";
// import useAuthCheck from "../components/IsAuthenticated";
// import StorySlider from "../components/StorySlider";
// import ShareStory from "./user/ShareStory";

// const LandingPage = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [events, setEvents] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [stories, setStories] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   const verifyAuthBeforeAction = useAuthCheck();

//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("contactName", fullName);
//     data.append("contactEmail", email);
//     data.append("contactMessage", message);

//     setIsLoading(true);

//     contactApi(data)
//       .then((res) => {
//         if (res.data.success) {
//           toast.success(res.data.message);
//         } else {
//           toast.error(res.data.message);
//         }
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setIsLoading(false);
//         toast.error(err.message);
//       });
//   };

//   const [isShareModalOpen, setIsShareModalOpen] = useState(false);

//   const openShareModal = () => {
//     verifyAuthBeforeAction(() => {
//       setIsShareModalOpen(true);
//     });
//   };

//   const closeShareModal = () => {
//     setIsShareModalOpen(false);
//   };

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const delay = 3000;

//   const fetchStory = () => {
//     getAllStoryApi()
//       .then((res) => {
//         setStories(res?.data?.story);
//       })
//       .catch((err) => {
//         console.error("Error Fetching Stories", err);
//         toast.error(err.message);
//       });
//   };

//   const fetchEvents = async () => {
//     getAllEventsApi()
//       .then((res) => {
//         setEvents(res?.data?.events);
//         console.log(res?.data?.events);
//       })
//       .catch((err) => {
//         console.error("Error Fetching Events", err);
//         toast.error(err.message);
//       });
//   };

//   const fetchProducts = () => {
//     getAllProductApi()
//       .then((res) => {
//         setProducts(res?.data?.fewProducts);
//       })
//       .catch((err) => {
//         console.error("Error Fetching Products", err);
//         toast.error(err.message);
//       });
//   };

//   const addToCart = (id) => {
//     verifyAuthBeforeAction(() => {
//       console.log(id);
//       const data = new FormData();
//       data.append("products", id);
//       data.append("user", user?._id);
//       data.append("quantity", 1);

//       addToCartApi(data)
//         .then((res) => {
//           if (res.data.success) {
//             toast.success(res.data.message);
//           } else {
//             toast.error(res.data.message);
//           }
//         })
//         .catch((err) => {
//           toast.error(err.message);
//         });
//     });
//   };

//   useEffect(() => {
//     fetchEvents();
//     fetchProducts();
//     fetchStory();
//   }, [stories.length, events.length, products.length]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       goToNext();
//     }, delay);

//     return () => clearInterval(timer);
//   }, [currentIndex]);

//   const numberOfSlidesToShow = events.length > 3 ? 3 : events.length;
//   const slideWidth = 100 / numberOfSlidesToShow;
//   const goToNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex < events.length - numberOfSlidesToShow ? prevIndex + 1 : 0
//     );
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : events.length - numberOfSlidesToShow
//     );
//   };

//   const translateX = -(currentIndex * slideWidth);

//   return (
//     <>
//       <div className="bg-white">
//         <div
//           className="relative w-full h-[1100px] bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('assets/images/shelter me.jpg')",
//             backgroundSize: "cover",
//           }}
//         >
//           <div
//             className="absolute bottom-40 right-0 p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow"
//             style={{ border: "solid" }}
//           >
//             <div className="flex justify-between w-96 text-center">
//               <div>
//                 <div className="font-bold text-3xl">2</div>
//                 <div className="text-3xl">Adopted</div>
//               </div>
//               <div>
//                 <div className="font-bold text-3xl">7</div>
//                 <div className="text-3xl">Waiting</div>
//               </div>
//               <div>
//                 <div className="font-bold text-3xl">20</div>
//                 <div className="text-3xl">Pet Item</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row p-6 md:p-20 items-center gap-6 md:gap-24 justify-center">
//           <div className="">
//             <img
//               src="assets/images/cat.png"
//               alt="Welcome Cat"
//               className="mx-auto rounded-3xl object-cover border-2 border-gray-300"
//               style={{ width: "100%", maxWidth: "500px" }}
//             />
//           </div>
//           <div className="text-center md:text-left">
//             <h1 className="font-bold text-left text-2xl md:text-4xl">
//               Welcome Your New{" "}
//               <span className="text-[#FF8534]">Furry Friend</span> into a{" "}
//               <br className="hidden md:inline" />
//               Loving Home Today
//             </h1>
//             <p className="mt-4 text-left">
//               Discover the Joy of Adopting a Pet and Transforming Your Life with
//               Unconditional Love
//             </p>
//             <div className="flex justify-center md:justify-end mt-8">
//               <Link
//                 to={"/adopt"}
//                 className="bg-[#FF8534] text-center text-white font-bold text-xl w-full md:w-auto md:text-2xl px-16 py-2 md:py-2 lg:py-2 rounded"
//                 style={{
//                   transition: "background-color 500ms ease, border 500ms ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.backgroundColor = "#FF7148";
//                   e.target.style.border = "2px solid black";
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.backgroundColor = "#FF8534";
//                   e.target.style.border = "none";
//                 }}
//               >
//                 Adopt
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white py-4 mb-14">
//           <div className="text-center mb-8 md:text-left">
//             <h1 className="font-bold text-2xl md:text-4xl">
//               Pamper Your Pet with
//               <span className="text-[#FF8534]">Tasty</span> Treats
//             </h1>
//             <p className="mt-1">Because Your Pet Deserves the Best</p>
//           </div>

//           <div className="flex flex-col mx-4 lg:flex-row items-center md:flex-row md:px-48 md:p-3 justify-between">
//             <h2 className="text-3xl font-semibold text-center mb-4">
//               Recently Added
//             </h2>
//             <Link
//               to={"/products"}
//               className="bg-[#FF8534] text-center text-white font-bold text-xl w-full md:w-auto md:text-2xl px-12 py-2 md:py-2 lg:py-2 rounded"
//               style={{
//                 transition: "background-color 500ms ease, border 500ms ease",
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.backgroundColor = "#FF7148";
//                 e.target.style.border = "2px solid black";
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.backgroundColor = "#FF8534";
//                 e.target.style.border = "none";
//               }}
//             >
//               Explore
//             </Link>
//           </div>
//           <div className="flex md:flex-row flex-col items-center justify-between gap-5 md:px-52 mb-12">
//             {products.map((product) => (
//               <div
//                 key={product._id}
//                 className="min-w-[200px] w-[400px] bg-gray-100 rounded-lg shadow-md p-2 relative"
//               >
//                 <img
//                   src={product.productImageUrl}
//                   alt={product.productName}
//                   className="h-40 w-full object-cover rounded-t-lg"
//                 />
//                 <button
//                   onClick={() => addToCart(product._id)}
//                   className="absolute bottom-0 right-0 mb-[-20px] mr-[-10px] bg-[#FF8534] hover:bg-[#FF7148] border-1 border-black text-white font-bold py-2 px-4 rounded"
//                   style={{
//                     transition: "background-color 500ms ease, border 500ms ease",
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-center mb-8 md:text-left">
//           <h1 className="font-bold text-2xl md:text-4xl mb-3">
//             Be Part of the Cause. Participate in <br />
//             Pet <span className="text-[#FF8534]">Adoption</span> Event
//           </h1>
//           <p className="my-4">
//             Are you ready to join with multiple organizations for a paw-some
//             cause? We're thrilled to invite you to
//             <br /> our <span className="font-bold">Collaborative</span> pet
//             adoption event.
//           </p>
//         </div>
//         <div className="mx-52">
//           <div className="flex flex-col md:flex-row justify-center items-center overflow-hidden">
//             <div
//               className="flex items-center gap-x-2 transition-transform duration-1000 ease-in-out"
//               style={{ transform: `translateX(${translateX}%)` }}
//             >
//               {events.map((event) => (
//                 <div
//                   key={event.id}
//                   className="min-w-[33%] md:min-w-[50%] lg:min-w-[33%]"
//                   style={{ width: `${slideWidth}%` }}
//                 >
//                   <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                     <img
//                       src={event.eventImageOneUrl}
//                       alt="event"
//                       className="lg:h-48 md:h-36 w-full object-cover object-center"
//                     />
//                     <div className="p-6">
//                       <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                         {event.eventTitle}
//                       </h2>

//                       <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
//                         Date :{" "}
//                         {(() => {
//                           const date = new Date(event.eventDate);
//                           return `${
//                             date.getMonth() + 1
//                           }/${date.getDate()}/${date.getFullYear()}`;
//                         })()}
//                       </h2>

//                       <p className="leading-relaxed mb-3">
//                         Organized By : {event.organizedBy}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row p-6 md:p-20 items-center gap-6 md:gap-12 justify-center">
//           <div className="">
//             <img
//               src="assets/images/empower.png"
//               alt="Welcome Cat"
//               className="mx-auto rounded-3xl object-cover border-2 border-gray-300"
//               style={{ width: "100%", maxWidth: "500px" }}
//             />
//           </div>
//           <div className="text-center md:text-left">
//             <h1 className="font-bold text-left text-2xl md:text-4xl">
//               Empowering{"  "}
//               <span className="text-[#FF8534]">Happy Lives,</span> One Donation
//               <br className="hidden md:inline" />
//               at a Time.
//             </h1>
//             <p className="mt-4 text-left">
//               Discover the Joy of Adopting a Pet and Transforming Your Life with
//               <br />
//               <span className="font-bold">Unconditional</span> Love
//             </p>
//             <div className="flex justify-center md:justify-end mt-8">
//               <Link
//                 to={"/"}
//                 className="bg-[#FF8534] text-white font-bold text-xl md:text-2xl px-16 py-2 w-full md:w-auto rounded"
//                 style={{
//                   transition: "background-color 500ms ease, border 500ms ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.backgroundColor = "#FF7148";
//                   e.target.style.border = "2px solid black";
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.backgroundColor = "#FF8534";
//                   e.target.style.border = "none";
//                 }}
//               >
//                 Donate
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div
//           className="md:!mx-[13rem] lg:mx-80 m-5 md:p-20 rounded-lg mb-8"
//           style={{
//             backgroundImage: "url('assets/images/landingpage.png')",
//             width: "1300px",
//             height: "338px",
//           }}
//         >
//           <div className="bg-white flex flex-col md:flex-row md:p-8 md:mx-8 border border-black items-center gap-6 md:gap- justify-center">
//             <form className="space-y-4 w-full">
//               <h1 className="font-bold text-5xl">
//                 Get In <span className="text-[#FF8534]">Touch</span>
//               </h1>
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   onChange={(e) => setFullName(e.target.value)}
//                   className="w-full pl-4 py-2 mt-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-gray-950"
//                   style={{
//                     color: "black",
//                     width: "431px",
//                     height: "62px",
//                     borderRadius: "10px",
//                     fontSize: "16px",
//                   }}
//                 />
//               </div>
//               <div className="relative">
//                 <input
//                   type="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email"
//                   className="w-full pl-4 py-2 mt-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-gray-950"
//                   style={{
//                     color: "black",
//                     width: "431px",
//                     height: "62px",
//                     borderRadius: "10px",
//                     fontSize: "16px",
//                   }}
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Your Message"
//                   onChange={(e) => setMessage(e.target.value)}
//                   className="w-full p-2 border-2 border-gray-800 rounded-md focus:border-[#FF8534]"
//                   style={{
//                     color: "black",
//                     width: "431px",
//                     height: "62px",
//                     borderRadius: "10px",
//                     fontSize: "16px",
//                   }}
//                   rows="4"
//                 ></textarea>
//               </div>
//               <button
//                 type="submit"
//                 onClick={handleContactSubmit}
//                 className="bg-[#FF8534] text-white font-bold py-3 px-4 rounded-md"
//                 style={{
//                   width: "431px", // Matching the width of the message field
//                   fontSize: "22px",
//                   fontWeight: "800",
//                   transition: "background-color 500ms ease, border 500ms ease",
//                 }}
//                 onMouseOver={(e) => {
//                   e.target.style.backgroundColor = "#FF7148";
//                   e.target.style.border = "2px solid black";
//                 }}
//                 onMouseOut={(e) => {
//                   e.target.style.backgroundColor = "#FF8534";
//                   e.target.style.border = "none";
//                 }}
//               >
//                 {isLoading ? (
//                   <CircularProgress color={"inherit"} size={20} />
//                 ) : (
//                   "Send"
//                 )}
//               </button>
//             </form>
//             <div className="w-full" style={{ padding: 0 }}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1401.8199301169543!2d85.32952567350087!3d27.7060244248381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a74aa1f23%3A0x74ebef82ad0e5c15!2z4KS44KSr4KWN4KSf4KS14KS-4KSw4KS_4KSV4KS-IOCkleCksuClh-CknA!5e0!3m2!1sne!2snp!4v1719846302324!5m2!1sne!2snp"
//                 className="rounded-lg shadow-lg border-black border-2 w-full h-[200px] md:h-[500px]"
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>
//         </div>

//         <div className="text-center md:text-left mx-4 mt-8" style={{ marginTop: "400px" }}>
//           <h1 className="font-bold text-2xl md:text-4xl mb-3">
//             Where Dreams Find Their{" "}
//             <span className="text-[#FF8534]">Happily </span>Ever After Event
//           </h1>
//           <p className="mt-1">
//             "Adopt now and become part of our our{" "}
//             <span className="font-bold">Success</span> Story! Share your journey
//             with us."
//           </p>
//           <div className="flex justify-center md:mx-52 md:justify-end mt-8">
//             <button
//               onClick={openShareModal}
//               className="bg-[#FF8534] text-white font-bold text-xl md:text-2xl px-16 py-2 w-full md:w-auto rounded"
//               style={{
//                 transition: "background-color 500ms ease, border 500ms ease",
//               }}
//               onMouseOver={(e) => {
//                 e.target.style.backgroundColor = "#FF7148";
//                 e.target.style.border = "2px solid black";
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.backgroundColor = "#FF8534";
//                 e.target.style.border = "none";
//               }}
//             >
//               Share Story
//             </button>
//           </div>
//           <ShareStory isOpen={isShareModalOpen} onClose={closeShareModal} />
//         </div>

//         <div className="mx-36">
//           <div className="flex flex-row items-center justify-center w-full h-full py-24 sm:py-8 px-4">
//             <StorySlider stories={stories} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage;
// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[1100px] bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('assets/images/shelter me.jpg')",
//           backgroundSize: "cover",
//         }}
//       ></div>

//       {/* Main Section */}
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center">
//           Every Pet Deserves a Loving Home
//         </h1>
//         <p className="text-center mt-2 text-gray-700 text-lg">
//           Adopt a Pet Today
//         </p>
//         <p className="text-center mt-2 text-gray-500">
//           Browse our available animals and learn more about the adoption
//           process. Together, we can rescue, rehabilitate, and rehome pets in
//           need. Thank you for supporting our mission to bring joy to families
//           through pet adoption.
//         </p>

//         {/* Search Section */}
//         <div className="mt-6 flex justify-center items-center space-x-4">
//           <select className="border border-gray-300 px-4 py-2 rounded-lg">
//             <option>Dogs</option>
//             <option>Cats</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Search pets..."
//             className="border border-gray-300 px-4 py-2 rounded-lg"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//             Search
//           </button>
//         </div>

//         {/* Dogs Section */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-bold">Dogs</h2>
//           <div className="grid grid-cols-4 gap-6 mt-6">
//             {/* Dog Cards */}
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/husky.png"
//                 alt="Huskies"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Huskies</h3>
//                 <p className="text-gray-500 mt-1">Count: 15</p>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/LabRetriever.jpg"
//                 alt="Labrador Retriever"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Labrador Retriever</h3>
//                 <p className="text-gray-500 mt-1">Count: 20</p>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/german.webp"
//                 alt="German Shepherd"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">German Shepherd</h3>
//                 <p className="text-gray-500 mt-1">Count: 25</p>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/bull dog.webp"
//                 alt="Bull Dog"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Bull Dog</h3>
//                 <p className="text-gray-500 mt-1">Count: 2</p>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Cats Section */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-bold">Cats</h2>
//           <div className="grid grid-cols-4 gap-6 mt-6">
//             {/* Cat Cards */}
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/mimi.avif"
//                 alt="Mimi"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Mimi</h3>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/rainbow.jpeg"
//                 alt="Rainbow"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Rainbow</h3>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/saimon.webp"
//                 alt="Saimon"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Saimon</h3>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/puntu.jpeg"
//                 alt="Puntu"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Puntu</h3>
//                 <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
//                   View Details...
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleViewDetails = (petId) => {
//     navigate(`/details/${petId}`);
//   };

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[1100px] bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('assets/images/shelter me.jpg')",
//           backgroundSize: "cover",
//         }}
//       ></div>

//       {/* Main Section */}
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center">
//           Every Pet Deserves a Loving Home
//         </h1>
//         <p className="text-center mt-2 text-gray-700 text-lg">
//           Adopt a Pet Today
//         </p>
//         <p className="text-center mt-2 text-gray-500">
//           Browse our available animals and learn more about the adoption
//           process. Together, we can rescue, rehabilitate, and rehome pets in
//           need. Thank you for supporting our mission to bring joy to families
//           through pet adoption.
//         </p>

//         {/* Search Section */}
//         <div className="mt-6 flex justify-center items-center space-x-4">
//           <select className="border border-gray-300 px-4 py-2 rounded-lg">
//             <option>Dogs</option>
//             <option>Cats</option>
//           </select>
//           <input
//             type="text"
//             placeholder="Search pets..."
//             className="border border-gray-300 px-4 py-2 rounded-lg"
//           />
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//             Search
//           </button>
//         </div>

//         {/* Dogs Section */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-bold">Dogs</h2>
//           <div className="grid grid-cols-4 gap-6 mt-6">
//             {/* Dog Cards */}
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/husky.png"
//                 alt="Huskies"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Huskies</h3>
//                 <p className="text-gray-500 mt-1">Count: 15</p>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(1)} // Navigate to Husky's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/LabRetriever.jpg"
//                 alt="Labrador Retriever"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Labrador Retriever</h3>
//                 <p className="text-gray-500 mt-1">Count: 20</p>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(2)} // Navigate to Labrador Retriever's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/german.webp"
//                 alt="German Shepherd"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">German Shepherd</h3>
//                 <p className="text-gray-500 mt-1">Count: 25</p>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(3)} // Navigate to German Shepherd's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/bull dog.webp"
//                 alt="Bull Dog"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Bull Dog</h3>
//                 <p className="text-gray-500 mt-1">Count: 2</p>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(4)} // Navigate to Bull Dog's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Cats Section */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-bold">Cats</h2>
//           <div className="grid grid-cols-4 gap-6 mt-6">
//             {/* Cat Cards */}
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/mimi.avif"
//                 alt="Mimi"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Mimi</h3>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(5)} // Navigate to Mimi's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/rainbow.jpeg"
//                 alt="Rainbow"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Rainbow</h3>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(6)} // Navigate to Rainbow's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/saimon.webp"
//                 alt="Saimon"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Saimon</h3>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(7)} // Navigate to Saimon's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//             <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden">
//               <img
//                 src="/assets/images/puntu.jpeg"
//                 alt="Puntu"
//                 className="h-40 w-full object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">Puntu</h3>
//                 <button
//                   className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
//                   onClick={() => handleViewDetails(8)} // Navigate to Puntu's detail page
//                 >
//                   View Details...
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaStar } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const [wishlist, setWishlist] = useState(() => {
//     const savedWishlist = localStorage.getItem("wishlist");
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });

//   const handleViewDetails = (petId) => {
//     navigate(`/details/${petId}`);
//   };

//   const toggleWishlist = (pet) => {
//     const isAlreadyInWishlist = wishlist.some((item) => item.id === pet.id);

//     let updatedWishlist;
//     if (isAlreadyInWishlist) {
//       updatedWishlist = wishlist.filter((item) => item.id !== pet.id);
//       toast.info(`${pet.name} removed from wishlist.`);
//     } else {
//       updatedWishlist = [...wishlist, pet];
//       toast.success(`${pet.name} added to wishlist.`);
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//   };

//   const pets = [
//     { id: 1, name: "Huskies", image: "/assets/images/husky.png", count: 15, rating: 5 },
//     { id: 2, name: "Labrador Retriever", image: "/assets/images/LabRetriever.jpg", count: 20, rating: 4 },
//     { id: 3, name: "German Shepherd", image: "/assets/images/german.webp", count: 25, rating: 5 },
//     { id: 4, name: "Bull Dog", image: "/assets/images/bull dog.webp", count: 2, rating: 4 },
//     { id: 5, name: "Mimi", image: "/assets/images/mimi.avif", count: 1, rating: 5 },
//     { id: 6, name: "Rainbow", image: "/assets/images/rainbow.jpeg", count: 1, rating: 3 },
//     { id: 7, name: "Saimon", image: "/assets/images/saimon.webp", count: 1, rating: 4 },
//     { id: 8, name: "Puntu", image: "/assets/images/puntu.jpeg", count: 1, rating: 5 },
//   ];

//   return (
//     <div className="bg-white">
//       {/* Toast Notifications */}
//       <ToastContainer />

//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[1100px] bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('assets/images/shelter me.jpg')",
//           backgroundSize: "cover",
//         }}
//       ></div>

//       {/* Main Section */}
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-center">
//           Every Pet Deserves a Loving Home
//         </h1>
//         <p className="text-center mt-2 text-gray-700 text-lg">
//           Adopt a Pet Today
//         </p>
//         <p className="text-center mt-2 text-gray-500">
//           Browse our available animals and learn more about the adoption
//           process. Together, we can rescue, rehabilitate, and rehome pets in
//           need. Thank you for supporting our mission to bring joy to families
//           through pet adoption.
//         </p>

//         {/* Pets Section */}
//         <section className="mt-10">
//           <h2 className="text-2xl font-bold">Available Pets</h2>
//           <div className="grid grid-cols-4 gap-6 mt-6">
//             {pets.map((pet) => (
//               <div
//                 key={pet.id}
//                 className="border border-gray-300 rounded-lg shadow-sm overflow-hidden relative"
//               >
//                 <img
//                   src={pet.image}
//                   alt={pet.name}
//                   className="h-40 w-full object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{pet.name}</h3>
//                   <div className="flex items-center justify-between mt-1">
//                     <p className="text-gray-500">Count: {pet.count}</p>
//                     <button
//                       className="text-gray-500"
//                       onClick={() => toggleWishlist(pet)}
//                     >
//                       <FaHeart
//                         className="text-lg"
//                         color={
//                           wishlist.some((item) => item.id === pet.id)
//                             ? "red"
//                             : "gray"
//                         }
//                       />
//                     </button>
//                   </div>
//                   {/* Review Rating */}
//                   <div className="flex items-center mt-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <FaStar
//                         key={index}
//                         className={`text-lg ${
//                           index < pet.rating ? "text-yellow-400" : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                   {/* View Details Button */}
//                   <button
//                     className="mt-4 bg-white text-black font-semibold border-2 border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg w-full"
//                     onClick={() => handleViewDetails(pet.id)}
//                   >
//                     View Details......
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaStar, FaShoppingCart } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import {
//   addToCartApi,
//   getAllPetsApi,
// } from "../apis/Api";

// const LandingPage = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();
//   //  const [loading, setLoading] = useState(false);
//     const [pets, setPets] = useState([]);
//    useEffect(() => {
//       const fetchPets = async () => {
//         // setLoading(true);
//         try {
//           const response = await getAllPetsApi();
//           console.log(response.data.allPets)
//           setPets(response.data.allPets); 
//         } catch (error) {
//           console.error("Error fetching pets:", error);
//         } finally {
//           // setLoading(false);
//         }
//       };
  
//       fetchPets();
//     }, []);

//   const [wishlist, setWishlist] = useState(() => {
//     const savedWishlist = localStorage.getItem("wishlist");
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });

//   const [ratings, setRatings] = useState(() => {
//     const savedRatings = localStorage.getItem("ratings");
//     return savedRatings ? JSON.parse(savedRatings) : {};
//   });

//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   const handleViewDetails = (petId) => {
//     navigate(`/details/${petId}`);
//   };

//   const toggleWishlist = (pet) => {
//     const isAlreadyInWishlist = wishlist.some((item) => item.id === pet.id);

//     let updatedWishlist;
//     if (isAlreadyInWishlist) {
//       updatedWishlist = wishlist.filter((item) => item.id !== pet.id);
//       toast.info(`${pet.fullName} removed from wishlist.`);
//     } else {
//       updatedWishlist = [...wishlist, pet];
//       toast.success(`${pet.name} added to wishlist.`);
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//   };

//   const handleAddToCart = (pet) => {
//     const isAlreadyInCart = cart.some((item) => item.id === pet.id);
//     const data = {
//       user:user?._id,  
//       products: pet._id,
//       quantity:1
//     };
   
//     const response=addToCartApi(data)

//     if (isAlreadyInCart) {
//       toast.info(`${pet.fullName} is already in the cart.`);
//     } else {
//       const updatedCart = [...cart, pet];
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       toast.success(`${pet.name} added to cart!`);
//     }
//   };

//   const handleRating = (petId, rating) => {
//     const updatedRatings = { ...ratings, [petId]: rating };
//     setRatings(updatedRatings);
//     localStorage.setItem("ratings", JSON.stringify(updatedRatings));
//     toast.success(`You rated ${rating} star(s) for pet ${petId}`);
//   };


//   return (
//     <div className="bg-white">
//       {/* Toast Notifications */}
//       <ToastContainer />

//       {/* Hero Section */}
//       <div
//         className="relative w-full h-[700px] bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('assets/images/cute.jpeg')",
//           backgroundSize: "contain",
//         }}
//       ></div>

//       {/* Main Section */}
//       <div className="container mx-auto px-4 py-4">
//         <h1 className="text-3xl font-bold text-center">
//           Every Pet Deserves a Loving Home
//         </h1>
//         <p className="text-center mt-2 text-gray-700 text-lg">
//           Adopt a Pet Today
//         </p>
//         <p className="text-center mt-2 text-gray-500">
//           Browse our available animals and learn more about the adoption
//           process. Together, we can rescue, rehabilitate, and rehome pets in
//           need. Thank you for supporting our mission to bring joy to families
//           through pet adoption.
//         </p>

//         {/* Pets Section */}
//         <section className="mt-8">
//           <h2 className="text-2xl font-bold">Available Pets</h2>
//           <div className="grid grid-cols-4 gap-6 mt-6">
//             {pets.map((pet) => (
//               <div
//                 key={pet._id}
//                 className="border border-gray-300 rounded-lg shadow-sm overflow-hidden relative"
//               >
//                 <img
//                   src={pet.petImageUrlOne}
//                   alt={pet.fullName}
//                   className="h-40 w-full object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{pet.fullName}</h3>
//                   <div className="flex items-center justify-between mt-1">
//                     <p className="text-gray-500">Count: {pet.count}</p>
//                     <div className="flex flex-col items-center">
//                       <button
//                         className="text-gray-500"
//                         onClick={() => toggleWishlist(pet)}
//                       >
//                         <FaHeart
//                           className="text-lg"
//                           color={
//                             wishlist.some((item) => item._id === pet._id)
//                               ? "red"
//                               : "gray"
//                           }
//                         />
//                       </button>
//                       <button
//                         className="mt-2 text-gray-500"
//                         onClick={() => handleAddToCart(pet)}
//                       >
//                         <FaShoppingCart
//                           className="text-lg"
//                           color={
//                             cart.some((item) => item._id === pet._id)
//                               ? "#EA9E1A"
//                               : "gray"
//                           }
//                         />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex items-center mt-2">
//                     {Array.from({ length: 5 }).map((_, index) => (
//                       <FaStar
//                         key={index}
//                         className={`text-lg cursor-pointer ${
//                           index < (ratings[pet._id] || 0) ? "text-yellow-400" : "text-gray-300"
//                         }`}
//                         onClick={() => handleRating(pet._id, index + 1)}
//                       />
//                     ))}
//                   </div>
//                   <button
//                     className="mt-4 bg-white text-black font-semibold border-2 border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-lg w-full"
//                     onClick={() => handleViewDetails(pet._id)}
//                   >
//                     View Details......
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllPetsApi } from "../apis/Api";

const LandingPage = () => {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getAllPetsApi();
        setPets(response.data.allPets);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };
    fetchPets();
  }, []);

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [ratings, setRatings] = useState(() => {
    const savedRatings = localStorage.getItem("ratings");
    return savedRatings ? JSON.parse(savedRatings) : {};
  });

  const toggleWishlist = (pet) => {
    const isAlreadyInWishlist = wishlist.some((item) => item._id === pet._id);

    let updatedWishlist;
    if (isAlreadyInWishlist) {
      updatedWishlist = wishlist.filter((item) => item._id !== pet._id);
      toast.info(`${pet.fullName} removed from wishlist.`);
    } else {
      updatedWishlist = [...wishlist, pet];
      toast.success(`${pet.fullName} added to wishlist.`);
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleRating = (petId, rating) => {
    const updatedRatings = { ...ratings, [petId]: rating };
    setRatings(updatedRatings);
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));
    toast.success(`You rated ${rating} star(s) for this pet.`);
  };

  return (
    <div className="bg-white">
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Hero Section */}
      <div
        className="relative w-full h-[800px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('assets/images/land.jpg')",
          backgroundSize: "contain",
        }}
      >
        <div className="absolute bottom-10 left-10 bg-gray-900 bg-opacity-50 text-white p-4 rounded-lg">
          <h1 className="text-4xl font-bold">Find Your Perfect Pet</h1>
          <p className="mt-2 text-lg">
            Adopt a loving pet and give them the home they deserve.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-center">
          Every Pet Deserves a Loving Home
        </h1>
        <p className="text-center mt-2 text-gray-700 text-lg">
          Adopt a Pet Today
        </p>
        <p className="text-center mt-2 text-gray-500">
          Browse our available animals and learn more about the adoption
          process. Together, we can rescue, rehabilitate, and rehome pets in
          need.
        </p>

        {/* Pets Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Available Pets</h2>
          <div className="grid grid-cols-4 gap-6 mt-6">
            {pets.map((pet) => (
              <div
                key={pet._id}
                className="border border-gray-300 rounded-lg shadow-sm overflow-hidden relative"
              >
                <img
                  src={pet.petImageUrlOne}
                  alt={pet.fullName}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{pet.fullName}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-500">Type: {pet.petType}</p>
                    <button
                      className="text-gray-500"
                      onClick={() => toggleWishlist(pet)}
                    >
                      <FaHeart
                        className="text-lg"
                        color={
                          wishlist.some((item) => item._id === pet._id)
                            ? "red"
                            : "gray"
                        }
                      />
                    </button>
                  </div>
                  <div className="flex items-center mt-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-lg cursor-pointer ${
                          index < (ratings[pet._id] || 0)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        onClick={() => handleRating(pet._id, index + 1)}
                      />
                    ))}
                  </div>
                  <div
                    className="mt-4 bg-blue-100 text-black-600 font-semibold text-center py-2 rounded-lg cursor-pointer"
                    onClick={() => navigate(`/adopt`)}
                  >
                    <p>Browse In-Depth Details!</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
