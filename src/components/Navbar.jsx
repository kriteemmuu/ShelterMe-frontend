// import {
//   faCartArrowDown,
//   faPersonCircleQuestion,
//   faRightFromBracket,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Disclosure,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   Transition,
// } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import LoginModal from "../pages/Login";
// import RegisterModal from "../pages/Register";

// const navigation = [
//   { name: "Adopt", href: "/adopt", current: false },
//   { name: "Donate", href: "/donate", current: false },
//   { name: "Event", href: "/event", current: false },
//   { name: "Contact", href: "/contact", current: false },
//   { name: "Story", href: "/story", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();
//   const [cartCount, setCartCount] = useState(() => {
//     const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     return savedCart.length;
//   });

//   const logout = (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     navigate("/");
//     toast.success("Logged out successfully");
//   };
//   const location = useLocation();
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

//   const openLoginModal = () => {
//     setIsLoginModalOpen(true);
//     setIsSignupModalOpen(false);
//   };

//   const closeLoginModal = () => {
//     setIsLoginModalOpen(false);
//   };

//   const openSignupModal = () => {
//     setIsSignupModalOpen(true);
//     setIsLoginModalOpen(false);
//   };

//   const closeSignupModal = () => {
//     setIsSignupModalOpen(false);
//   };

//   return (
//     <Disclosure as="nav" className="bg-white border-b border-gray-300 fixed w-full z-50" style={{ fontFamily: "Poppins" }}>
//       {({ open }) => (
//         <>
//           <div className="relative mx-auto w-full max-w-screen-xl h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8">
//             <div className="absolute left-[-70px] top-[12px] flex-shrink-0">
//               <Link to="/home">
//                 <img
//                   className="h-16 w-auto"
//                   src="/assets/images/logosa.jpeg"
//                   alt="logo here"
//                 />
//               </Link>
//             </div>
//             <div className="hidden md:flex md:space-x-12 absolute left-[140px] top-[28px]">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={classNames(
//                     location.pathname === item.href
//                       ? "text-[#1d1f8d] font-semibold"
//                       : "text-gray-800 hover:text-[#1d1f8d]",
//                     "px-3 py-2 text-lg font-medium"
//                   )}
//                   style={{
//                     fontSize: "25px",
//                     fontWeight: "500",
//                   }}
//                   aria-current={location.pathname === item.href ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//             <div className="hidden md:flex md:items-center md:space-x-4 absolute right-[-60px] top-[28px]">
//               {/* Add to Cart Icon */}
//               <Link
//                 to="/cart"
//                 className="relative text-gray-700 hover:text-gray-900"
//                 style={{ fontSize: "25px" }}
//               >
//                 <FontAwesomeIcon icon={faCartArrowDown} />
//                 {/* Badge for cart items count */}
//                 <span
//                   className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full"
//                   style={{ fontSize: "12px" }}
//                 >
//                   {cartCount}
//                 </span>
//               </Link>

//               {user ? (
//                 <div className="flex items-center space-x-4">
//                   <Menu as="div" className="relative">
//                     <MenuButton className="flex rounded-full bg-orange text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <img
//                         className="rounded-circle"
//                         src={user?.userImageUrl || "/assets/images/user.png"}
//                         alt=""
//                         style={{ width: "40px", height: "40px" }}
//                       />
//                     </MenuButton>
//                     <Transition
//                       enter="transition ease-out duration-100"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <MenuItem>
//                           {({ active }) => (
//                             <Link
//                               to={`/profile/${user._id}`}
//                               className={classNames(
//                                 active ? "bg-[#FFA500]" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Profile
//                             </Link>
//                           )}
                        
