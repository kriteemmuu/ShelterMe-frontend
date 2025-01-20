// // import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { CircularProgress } from "@mui/material";
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { adoptAPetApi, sendOtpApi, updateUserApi } from "../apis/Api";
// // import OTPVerify from "./OTPVerify";

// // function VerifyPage({ isOpen, pet, close }) {
// //   const user = JSON.parse(localStorage.getItem("user"));

// //   const [formData, setFormData] = useState({
// //     ownedPetBefore: "",
// //     haveAPet: "",
// //     ownRent: "",
// //     permissionPet: "",
// //     houseApartment: "",
// //     peopleInHouse: "",
// //     hoursPetAlone: "",
// //     travelFrequency: "",
// //     petCareArrangement: "",
// //     reasonForAdoption: "",
// //     pet: pet?._id,
// //     user: user?._id,
// //   });

// //   const [agreeErrors, setAgreeErrors] = useState({
// //     agreeToTermsError: false,
// //     agreeToShowHouseError: false,
// //   });

// //   const handleChange = (event) => {
// //     const { name, value, type, checked } = event.target;
// //     setFormData((prevFormData) => ({
// //       ...prevFormData,
// //       [name]: type === "checkbox" ? checked : value,
// //     }));
// //     if (name === "agreeToTerms" || name === "agreeToShowHouse") {
// //       setAgreeErrors({ ...agreeErrors, [`${name}Error`]: false });
// //     }
// //   };

// //   const handleAgreementsValidation = () => {
// //     const { agreeToTerms, agreeToShowHouse } = formData;
// //     const errors = {
// //       agreeToTermsError: !agreeToTerms,
// //       agreeToShowHouseError: !agreeToShowHouse,
// //     };
// //     setAgreeErrors(errors);
// //     return !errors.agreeToTermsError && !errors.agreeToShowHouseError;
// //   };

// //   const handleAdoptPet = (e) => {
// //     e.preventDefault();
// //     if (handleAgreementsValidation()) {
// //       console.log(formData);
// //       adoptAPetApi(formData).then((res) => {
// //         if (res.data.success === true) {
// //           toast.success(res.data.message);
// //         } else {
// //           toast.error(res.data.message);
// //         }
// //       });
// //     }
// //   };

// //   const [step, setStep] = useState(1);

// //   const [otpModal, setOtpModal] = useState(false);

// //   const openOtpModal = () => {
// //     setOtpModal(true);
// //   };

// //   const closeOtpModal = () => {
// //     setOtpModal(false);
// //   };

// //   const nextStep = () => {
// //     setStep(step + 1);
// //   };

// //   const prevStep = () => {
// //     setStep(step - 1);
// //   };

// //   const [fullName, setFullName] = useState(user?.fullName);
// //   const [email, setEmail] = useState(user?.email);
// //   const [address, setAddress] = useState(user?.address);
// //   const [otp, setOtp] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [id, setId] = useState(user?._id);

// //   const navigate = useNavigate();

// //   const updateAddress = (e) => {
// //     console.log(id);
// //     setIsLoading(true);
// //     e.preventDefault();
// //     const data = new FormData();
// //     data.append("email", email);
// //     data.append("address", address);
// //     data.append("fullName", fullName);

// //     for (var pair of data.entries()) {
// //       console.log(pair[0] + ", " + pair[1]);
// //     }

// //     updateUserApi(id, data).then((res) => {
// //       if (res.data.success == true) {
// //         toast.success(res.data.message);
// //         setIsLoading(false);
// //       } else {
// //         toast.error(res.data.message);
// //         setIsLoading(false);
// //       }
// //     });
// //     setIsLoading(false);
// //   };

// //   const handleSubmit = (e) => {
// //     setIsLoading(true);
// //     e.preventDefault();
// //     const data = new FormData();
// //     data.append("email", email);

