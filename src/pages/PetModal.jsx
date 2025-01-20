
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import useAuthCheck from "../components/IsAuthenticated";
// import VerifyPage from "./VerifyPage";

// const PetModal = ({ isOpen, onClose, pet }) => {
//   const [isAdoptModalOpen, setIsAdoptModalOpen] = useState(false);

//   const verifyAuthBeforeAction = useAuthCheck();

//   const openAdoptModal = () => {
//     verifyAuthBeforeAction(() => setIsAdoptModalOpen(true));
//   };

//   const closeAdoptModal = () => {
//     setIsAdoptModalOpen(false);
//   };

//   if (!isOpen || !pet) return null;

//   return (
//     <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="bg-white w-full max-w-[1102px] rounded-lg shadow-xl border-2 border-black" style={{ borderRadius: '25px' }}>
//         <div className="relative p-2">
//           <button
//             title="Close Modal"
//             onClick={onClose}
//             className="absolute"
//             style={{ top: '29px', right: '27px', fontSize: '1.8rem', color: 'black' }}
//           >
//             <FontAwesomeIcon icon={faTimes} />
//           </button>
//         </div>
//         <div className="flex">
//           <div className="w-1/2 p-4">
//             <img
//               src={
//                 pet.petImageUrlOne ??
//                 pet.petImageUrlTwo ??
//                 pet.petImageUrlThree ??
//                 pet.petImageUrlFour ??
//                 pet.petImageUrlFive
//               }
//               alt="Kali"
//               className="rounded-lg"
//               style={{ width: '480.75px', height: '335px' }}
//             />
//             <div className="grid grid-cols-3 gap-3 mt-3">
//               <img
//                 src={pet.petImageUrlOne ?? pet.petImageUrlFive}
//                 alt={"imageOne"}
//                 className="object-cover rounded"
//                 style={{ width: '135.95px', height: '141.9px', borderRadius: '25px' }}
//               />
//               <img
//                 src={pet.petImageUrlTwo ?? pet.petImageUrlFive}
//                 alt={"imageTwo"}
//                 className="object-cover rounded"
//                 style={{ width: '135.95px', height: '141.9px', borderRadius: '25px' }}
//               />
//               <img
//                 src={pet.petImageUrlThree ?? pet.petImageUrlFive}
//                 alt={"imageThree"}
//                 className="object-cover rounded"
//                 style={{ width: '135.95px', height: '141.9px', borderRadius: '25px' }}
//               />
//             </div>
//           </div>
//           <div className="w-1/2 p-4">
//             <div className="mb-4 space-y-[17px]">
//               <p>
//                 <strong>Type:</strong> Cat
//               </p>
//               <p>
//                 <strong>Name:</strong> {pet.fullName}
//               </p>
//               {pet.petGender && (
//                 <p>
//                   <strong>Gender:</strong> {pet?.gender}
//                 </p>
//               )}
//               {pet.petAge && (
//                 <p>
//                   <strong>Age:</strong> {pet.petAge}
//                 </p>
//               )}
//               <p>
//                 <strong>Condition:</strong> {pet.condition}
//               </p>
//               <p>
//                 <strong>Uploaded by:</strong> {pet.fullName}
//               </p>
//               <a
//                 href={pet.petFileUrl}
//                 className="text-blue-600 visited:text-purple-600"
//               >
//                 {"pdf file"}
//               </a>
//             </div>
//             <div className="space-y-[17px]">
//               <p>
//                 <strong>Purpose:</strong> {pet.purpose}
//               </p>
//               <p>
//                 <strong>Address:</strong> {pet.address}
//               </p>
//               <p>{pet.description}</p>
//             </div>
//             <div className="flex w-full flex-row pt-5">
//               <Link
//                 onClick={(e) => {
//                   e.preventDefault();
//                   openAdoptModal();
//                 }}
//                 className="w-full border-1 border-black text-center text-white font-extrabold py-2 px-4 rounded"
//                 style={{ 
//                   width: '500px', 
//                   height: '58px', 
//                   fontSize: '22px',
//                   backgroundColor: "#FF8534",
//                   border: "none",
//                   transition: "background-color 500ms ease, border 500ms ease",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
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
//               {isAdoptModalOpen && (
//                 <VerifyPage
//                   isOpen={isAdoptModalOpen}
//                   pet={pet}
//                   close={closeAdoptModal}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PetModal;
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuthCheck from "../components/IsAuthenticated";
import VerifyPage from "./VerifyPage";