//                         </MenuItem>
//                         <MenuItem>
//                           {({ active }) => (
//                             <Link
//                               to={`/changePassword/${user._id}`}
//                               className={classNames(
//                                 active ? "bg-[#FFA500]" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Reset Password
//                             </Link>
//                           )}
//                         </MenuItem>
//                         <MenuItem>
//                           {({ active }) => (
//                             <button
//                               onClick={logout}
//                               className={classNames(
//                                 active ? "bg-[#FFA500]" : "",
//                                 "block px-4 py-2 text-sm text-gray-700 w-full text-left"
//                               )}
//                             >
//                               Logout
//                             </button>
//                           )}
//                         </MenuItem>
//                       </MenuItems>
//                     </Transition>
//                   </Menu>
//                   <div className="ml-2">
//                     <span className="block text-sm font-medium text-gray-900">Hello!</span>
//                     <span className="block text-sm font-medium text-gray-500">{user?.fullName}</span>
//                   </div>
//                   <Link
//                     to="/donate"
//                     className="bg-[#F24E1E] text-white px-4 py-2 rounded-lg"
//                     style={{
//                       backgroundColor: "#EA9E1A",
//                       color: "#FFFFFF",
//                       width: "115px",
//                       height: "41px",
//                       fontSize: "15px",
//                       fontWeight: "bold",
//                       borderRadius: "10px",
//                       fontFamily: "Poppins",
//                       border: "none",
//                       transition: "background-color 500ms ease, border 500ms ease",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       position: "relative",
//                       left: "10px",
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.backgroundColor = "#D58A17";
//                       e.target.style.border = "2px solid black";
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.backgroundColor = "#EA9E1A";
//                       e.target.style.border = "none";
//                     }}
//                   >
//                     Donor
//                   </Link>
//                 </div>
//               ) : (
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={openLoginModal}
//                     className="bg-white text-black border border-solid border-gray-300 px-4 py-2 rounded-lg"
//                     style={{
//                       color: "#000",
//                       border: "2px solid #000",
//                       fontSize: "15px",
//                       fontWeight: "bold",
//                       borderRadius: "10px",
//                       fontFamily: "Poppins",
//                       padding: "8px 20px",
//                       textAlign: "center",
//                       textDecoration: "none",
//                       transition: "background-color 500ms ease, border 500ms ease, color 500ms ease",
//                       width: "115px",
//                       height: "41px",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       position: "relative",
//                       left: "10px",
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.backgroundColor = "#FFA500";
//                       e.target.style.border = "none";
//                       e.target.style.color = "#FFFFFF";
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.backgroundColor = "transparent";
//                       e.target.style.border = "2px solid #000";
//                       e.target.style.color = "#000000";
//                     }}
//                   >
//                     Login
//                   </button>
//                   <LoginModal
//                     isOpen={isLoginModalOpen}
//                     onClose={closeLoginModal}
//                     onOpenSignup={openSignupModal}
//                   />
//                   <RegisterModal
//                     isOpen={isSignupModalOpen}
//                     onClose={closeSignupModal}
//                     onOpenLogin={openLoginModal}
//                   />
//                   <Link
//                     to="/donate"
//                     className="bg-[#F24E1E] text-white px-4 py-2 rounded-lg"
//                     style={{
//                       backgroundColor: "#EA9E1A",
//                       color: "#FFFFFF",
//                       width: "115px",
//                       height: "41px",
//                       fontSize: "15px",
//                       fontWeight: "bold",
//                       borderRadius: "10px",
//                       fontFamily: "Poppins",
//                       border: "none",
//                       transition: "background-color 500ms ease, border 500ms ease",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       position: "relative",
//                       left: "10px",
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.backgroundColor = "#D58A17";
//                       e.target.style.border = "2px solid black";
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.backgroundColor = "#EA9E1A";
//                       e.target.style.border = "none";
//                     }}
//                   >
//                     Donor
//                   </Link>
//                 </div>
//               )}
//             </div>
//             <div className="flex items-center md:hidden absolute top-7 right-4">
//               <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                 <span className="sr-only">Open main menu</span>
//                 {open ? (
//                   <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                 ) : (
//                   <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                 )}
//               </Disclosure.Button>
//             </div>
//           </div>

//           <Disclosure.Panel className="md:hidden">
//             <div className="px-0 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as={Link}
//                   to={item.href}
//                   className={classNames(
//                     location.pathname === item.href
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-800 hover:bg-gray-700 hover:text-white",
//                     "block px-3 py-2 rounded-md text-base font-medium"
//                   )}
//                   aria-current={location.pathname === item.href ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {user ? (
//                 <div className="space-y-1">
//                   <Disclosure.Button
//                     as={Link}
//                     to={`/profile/${user._id}`}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
//                   >
//                     Profile
//                   </Disclosure.Button>
//                   <Disclosure.Button
//                     as={Link}
//                     to={`/changePassword/${user._id}`}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
//                   >
//                     Reset Password
//                   </Disclosure.Button>
//                   <Disclosure.Button
//                     onClick={logout}
//                     className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
//                   >
//                     Logout
//                   </Disclosure.Button>
//                 </div>
//               ) : (
//                 <div className="space-y-1">
//                   <Disclosure.Button
//                     onClick={openLoginModal}
//                     className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
//                   >
//                     Login
//                   </Disclosure.Button>
//                   <Disclosure.Button
//                     as={Link}
//                     to="/donate"
//                     className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white"
//                     style={{
//                       backgroundColor: "#EA9E1A",
//                       color: "#FFFFFF",
//                     }}
//                     onMouseOver={(e) => {
//                       e.target.style.backgroundColor = "#D58A17";
//                     }}
//                     onMouseOut={(e) => {
//                       e.target.style.backgroundColor = "#EA9E1A";
//                     }}
//                   >
//                     Donor
                    