// //     sendOtpApi(data)
// //       .then((res) => {
// //         if (res.data.success == true) {
// //           setOtp(res.data.otp);
// //           toast.success(res.data.message);
// //           setOtpModal(true);
// //         } else {
// //           toast.error(res.data.message);
// //         }
// //       })
// //       .catch((err) => {
// //         toast.error("Server Error", err.message);
// //       })
// //       .finally(() => {
// //         setIsLoading(false);
// //       });
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 flex justify-center items-center z-50">
// //       <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
// //       <div
// //         className="relative bg-white p-8 rounded"
// //         style={{
// //           width: '1102px',
// //           height: '711px',
// //           fontFamily: 'Poppins',
// //           border: '2px solid black',
// //           borderRadius: '25px',
// //           overflowY: 'auto'
// //         }}
// //       >
// //         <div className="flex justify-between items-center mb-4">
// //           <div className="flex flex-row justify-end w-full">
// //             <button
// //               title="Close Modal"
// //               onClick={close}
// //               className="text-black-500 hover:text-gray-700 rounded-lg text-sm p-2 px-4"
// //               style={{ top: '29px', right: '27px', fontSize: '1.7rem', color: 'black' }}
// //             >
// //               <FontAwesomeIcon icon={faTimes} size="lg" />
// //             </button>
// //           </div>
// //         </div>
// //         <div className="flex justify-around items-center mb-8 relative">
// //           {["Verify", "Personal Data", "More Info"].map((item, index) => (
// //             <div key={index} className="flex flex-col items-center relative">
// //               <div
// //                 className={`rounded-full flex items-center justify-center relative ${
// //                   index + 1 <= step
// //                     ? "bg-blue-500 text-white"
// //                     : "bg-gray-200 text-gray-400"
// //                 }`}
// //                 style={{ width: '73px', height: '70px', fontSize: '35px' }}
// //               >
// //                 {index + 1 <= step && (
// //                   <FontAwesomeIcon
// //                     icon={faCheck}
// //                     className="absolute"
// //                     style={{ top: '-10px', right: '-10px', color: 'white', fontSize: '15px' }}
// //                   />
// //                 )}
// //                 {index + 1}
// //               </div>
// //               <div
// //                 className={`text-sm mt-2 ${
// //                   index + 1 < step ? "text-blue-500" : "text-gray-600"
// //                 } `}
// //                 style={{ fontSize: '20px', marginLeft: '10px' }}
// //               >
// //                 {item}
// //               </div>
// //               {index < 2 && (
// //                 <div
// //                   className={`absolute mt-4 h-0.5 ml-28 w-[200px] ${
// //                     index + 1 < step ? "bg-blue-500" : "bg-gray-300"
// //                   }`}
// //                   style={{ transform: "translateX(50%)" }}
// //                 ></div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //         <div>
// //           {step === 1 && (
// //             <>
// //               {user?.isVerified ? (
// //                 <div className="flex flex-col space-y-4 items-center">
// //                   <div>
// //                     <input
// //                       type="email"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                       placeholder="Email"
// //                       className="form-input mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //                       style={{ width: '431px', height: '58px' }}
// //                     />
// //                   </div>
// //                   <div className="flex flex-row justify-start">
// //                     <img src="/assets/images/verify.png" alt="" />
// //                     <h3 className="text-lg text-green-500">Email Verified</h3>
// //                   </div>
// //                 </div>
// //               ) : (
// //                 <div className="flex flex-col items-center space-y-4">
// //                   <label
// //                     htmlFor="email"
// //                     className="flex flex-col items-center w-full max-w-md"
// //                   >
// //                     <input
// //                       type="email"
// //                       value={email}
// //                       onChange={(e) => setEmail(e.target.value)}
// //                       placeholder="Email"
// //                       className="form-input mt-1 block px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //                       style={{ width: '431px', height: '58px' }}
// //                     />
// //                     <span className="text-sm text-gray-600 mb-1 mt-2">
// //                       Note: Please verify first to move to further step of Adopting the Pet.
// //                     </span>
// //                   </label>
// //                   <Link
// //                     type="button"
// //                     onClick={(e) => {
// //                       handleSubmit(e);
// //                     }}
// //                     className="text-center bg-[#FF8534] hover:bg-[#FF7148] text-white font-bold py-2 px-4 rounded"
// //                     style={{
// //                       width: '431px',
// //                       height: '58px',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       justifyContent: 'center',
// //                       borderRadius: '10px',
// //                       border: 'none',
// //                       transition: 'background-color 500ms ease, border 500ms ease',
// //                     }}
// //                     onMouseOver={(e) => {
// //                       e.target.style.backgroundColor = '#FF7148';
// //                       e.target.style.border = '2px solid black';
// //                     }}
// //                     onMouseOut={(e) => {
// //                       e.target.style.backgroundColor = '#FF8534';
// //                       e.target.style.border = 'none';
// //                     }}
// //                   >
// //                     {isLoading ? (
// //                       <CircularProgress color={"inherit"} size={20} />
// //                     ) : (
// //                       "Send Otp"
// //                     )}
// //                   </Link>
// //                   <OTPVerify
// //                     email={user?.email}
// //                     isOpen={otpModal}
// //                     userOtp={otp}
// //                     closeModal={closeOtpModal}
// //                     resend={handleSubmit}
// //                   />
// //                 </div>
// //               )}
// //             </>
// //           )}
// //           {step === 2 && (
// //             <div className="flex flex-col items-center space-y-4 h-full justify-center">
// //               <div className="w-full max-w-md">
// //                 <label
// //                   htmlFor="fullName"
// //                   className="flex flex-col items-center w-full"
// //                 >
// //                   <input
// //                     type="text"
// //                     value={fullName}
// //                     onChange={(e) => setFullName(e.target.value)}
// //                     placeholder="Full Name"
// //                     className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                     style={{ width: '431px', height: '58px' }}
// //                   />
// //                 </label>
// //                 <label
// //                   htmlFor="address"
// //                   className="flex flex-col items-center w-full mt-4"
// //                 >
// //                   <input
// //                     type="text"
// //                     value={address}
// //                     onChange={(e) => setAddress(e.target.value)}
// //                     placeholder="Address"
// //                     className="form-input mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                     style={{ width: '431px', height: '58px' }}
// //                   />
// //                 </label>
// //                 <Link
// //                   type="button"
// //                   onClick={updateAddress}
// //                   className="mt-4 text-center bg-[#FF8534] hover:bg-[#FF7148] text-white font-bold py-2 px-4 rounded"
// //                   style={{
// //                     width: '431px',
// //                     height: '58px',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     justifyContent: 'center',
// //                     borderRadius: '10px',
// //                     border: 'none',
// //                     transition: 'background-color 500ms ease, border 500ms ease',
// //                   }}
// //                   onMouseOver={(e) => {
// //                     e.target.style.backgroundColor = '#FF7148';
// //                     e.target.style.border = '2px solid black';
// //                   }}
// //                   onMouseOut={(e) => {
// //                     e.target.style.backgroundColor = '#FF8534';
// //                     e.target.style.border = 'none';
// //                   }}
// //                 >
// //                   {isLoading ? (
// //                     <CircularProgress color={"inherit"} size={20} />
// //                   ) : (
// //                     "Update"
// //                   )}
// //                 </Link>
// //               </div>
// //             </div>
// //           )}
// //           {step === 3 && (
// //             <div className="bg-white p-6 rounded-lg overflow-y-auto overflow-x-hidden max-w-full mx-auto" style={{ height: 'calc(100% - 150px)' }}>
// //               <form className="space-y-4" onSubmit={handleSubmit}>
// //                 <div className="grid grid-cols-3 gap-6">
// //                   <div>
// //                     <label className="block text-gray-700">
// //                       Have you owned a pet before?
// //                     </label>
// //                     <div className="flex gap-2">
// //                       <input
// //                         type="radio"
// //                         name="ownedPetBefore"
// //                         value="true"
// //                         checked={formData.ownedPetBefore === "true"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="yesPetBefore"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         Yes
// //                       </label>
// //                       <input
// //                         type="radio"
// //                         name="ownedPetBefore"
// //                         value="false"
// //                         checked={formData.ownedPetBefore === "false"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="noPetBefore"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         No
// //                       </label>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700">
// //                       Do you currently have a pet?
// //                     </label>
// //                     <div className="flex gap-2">
// //                       <input
// //                         type="radio"
// //                         name="haveAPet"
// //                         value="true"
// //                         checked={formData.haveAPet === "true"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="yesHavePet"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         Yes
// //                       </label>
// //                       <input
// //                         type="radio"
// //                         name="haveAPet"
// //                         value="false"
// //                         checked={formData.haveAPet === "false"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="noHavePet"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         No
// //                       </label>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700">
// //                       Do you live in a house or apartment?
// //                     </label>
// //                     <div className="flex gap-2">
// //                       <input
// //                         type="radio"
// //                         name="houseApartment"
// //                         value="House"
// //                         checked={formData.houseApartment === "House"}
// //                         onChange={handleChange}
// //                         className="mt-1"
// //                       />
// //                       <label htmlFor="house" className="text-sm text-gray-600">
// //                         House
// //                       </label>
// //                       <input
// //                         type="radio"
// //                         name="houseApartment"
// //                         value="Apartment"
// //                         checked={formData.houseApartment === "Apartment"}
// //                         onChange={handleChange}
// //                         className="mt-1"
// //                       />
// //                       <label
// //                         htmlFor="apartment"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         Apartment
// //                       </label>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="flex flex-row gap-4">
// //                   <div>
// //                     <label className="block text-gray-700">
// //                       Do you own or rent your house?
// //                     </label>
// //                     <div className="flex gap-2">
// //                       <input
// //                         type="radio"
// //                         name="ownRent"
// //                         value="Own"
// //                         checked={formData.ownRent === "Own"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="ownHouse"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         Own
// //                       </label>
// //                       <input
// //                         type="radio"
// //                         name="ownRent"
// //                         value="Rent"
// //                         checked={formData.ownRent === "Rent"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="rentHouse"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         Rent
// //                       </label>
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <label className="block text-gray-700">
// //                       Do you have permission to have a pet from your family or
// //                       landlord?
// //                     </label>
// //                     <div className="flex gap-2">
// //                       <input
// //                         type="radio"
// //                         name="permissionPet"
// //                         value="true"
// //                         checked={formData.permissionPet === "true"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="yesPetBefore"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         Yes
// //                       </label>
// //                       <input
// //                         type="radio"
// //                         name="permissionPet"
// //                         value="false"
// //                         checked={formData.permissionPet === "false"}
// //                         onChange={handleChange}
// //                         className="mt-1 cursor-pointer"
// //                       />
// //                       <label
// //                         htmlFor="permissionPet"
// //                         className="text-sm text-gray-600"
// //                       >
// //                         No
// //                       </label>
// //                     </div>
// //                   </div>
// //                 </div>
// //                 <div className="grid grid-cols-2 gap-x-6">
// //                   <input
// //                     type="text"
// //                     name="peopleInHouse"
// //                     placeholder="How many people live in the house?"
// //                     value={formData.peopleInHouse}
// //                     onChange={handleChange}
// //                     className="form-input mt-4 rounded-lg block w-full"
// //                     style={{ height: '58px' }}
// //                   />
// //                   <input
// //                     type="text"
// //                     name="hoursPetAlone"
// //                     placeholder="How many hours will the pet be alone?"
// //                     value={formData.hoursPetAlone}
// //                     onChange={handleChange}
// //                     className="form-input mt-4 rounded-lg block w-full"
// //                     style={{ height: '58px' }}
// //                   />
// //                   <input
// //                     type="text"
// //                     name="travelFrequency"
// //                     placeholder="How often do you travel ?"
// //                     value={formData.travelFrequency}
// //                     onChange={handleChange}
// //                     className="form-input mt-4 rounded-lg block w-full"
// //                     style={{ height: '58px' }}
// //                   />
// //                   <input
// //                     type="text"
// //                     name="petCareArrangement"
// //                     placeholder="What agreement do you make for the pet when you travel?"
// //                     value={formData.petCareArrangement}
// //                     onChange={handleChange}
// //                     className="form-input mt-4 rounded-lg block w-full"
// //                     style={{ height: '58px' }}
// //                   />
// //                 </div>
// //                 <textarea
// //                   name="reasonForAdoption"
// //                   placeholder="Why do you want to adopt the pet ?"
// //                   value={formData.reasonForAdoption}
// //                   onChange={handleChange}
// //                   className="form-textarea mt-4 rounded-lg block w-full h-24"
// //                 ></textarea>
// //                 <div className="flex items-center">
// //                   <input
// //                     type="checkbox"
// //                     name="agreeToTerms"
// //                     checked={formData.agreeToTerms}
// //                     onChange={handleChange}
// //                     className="form-checkbox h-4 w-4 cursor-pointer"
// //                   />
// //                   <label
// //                     htmlFor="terms"
// //                     className="ml-2 block text-sm text-gray-600"
// //                   >
// //                     I agree to the terms and condition
// //                   </label>
// //                   {agreeErrors.agreeToTermsError && (
// //                     <p className="text-red-500 text-sm ml-3">
// //                       * You must agree to the terms.
// //                     </p>
// //                   )}
// //                 </div>
// //                 <div className="flex items-center">
// //                   <input
// //                     type="checkbox"
// //                     name="agreeToShowHouse"
// //                     checked={formData.agreeToShowHouse}
// //                     onChange={handleChange}
// //                     className="form-checkbox h-4 w-4 cursor-pointer"
// //                   />
// //                   <label
// //                     htmlFor="showHouse"
// //                     className="ml-2 block text-sm text-gray-600"
// //                   >
// //                     I agree to show my house before adoption
// //                   </label>
// //                   {agreeErrors.agreeToShowHouseError && (
// //                     <p className="text-red-500 text-sm ml-4">
// //                       * You must agree to show your house.
// //                     </p>
// //                   )}
// //                 </div>
// //                 <div className="flex flex-row justify-center">
// //                   <Link
// //                     type="button"
// //                     onClick={handleAdoptPet}
// //                     className="text-center bg-[#FF8534] hover:bg-[#FF7148] text-white font-bold py-2 px-4 rounded"
// //                     style={{
// //                       width: '431px',
// //                       height: '58px',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       justifyContent: 'center',
// //                       borderRadius: '10px',
// //                       border: 'none',
// //                       transition: 'background-color 500ms ease, border 500ms ease',
// //                     }}
// //                     onMouseOver={(e) => {
// //                       e.target.style.backgroundColor = '#FF7148';
// //                       e.target.style.border = '2px solid black';
// //                     }}
// //                     onMouseOut={(e) => {
// //                       e.target.style.backgroundColor = '#FF8534';
// //                       e.target.style.border = 'none';
// //                     }}
// //                   >
// //                     {isLoading ? (
// //                       <CircularProgress color={"inherit"} size={20} />
// //                     ) : (
// //                       "Submit Adoption Request"
// //                     )}
// //                   </Link>
// //                 </div>
// //               </form>
// //             </div>
// //           )}
// //         </div>