const PetModal = ({ isOpen, onClose, pet }) => {
  const [isAdoptModalOpen, setIsAdoptModalOpen] = useState(false);
  console.log(pet)

  const verifyAuthBeforeAction = useAuthCheck();

  const openAdoptModal = () => {
    verifyAuthBeforeAction(() => setIsAdoptModalOpen(true));
  };

  const closeAdoptModal = () => {
    setIsAdoptModalOpen(false);
  };

  if (!isOpen || !pet) return null;

  const petType = pet.petType?.toLowerCase();
  const petSpecificDetails =
    petType === "dog"
      ? {
          behavior: pet.behavior || "Friendly",
          breed: pet.breed || "Mixed Breed",
        }
      : petType === "cat"
      ? {
          temperament: pet.temperament || "Calm",
          furLength: pet.furLength || "Short",
        }
      : {};

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
      <div
        className="bg-white w-full max-w-[1102px] rounded-lg shadow-xl border border-gray-300"
        style={{
          borderRadius: "25px",
          padding: "20px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Close Button */}
        <div className="relative p-2">
          <button
            title="Close Modal"
            onClick={onClose}
            className="absolute"
            style={{
              top: "10px",
              right: "15px",
              fontSize: "1.5rem",
              color: "#555",
              transition: "color 300ms ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#000")}
            onMouseOut={(e) => (e.target.style.color = "#555")}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 p-4">
            <img
              src={
                pet.petImageUrlOne ||
                pet.petImageUrlTwo ||
                pet.petImageUrlThree ||
                pet.petImageUrlFour ||
                pet.petImageUrlFive
              }
              alt={pet.fullName || "Pet Image"}
              className="rounded-lg w-full"
              style={{ height: "350px", objectFit: "cover" }}
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[pet.petImageUrlOne, pet.petImageUrlTwo, pet.petImageUrlThree]
                .filter((url) => url)
                .map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`image${index + 1}`}
                    className="rounded-lg object-cover"
                    style={{
                      width: "100%",
                      height: "100px",
                      border: "2px solid #f3f3f3",
                    }}
                  />
                ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 p-4">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {pet.fullName || "Pet Name"}
              </h2>
              <p className="text-gray-600">{pet.description || "No description available."}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
              <p>
                <strong>Type:</strong> {pet.petType || "Unknown"}
              </p>
              <p>
                <strong>Gender:</strong> {pet.petGender || "Not Specified"}
              </p>
              <p>
                <strong>Age:</strong> {pet.petAge || "Unknown"}
              </p>
              <p>
                <strong>Condition:</strong> {pet.condition || "Healthy"}
              </p>
              <p>
                <strong>Uploaded by:</strong> {pet.uploadedBy || "Anonymous"}
              </p>
              <p>
                <strong>Purpose:</strong> {pet.purpose || "Adoption"}
              </p>
              <p>
                <strong>Address:</strong> {pet.address || "Not Provided"}
              </p>
            </div>

            {petType === "dog" && (
              <div className="mt-4 text-gray-700">
                <p>
                  <strong>Behavior:</strong> {petSpecificDetails.behavior}
                </p>
                <p>
                  <strong>Breed:</strong> {petSpecificDetails.breed}
                </p>
              </div>
            )}

            {petType === "cat" && (
              <div className="mt-4 text-gray-700">
                <p>
                  <strong>Temperament:</strong> {petSpecificDetails.temperament}
                </p>
                <p>
                  <strong>Fur Length:</strong> {petSpecificDetails.furLength}
                </p>
              </div>
            )}

            <a
              href={pet.petFileUrl}
              className="text-blue-600 visited:text-purple-600 text-sm mt-3 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Details (PDF)
            </a>

            <div className="mt-6">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  openAdoptModal();
                }}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Adopt
              </Link>
              {isAdoptModalOpen && (
                <VerifyPage
                  isOpen={isAdoptModalOpen}
                  pet={pet}
                  close={closeAdoptModal}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetModal;