//                   </Disclosure.Button>
//                 </div>
//               )}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
import {
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useState } from "react";
import { toast } from "react-toastify";
import LoginModal from "../pages/Login";
import RegisterModal from "../pages/Register";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Adopt", href: "/adopt", current: false },
  { name: "Donate", href: "/donate", current: false },
  { name: "Event", href: "/event", current: false },
  { name: "Contact", href: "/contact", current: false },
  { name: "Story", href: "/story", current: false },
  { name: "Products", href: "/products", current: false },

];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  // const [cartCount, setCartCount] = useState(() => {
  //   const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  //   return savedCart.length;
  // });

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    toast.success("Logged out successfully");
  };
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  return (
    <Disclosure as="nav" className="bg-white border-b border-gray-300 fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="font-sans relative mx-auto w-full max-w-screen-xl h-24 flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="absolute left-[-70px] top-[12px] flex-shrink-0">
              <Link to="/home">
                <img
                  className="h-16 w-auto"
                  src="/assets/images/logosa.jpeg"
                  alt="logo here"
                />
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-12 absolute left-[140px] top-[28px]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    location.pathname === item.href
                      ? "text-[#1d1f8d] font-semibold"
                      : "text-gray-800 hover:text-[#1d1f8d]",
                    "px-3 py-2 text-lg font-medium"
                  )}
              
                  aria-current={location.pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4 absolute right-[-60px] top-[28px]">
              <Link
                to="/my-cart"
                className="relative text-gray-700 hover:text-gray-900"
                style={{ fontSize: "25px" }}
              >
                <FontAwesomeIcon icon={faCartArrowDown} />
                <span
                  className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full"
                  style={{ fontSize: "12px" }}
                >
                  {/* {cartCount} */}0
                </span>
              </Link>

              {user ? (
                <div className="flex items-center space-x-4">
                  <Menu as="div" className="relative">
                    <MenuButton className="flex rounded-full bg-orange text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800">
                      <img
                        className="rounded-circle"
                        src={user?.userImageUrl || "/assets/images/user.png"}
                        alt=""
                        style={{ width: "40px", height: "40px" }}
                      />
                    </MenuButton>
                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to={`/profile/${user._id}`}
                              className={classNames(
                                active ? "bg-[#FFA500]" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Profile
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to={`/changePassword/${user._id}`}
                              className={classNames(
                                active ? "bg-[#FFA500]" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Reset Password
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <button
                              onClick={logout}
                              className={classNames(
                                active ? "bg-[#FFA500]" : "",
                                "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                              )}
                            >
                              Logout
                            </button>
                          )}
                        </MenuItem>
                      </MenuItems>
                    </Transition>
                  </Menu>
                  <div className="ml-2">
                    <span className="block text-sm font-medium text-gray-900">Hello!</span>
                    <span className="block text-sm font-medium text-gray-500">{user?.fullName}</span>
                  </div>
                  <Link
                    to="/donar"
                    className="bg-[#F24E1E] text-white px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: "#EA9E1A",
                      color: "#FFFFFF",
                      width: "115px",
                      height: "41px",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      transition: "background-color 500ms ease, border 500ms ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      left: "10px",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#D58A17";
                      e.target.style.border = "2px solid black";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#EA9E1A";
                      e.target.style.border = "none";
                    }}
                  >
                    Donor
                  </Link>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <button
                    onClick={openLoginModal}
                    className="bg-white text-black border border-solid border-gray-300 px-4 py-2 rounded-lg"
                    style={{
                      color: "#000",
                      border: "2px solid #000",
                      fontSize: "15px",
                      borderRadius: "10px",
                      padding: "8px 20px",
                      textAlign: "center",
                      textDecoration: "none",
                      transition: "background-color 500ms ease, border 500ms ease, color 500ms ease",
                      width: "115px",
                      height: "41px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      left: "10px",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#FFA500";
                      e.target.style.border = "none";
                      e.target.style.color = "#FFFFFF";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.border = "2px solid #000";
                      e.target.style.color = "#000000";
                    }}
                  >
                    Login
                  </button>
                  <LoginModal
                    isOpen={isLoginModalOpen}
                    onClose={closeLoginModal}
                    onOpenSignup={openSignupModal}
                  />
                  <RegisterModal
                    isOpen={isSignupModalOpen}
                    onClose={closeSignupModal}
                    onOpenLogin={openLoginModal}
                  />
                  <Link
                    to="/donar"
                    className="bg-[#F24E1E] text-white px-4 py-2 rounded-lg"
                    style={{
                      backgroundColor: "#EA9E1A",
                      color: "#FFFFFF",
                      width: "115px",
                      height: "41px",
                      fontSize: "15px",
                      borderRadius: "10px",
                      border: "none",
                      transition: "background-color 500ms ease, border 500ms ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      left: "10px",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#D58A17";
                      e.target.style.border = "2px solid black";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "#EA9E1A";
                      e.target.style.border = "none";
                    }}
                  >
                    Donor
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
