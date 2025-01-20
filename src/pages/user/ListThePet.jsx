import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addpetApi } from "../../apis/Api";

const ListThePet = ({ isOpen, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [ownership, setOwnership] = useState("found");
  const [isLoading, setIsLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petGender, setPetGender] = useState("");
  const [condition, setCondition] = useState("");
  const [purpose, setPurpose] = useState("");
  const [description, setDescription] = useState("");
  const [petImageUrlOne, setPetImageUrlOne] = useState(null);
  const [petImageUrlTwo, setPetImageUrlTwo] = useState(null);
  const [petImageUrlThree, setPetImageUrlThree] = useState(null);
  const [petImageUrlFour, setPetImageUrlFour] = useState(null);
  const [petImageUrlFive, setPetImageUrlFive] = useState(null);
  const [petFileUrl, setPetFileUrl] = useState(null);
  const [previewImageOne, setPreviewImageOne] = useState("");
  const [previewImageTwo, setPreviewImageTwo] = useState("");
  const [previewImageThree, setPreviewImageThree] = useState("");
  const [previewImageFour, setPreviewImageFour] = useState("");

  const handleCloseClick = (e) => {
    e.stopPropagation();
    console.log("close");
    onClose();
  };

  const handleImageUploadOne = (event) => {
    const file = event.target.files[0];
    setPetImageUrlOne(file);
    setPreviewImageOne(URL?.createObjectURL(file));
  };

  const handleImageUploadTwo = (event) => {
    const file = event.target.files[0];
    setPetImageUrlTwo(file);
    setPreviewImageTwo(URL?.createObjectURL(file));
  };

  const handleImageUploadThree = (event) => {
    const file = event.target.files[0];
    setPetImageUrlThree(file);
    setPreviewImageThree(URL?.createObjectURL(file));
  };

  const handleImageUploadFour = (event) => {
    const file = event.target.files[0];
    setPetImageUrlFour(file);
    setPreviewImageFour(URL?.createObjectURL(file));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPetFileUrl(file);
    }
  };

  const handleFoundSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("number", phoneNumber);
    formData.append("address", address);
    formData.append("petType", petType);
    formData.append("condition", condition);
    formData.append("purpose", purpose);
    formData.append("description", description);
    formData.append("petImageUrlOne", petImageUrlOne);
    formData.append("petImageUrlTwo", petImageUrlTwo);
    formData.append("petImageUrlThree", petImageUrlThree);
    formData.append("petImageUrlFour", petImageUrlFour);
    formData.append("status", "found");
    formData.append("user", user._id);
    addpetApi(formData)
      .then((res) => {
        console.log(res);
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          onClose();
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOwnSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("number", phoneNumber);
    formData.append("address", address);
    formData.append("petType", petType);
    formData.append("petAge", petAge);
    formData.append("petGender", petGender);
    formData.append("condition", condition);
    formData.append("purpose", purpose);
    formData.append("description", description);
    formData.append("petImageUrlOne", petImageUrlOne);
    formData.append("petImageUrlTwo", petImageUrlTwo);
    formData.append("petImageUrlThree", petImageUrlThree);
    formData.append("petImageUrlFour", petImageUrlFour);
    formData.append("petFileUrl", petFileUrl);
    formData.append("user", user._id);

    formData.append("status", "own");

    addpetApi(formData)
      .then((res) => {
        console.log(res);
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          onClose();
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleOwnershipChange = (status) => {
    setOwnership(status);
    resetForm();
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setPetType("");
    setPetAge("");
    setPetGender("");
    setCondition("");
    setPurpose("");
    setDescription("");
    setPetImageUrlOne(null);
    setPetImageUrlTwo(null);
    setPetImageUrlThree(null);
    setPetImageUrlFour(null);
    setPetImageUrlFive(null);
    setPetFileUrl(null);
    setPreviewImageOne("");
    setPreviewImageTwo("");
    setPreviewImageThree("");
    setPreviewImageFour("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white mt-16 p-6 rounded-lg shadow-lg max-w-4xl w-full overflow-hidden">
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-xl text-left font-bold">Application Form</h2>
          <Link
            className="bg-red-600 hover:bg-red-800 rounded-md px-3 py-1"
            onClick={handleCloseClick}
          >
            <FontAwesomeIcon icon={faClose} />
          </Link>
        </div>
        <div className="flex flex-row justify-end mb-4">
          <div className="flex flex-row border-1 gap-2 rounded-lg p-1 border-gray-700">
            <button
              className={`px-4 py-2 rounded ${
                ownership === "found" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleOwnershipChange("found")}
            >
              I found the pet
            </button>
            <button
              className={`px-4 py-2 rounded ${
                ownership === "own" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleOwnershipChange("own")}
            >
              I own the pet
            </button>
          </div>
        </div>
        <div className="max-h-[70vh] overflow-y-auto">
          {ownership === "found" ? (
            <form onSubmit={handleFoundSubmit}>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="input bg-gray-100 p-2 rounded border"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <h1 className="col-span-3 font-bold"> Pet Information </h1>
                <input
                  type="text"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  placeholder="Type"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="text"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  placeholder="Condition"
                  className="input bg-gray-100 p-2 rounded border"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea
                  rows={4}
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  placeholder="Purpose"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  className="input bg-gray-100 p-2 rounded border"
                />
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2 col-span-3">Other Information</h3>
                <label className="flex flex-row">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadOne}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                  "
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadTwo}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadThree}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                  "
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadFour}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                  "
                  />
                </label>
                <div className="flex flex-row gap-16">
                  {previewImageOne && (
                    <div className="mt-4 h-20 w-1/4">
                      <img
                        src={previewImageOne}
                        alt=""
                        className="rounded-md"
                      />
                    </div>
                  )}

                  {previewImageTwo && (
                    <div className="mt-4 h-20 w-1/4">
                      <img
                        src={previewImageTwo}
                        alt=""
                        className="rounded-md"
                      />
                    </div>
                  )}

                  {previewImageThree && (
                    <div className="mt-4 w-1/4">
                      <img
                        alt=""
                        src={previewImageThree}
                        className="rounded-md"
                      />
                    </div>
                  )}

                  {previewImageFour && (
                    <div className="mt-4 w-1/4">
                      <img
                        alt=""
                        src={previewImageFour}
                        className="rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full flex flex-row justify-left mt-16">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-48 rounded"
                >
                  {isLoading ? (
                    <CircularProgress color={"inherit"} size={20} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleOwnSubmit}>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input bg-gray-100 p-2 rounded border"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <h3 className="font-bold col-span-3">Pet Information</h3>
                <input
                  type="text"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  placeholder="Type"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="number"
                  value={petAge}
                  onChange={(e) => setPetAge(e.target.value)}
                  placeholder="Age"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="text"
                  value={petGender}
                  onChange={(e) => setPetGender(e.target.value)}
                  placeholder="Gender"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <input
                  type="text"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  placeholder="Condition"
                  className="input bg-gray-100 p-2 rounded border"
                />
                <textarea
                  placeholder="Purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  rows={3}
                  className="input bg-gray-100 p-2 col-span-3 rounded border"
                ></textarea>
                <textarea
                  rows={3}
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="input bg-gray-100 p-2 col-span-3 rounded border"
                ></textarea>
              </div>
              <div className="mb-4">
                <h3 className="font-bold mb-2 col-span-3">Other Information</h3>
                <label className="flex flex-row">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadOne}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                  "
                  />

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadTwo}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadThree}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                  "
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUploadFour}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100
                  "
                  />
                </label>
                <div className="flex flex-row gap-16">
                  {previewImageOne && (
                    <div className="mt-4 w-1/4">
                      <img
                        src={previewImageOne}
                        alt=""
                        className="rounded-md"
                      />
                    </div>
                  )}

                  {previewImageTwo && (
                    <div className="mt-4 w-1/4">
                      <img
                        src={previewImageTwo}
                        alt=""
                        className="rounded-md"
                      />
                    </div>
                  )}

                  {previewImageThree && (
                    <div className="mt-4 w-1/4">
                      <img
                        alt=""
                        src={previewImageThree}
                        className="rounded-md"
                      />
                    </div>
                  )}

                  {previewImageFour && (
                    <div className="mt-4 w-1/4">
                      <img
                        alt=""
                        src={previewImageFour}
                        className="rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>
              <label className="block mb-2">
                <span className="sr-only">Choose Photo:</span>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileUpload}
                  className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100
                "
                />
              </label>
              <div className="w-full flex flex-row justify-left mt-16">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-48 rounded"
                >
                  {isLoading ? (
                    <CircularProgress color={"inherit"} size={20} />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListThePet;
