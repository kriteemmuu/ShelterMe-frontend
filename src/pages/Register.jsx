import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserApi } from "../apis/Api";

const RegisterModal = ({ isOpen, onClose, onOpenLogin }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const [fnameerror, setFullnameError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [cpassworderror, setCpasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleTermsChange = (e) => {
    setTerms(e.target.checked);
    if (e.target.checked) {
      setTermsError("");
    }
  };

  const Validate = () => {
    let isValid = true;
    setFullnameError("");
    setEmailError("");
    setPasswordError("");
    setCpasswordError("");
    if (fullName.trim() === "") {
      setFullnameError("Name is Required");
      isValid = false;
    }
    if (email.trim() === "") {
      setEmailError("Email is Required");
      isValid = false;
    }
    if (email.trim() !== "" && !email.includes("@")) {
      setEmailError("Invalid Email");
      isValid = false;
    }
    if (password.trim() === "") {
      setPasswordError("Password is Required");
      isValid = false;
    }
    if (confirmPassword.trim() === "") {
      setCpasswordError("Password does not match");
      isValid = false;
    }
    if (password.trim() !== confirmPassword.trim()) {
      setCpasswordError("Password does not match");
      isValid = false;
    }
    if (!terms) {
      setTermsError("Please agree to terms and conditions");
      isValid = false;
    }
    return isValid;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const isValid = Validate();
    if (!isValid) return;

    const data = new FormData();
    data.append("fullName", fullName);
    data.append("email", email);
    data.append("password", password);
    data.append("confirmPassword", confirmPassword);

    createUserApi(data)
      .then((res) => {
        if (res.data.success === false) {
          toast.error(res.data.message);
        } else {
          onClose();
          onOpenLogin();
          toast.success(res.data.message);
        }
      })
      .catch(() => {
        toast.error("Server Error");
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 backdrop-blur-sm">
      <div
        className="bg-white rounded-lg shadow-lg flex border border-black"
        style={{ width: "1102px", height: "711px", borderRadius: "25px" }}
      >
        <div className="w-1/2 p-4">
          <img
            src="assets/images/logosa.jpeg"
            alt="Shelter Me"
            className="h-full w-full object-cover rounded-l-lg"
            style={{ borderRadius: "20px" }}
          />
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-center">
          <h2
            className="text-2xl font-bold text-gray-800 mb-6 text-center"
            style={{
     
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            Create an Account
          </h2>
          <form className="space-y-4">
            {/* Full Name Input */}
            <div className="relative">
              <span
                className="absolute top-1/2 transform -translate-y-1/2 left-8"
                style={{ top: "55%" }}
              >
                <FontAwesomeIcon icon={faUser} className="text-gray-950" />
              </span>
              <input
                placeholder="Full Name"
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pl-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-100"
                style={{
               
                  height: "62px",
                  borderRadius: "10px",
                  fontSize: "16px",
                }}
              />
              {fnameerror && (
                <p className="text-danger mt-1">
                  {fnameerror}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <span
                className="absolute top-1/2 transform -translate-y-1/2 left-8"
                style={{ top: "55%" }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-950" />
              </span>
              <input
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-100"
                style={{

                  height: "62px",
                  borderRadius: "10px",
                  fontSize: "16px",
                }}
              />
              {emailerror && (
                <p className="text-danger mt-1">
                  {emailerror}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <span
                className="absolute top-1/2 transform -translate-y-1/2 left-8"
                style={{ top: "55%" }}
              >
                <FontAwesomeIcon icon={faLock} className="text-gray-950" />
              </span>
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-100"
                style={{
                
                  height: "62px",
                  borderRadius: "10px",
                  fontSize: "16px",
                }}
              />
              {passworderror && (
                <p className="text-danger mt-1">
                  {passworderror}
                </p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <span
                className="absolute top-1/2 transform -translate-y-1/2 left-8"
                style={{ top: "55%" }}
              >
                <FontAwesomeIcon icon={faLock} className="text-gray-950" />
              </span>
              <input
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pl-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-100"
                style={{
        
                  height: "62px",
                  borderRadius: "10px",
                  fontSize: "16px",
                }}
              />
              {cpassworderror && (
                <p className="text-danger mt-1">
                  {cpassworderror}
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <input
                onChange={handleTermsChange}
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700"
               
              >
                I agree to the{" "}
                <Link
                  to="/terms-and-condition"
                  className="text-blue-800 hover:underline"
                >
                  terms and conditions
                </Link>
              </label>
            </div>
            {termsError && (
              <p className="text-danger mt-1">
                {termsError}
              </p>
            )}

            {/* Sign Up Button */}
            <button
              type="button"
              onClick={handleRegister}
              className="w-full text-gray-800 font-bold py-2 border border-gray-300 rounded-md focus:outline-none bg-gray-100 hover:bg-gray-200"
              style={{
              
                height: "62px",
                borderRadius: "10px",
                fontSize: "22px",
              }}
            >
              Sign Up
            </button>

            {/* Already a Member */}
            <p
              className="text-center mt-4 text-sm text-gray-700"
             
            >
              Already a member?{" "}
              <Link
                onClick={onOpenLogin}
                className="text-blue-800 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