// //         <div className="flex justify-center mt-8">
// //           {step > 1 && (
// //             <button
// //               onClick={prevStep}
// //               className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
// //               style={{
// //                 width: '181px',
// //                 height: '58px',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //               }}
// //             >
// //               Back
// //             </button>
// //           )}
// //           {step < 3 && (
// //             <button
// //               onClick={() => {
// //                 nextStep();
// //               }}
// //               className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
// //               style={{
// //                 width: '181px',
// //                 height: '58px',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //               }}
// //             >
// //               Next
// //             </button>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default VerifyPage;

// import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { CircularProgress } from "@mui/material";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { adoptAPetApi } from "../apis/Api";
// import OTPVerify from "./OTPVerify";

// function VerifyPage({ isOpen, pet, close }) {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [formData, setFormData] = useState({
//     ownedPetBefore: "",
//     haveAPet: "",
//     ownRent: "",
//     permissionPet: "",
//     houseApartment: "",
//     peopleInHouse: "",
//     hoursPetAlone: "",
//     travelFrequency: "",
//     petCareArrangement: "",
//     reasonForAdoption: "",
//     pet: pet?._id,
//     user: user?._id,
//     email: user?.email || "",
//   });

//   const [step, setStep] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleAdoptPet = (e) => {
//     e.preventDefault();
//     adoptAPetApi(formData).then((res) => {
//       if (res.data.success) {
//         toast.success(res.data.message);
//       } else {
//         toast.error(res.data.message);
//       }
//     });
//   };

