import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserApi } from "../apis/Api";

const LoginModal = ({ isOpen, onClose, onOpenSignup }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");

  const Validate = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
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
    return isValid;
  };

  const loginNow = (e) => {
    e.preventDefault();
    const isValid = Validate();
    if (!isValid) return;

    const loginData = new FormData();
    loginData.append("email", email);
    loginData.append("password", password);
    loginUserApi(loginData)
      .then((res) => {
        if (!res.data.success) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          localStorage.setItem("token", res.data.userData);
          const jsonDecode = JSON.stringify(res.data.userData);
          localStorage.setItem("user", jsonDecode);
          const userr = res.data.userData;
          onClose();
          navigate("/");
          if (!userr.isAdmin) {
            navigate("/");
          } else {
            navigate("/admin-dashboard");
            window.location.reload();
          }
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.error(err.message);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 backdrop-blur-sm">
      <div
        className="bg-white rounded-lg shadow-lg flex border border-black"
        style={{ width: "1102px", height: "711px", borderRadius: "25px" }}
      >
        <div className="w-2/2 p-4">
          <img
            src="assets/images/pages.jpeg"
            alt="Adopt Me"
            className="h-full w-full object-cover rounded-l-lg"
            style={{ borderRadius: "40px" }}
          />
        </div>
        <div className="w-1/2 p-6 relative">
          <button
            onClick={onClose}
            className="absolute"
            style={{
              top: "29px",
              right: "27px",
              fontSize: "3.2rem",
              color: "black",
            }}
          >
            &times;
          </button>
          <h2
            className="text-2xl font-bold text-gray-800 mb-4"
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "175px",
            }}
          >
            Welcome to <span style={{ color: "#EA9E1A" }}>ShelterMe</span>{" "}
            <span style={{ color: "#EA9E1A" }}>!!</span>
          </h2>
          <form>
            <div className="mb-4">
              <div className="relative">
                <span
                  className="absolute top-1/2 transform -translate-y-1/2 left-8"
                  style={{ top: "55%" }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-950"
                  />
                </span>
                <input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-16 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-100"
                  style={{
                    color: "black",
                    width: "431px",
                    height: "62px",
                    borderRadius: "10px",
                    fontSize: "16px",
                  }}
                />
              </div>
              {emailerror && <p className="text-danger">{emailerror}</p>}
            </div>
            <div className="mb-4">
              <div className="relative">
                <span
                  className="absolute top-1/2 transform -translate-y-1/2 left-8"
                  style={{ top: "55%" }}
                >
                  <FontAwesomeIcon icon={faLock} className="text-gray-950" />
                </span>
                <input
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full pl-16 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 bg-gray-100"
                  style={{
                    color: "black",
                    width: "431px",
                    height: "62px",
                    borderRadius: "10px",
                    fontSize: "16px",
                  }}
                />
              </div>
              {passworderror && <p className="text-danger">{passworderror}</p>}
            </div>
            <div className="flex items-center justify-between mb-4">
              <a
                href="/passwordForget"
                className="inline-block align-baseline font-bold text-sm text-black hover:text-[#004AAD] hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="flex flex-col items-start gap-3">
              <button
                className="w-full text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-gray-300 bg-gray-100 hover:bg-gray-200"
                type="button"
                onClick={loginNow}
                style={{
                  width: "431px",
                  height: "62px",
                  borderRadius: "10px",
                  fontSize: "22px",
                  fontWeight: "800",
                  transition: "background-color 300ms ease",
                }}
              >
                Login
              </button>
              <p
                className="inline-block align-baseline font-bold text-sm text-black"
                style={{ fontSize: "16px", fontWeight: "400" }}
              >
                Not a member?{" "}
                <Link
                  onClick={() => {
                    onClose();
                    onOpenSignup();
                  }}
                  style={{ color: "#EA9E1A", textDecoration: "none" }}
                  className="hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
