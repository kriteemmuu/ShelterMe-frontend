import StorySlider from "../components/StorySlider";
import {
  faAngleLeft,
  faAngleRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import PetModal from "./PetModal";
import { getAllPetsApi } from "../apis/Api";

const PetCard = ({ pet, openPetModal }) => (
  <div
    className="border rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-105"
    onClick={() => openPetModal(pet)}
  >
    <img
      src={pet.petImageUrlOne}
      alt={`${pet.address}`}
      className="w-full h-[200px] object-cover rounded-t-lg"
    />
    <div className="px-4 py-3">
      <span className="flex flex-row items-center">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="text-gray-600 text-xl"
        />
        <p className="ml-2 font-medium text-gray-800">{pet.address}</p>
      </span>
      <span className="flex flex-row">
        <p className="font-bold text-lg text-gray-900">{pet.petType ?? pet.email}</p>
      </span>
    </div>
  </div>
);


const Adopt = () => {
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);
      try {
        const response = await getAllPetsApi();
        console.log(response)
        setPets(response.data.allPets); 
      } catch (error) {
        console.error("Error fetching pets:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const [search, setSearch] = useState("");

  const openPetModal = (pet) => {
    console.log(pet)
    setSelectedPet(pet);
    setSelectedPet(pet);
    setIsPetModalOpen(true);
  };

  const closePetModal = () => {
    setIsPetModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  

  const filteredPets = pets.filter((pet) =>
    search === "" || pet.address?.toLowerCase().includes(search.toLowerCase())
  );

  const stories = [
    {
      storyImageUrl: "/assets/images/husky.png",
      story: "Rocky found his forever home with a loving family and enjoys a happy life.",
    },
    {
      storyImageUrl: "/assets/images/LabRetriever.jpg",
      story: "Buddy is now a joyful member of a new household, spreading smiles everywhere.",
    },
    {
      storyImageUrl: "/assets/images/german.webp",
      story: "Max found a perfect home and now loves playing in the garden.",
    },
  ];

  return (
    <>
      {/* StorySlider Component */}
      <div className="p-5 bg-white">
        <h2 className="text-center text-4xl font-bold mb-5 text-white">
          Heartwarming Adoption Stories
        </h2>
        <StorySlider stories={stories} />
        <p className="text-center text-white mt-4 text-lg">
          These inspiring stories showcase the joy and transformation adoption brings to both pets and families. Be a part of creating more happy endings.
        </p>
      </div>

      {/* Adoption Page */}
      <div className="bg-gray-50 min-h-screen p-5">
        <div className="container mx-auto px-4 bg-gray-50">
          <h1 className="text-[46px] font-semibold text-center mb-1">
            Give Every Pet a Chance at Happiness. <br />
            <span style={{ color: "#EA9E1A" }}>Find Your Forever Friend!</span> 
          </h1>
          <p className="text-center mt-4 text-[16px] mb-4">
            Together, we can make a difference in the lives of animals. <br />
            <span className="font-bold">Rescue, rehabilitate, and rehome</span>{" "}
            pets in need. Thank you for being a part of our mission to create a
            loving community for all.
          </p>
          <div className="flex my-8 w-full justify-between items-center">
            <div className="flex-1 w-2/5 mr-2">
              <input
                type="text"
                placeholder="Search for a location or pet"
                value={search}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 border rounded bg-gray-50"
              />
            </div>
            <div className="flex w-3/5">
              <select className="border rounded w-1/4 py-2 px-4 mr-2 bg-gray-50">
                <option value="">Location</option>
                <option value="Kathmandu">Kathmandu</option>
                <option value="Lalitpur">Lalitpur</option>
                <option value="Bhaktapur">Bhaktapur</option>
              </select>
              <select className="border rounded w-1/4 py-2 px-4 mr-2 bg-gray-50">
                <option value="">Type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
              <select className="border rounded w-1/4 py-2 px-4 mr-2 bg-gray-50">
                <option value="">Age</option>
                <option value="Puppy">Puppy</option>
                <option value="Adult">Adult</option>
              </select>
              <select className="border rounded w-1/4 py-2 px-4 bg-gray-50">
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-50">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} openPetModal={() => openPetModal(pet)} />
          ))}
        </div>
        <PetModal
          isOpen={isPetModalOpen}
          onClose={closePetModal}
          pet={selectedPet}
        />
        <div className="flex justify-center mt-8 bg-gray-50">
          <div className="flex rounded-md border-2 border-black">
            <a
              href="#"
              className="py-2 px-4 leading-tight text-gray-500 bg-gray-50 rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight text-white bg-[#004AAD] border-r-2 border-l-2 border-black hover:text-gray-700"
            >
              1
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight text-gray-500 bg-gray-50 rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adopt;