//   const nextStep = () => {
//     setStep((prev) => prev + 1);
//   };

//   const prevStep = () => {
//     setStep((prev) => prev - 1);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50">
//       <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
//       <div
//         className="relative bg-white p-8 rounded-lg shadow-lg"
//         style={{
//           width: "850px",
//           height: "700px",
//           fontFamily: "Poppins",
//           border: "2px solid black",
//           borderRadius: "25px",
//           overflowY: "auto",
//         }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold text-center w-full">
//             Application Form
//           </h2>
//           <button
//             onClick={close}
//             className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//           >
//             <FontAwesomeIcon icon={faTimes} size="lg" />
//           </button>
//         </div>

//         {/* Progress Bar */}
//         <div className="flex justify-around items-center mb-8">
//           {["Verify", "Personal Data", "More Info"].map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <div
//                 className={`rounded-full flex items-center justify-center ${
//                   step > index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
//                 }`}
//                 style={{
//                   width: "60px",
//                   height: "60px",
//                   fontSize: "20px",
//                 }}
//               >
//                 {index + 1}
//               </div>
//               <span
//                 className={`text-sm mt-2 ${
//                   step > index ? "text-blue-500" : "text-gray-500"
//                 }`}
//                 style={{ fontSize: "16px" }}
//               >
//                 {item}
//               </span>
//               {index < 2 && (
//                 <div
//                   className={`h-1 w-24 ${
//                     step > index ? "bg-blue-500" : "bg-gray-300"
//                   }`}
//                 ></div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Step 1 */}
//         {step === 1 && (
//           <div className="space-y-6">
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName || ""}
//               onChange={handleChange}
//               placeholder="Enter your full name"
//               className="w-full border border-gray-300 p-3 rounded"
//             />
//             <input
//               type="text"
//               name="address"
//               value={formData.address || ""}
//               onChange={handleChange}
//               placeholder="Location"
//               className="w-full border border-gray-300 p-3 rounded"
//             />
//             <div className="flex justify-between">
//               <button
//                 onClick={prevStep}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Step 2 */}
//         {step === 2 && (
//           <div className="space-y-6">
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700">
//                   Have you owned a pet before?
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="ownedPetBefore"
//                       value="Yes"
//                       checked={formData.ownedPetBefore === "Yes"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     Yes
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="ownedPetBefore"
//                       value="No"
//                       checked={formData.ownedPetBefore === "No"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700">
//                   Do you currently own a pet?
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="haveAPet"
//                       value="Yes"
//                       checked={formData.haveAPet === "Yes"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     Yes
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="haveAPet"
//                       value="No"
//                       checked={formData.haveAPet === "No"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700">
//                   Does your parents/landlord allow you to own a pet?
//                 </label>
//                 <div className="flex items-center gap-4">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="permissionPet"
//                       value="Yes"
//                       checked={formData.permissionPet === "Yes"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     Yes
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="permissionPet"
//                       value="No"
//                       checked={formData.permissionPet === "No"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     No
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700">Where do you live?</label>
//                 <div className="flex items-center gap-4">
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="houseApartment"
//                       value="House"
//                       checked={formData.houseApartment === "House"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     House
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="houseApartment"
//                       value="Apartment"
//                       checked={formData.houseApartment === "Apartment"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     Apartment
//                   </label>
//                   <label className="flex items-center gap-2">
//                     <input
//                       type="radio"
//                       name="houseApartment"
//                       value="Rent"
//                       checked={formData.houseApartment === "Rent"}
//                       onChange={handleChange}
//                       className="form-radio"
//                     />
//                     Rent
//                   </label>
//                 </div>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <label className="block text-gray-700">Enter your email</label>
//               <div className="flex items-center border border-gray-300 rounded p-2">
//                 <FontAwesomeIcon
//                   icon={faCheck}
//                   className="text-gray-500 mr-2"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your e-mail"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full outline-none"
//                 />
//               </div>

//               <label className="block text-gray-700">
//                 Why do you want to adopt the pet?
//               </label>
//               <textarea
//                 name="reasonForAdoption"
//                 placeholder="Why do you want to adopt the pet?"
//                 value={formData.reasonForAdoption}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded p-2"
//                 rows={4}
//               ></textarea>
//             </div>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={prevStep}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={nextStep}
//                 className="bg-blue-500 text-white px-4 py-2 rounded"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Step 3 */}
//         {step === 3 && (
//           <div className="space-y-6">
//             <textarea
//               name="petCareArrangement"
//               value={formData.petCareArrangement}
//               onChange={handleChange}
//               placeholder="What precautions will you take for the safety of the pet?"
//               className="w-full border border-gray-300 p-3 rounded"
//             ></textarea>
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 name="agreeToTerms"
//                 checked={formData.agreeToTerms}
//                 onChange={handleChange}
//                 className="mr-2"
//               />
//               <label>I agree to all the terms and conditions</label>
//             </div>
//             <div className="flex justify-between">
//               <button
//                 onClick={prevStep}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleAdoptPet}
//                 className="bg-green-500 text-white px-4 py-2 rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VerifyPage;

import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import { adoptAPetApi } from "../apis/Api";

function VerifyPage({ isOpen, pet, close }) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(pet._id)

  const [formData, setFormData] = useState({
    ownedPetBefore: "",
    haveAPet: "",
    permissionPet: "",
    houseApartment: "",
    petCareArrangement: "",
    reasonForAdoption: "",
    pet: pet._id,
    user: user?._id,
  });

  const [step, setStep] = useState(1);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAdoptPet = (e) => {
    e.preventDefault();
    adoptAPetApi(formData)
      .then((res) => {
        if (res.data.success) {
          toast.success("Adoption request submitted successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
        } else {
          toast.error("Failed to submit the adoption request. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      })
      .catch(() => {
        toast.error("An error occurred while submitting the request.", {
          position: "top-center",
          autoClose: 3000,
        });
      });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <ToastContainer /> {/* Toast Container for pop-up messages */}
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm"></div>
      <div
        className="relative bg-white p-8 rounded-lg shadow-lg"
        style={{
          width: "850px",
          height: "700px",
          fontFamily: "Poppins",
          border: "2px solid black",
          borderRadius: "25px",
          overflowY: "auto",
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-center w-full">
            Application Form
          </h2>
          <button
            onClick={close}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-around items-center mb-8">
          {["Verify", "Personal Data", "More Info"].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`rounded-full flex items-center justify-center ${
                  step > index ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                }`}
                style={{
                  width: "60px",
                  height: "60px",
                  fontSize: "20px",
                }}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm mt-2 ${
                  step > index ? "text-blue-500" : "text-gray-500"
                }`}
                style={{ fontSize: "16px" }}
              >
                {item}
              </span>
              {index < 2 && (
                <div
                  className={`h-1 w-24 ${
                    step > index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName || ""}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">
                  Have you owned a pet before?
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ownedPetBefore"
                      value="Yes"
                      checked={formData.ownedPetBefore === "Yes"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="ownedPetBefore"
                      value="No"
                      checked={formData.ownedPetBefore === "No"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700">
                  Do you currently own a pet?
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="haveAPet"
                      value="Yes"
                      checked={formData.haveAPet === "Yes"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="haveAPet"
                      value="No"
                      checked={formData.haveAPet === "No"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700">
                  Does your parents/landlord allow you to own a pet?
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="permissionPet"
                      value="Yes"
                      checked={formData.permissionPet === "Yes"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="permissionPet"
                      value="No"
                      checked={formData.permissionPet === "No"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Where do you live?</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="houseApartment"
                      value="House"
                      checked={formData.houseApartment === "House"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    House
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="houseApartment"
                      value="Apartment"
                      checked={formData.houseApartment === "Apartment"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    Apartment
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="houseApartment"
                      value="Rent"
                      checked={formData.houseApartment === "Rent"}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    Rent
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-gray-700">Enter your email</label>
              <div className="flex items-center border border-gray-300 rounded p-2">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="text-gray-500 mr-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none"
                />
              </div>

              <label className="block text-gray-700">
                Why do you want to adopt the pet?
              </label>
              <textarea
                name="reasonForAdoption"
                placeholder="Why do you want to adopt the pet?"
                value={formData.reasonForAdoption}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
                rows={4}
              ></textarea>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <textarea
              name="petCareArrangement"
              value={formData.petCareArrangement}
              onChange={handleChange}
              placeholder="What precautions will you take for the safety of the pet?"
              className="w-full border border-gray-300 p-3 rounded"
            ></textarea>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <label>I agree to all the terms and conditions</label>
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={handleAdoptPet}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyPage;
