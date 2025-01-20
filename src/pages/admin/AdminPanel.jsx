// import { faSignOut } from "@fortawesome/free-solid-svg-icons";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import CustomFaIcons from "../../components/CustomFaIcons";
// import "../../style/AdminPanel.css";
// import AdminDashBoard from "./admin_dashboard/AdminDashboard";
// import Adopt from "./AdoptManagement";
// import ContactManagement from "./ContactManagement";
// import Donate from "./Donate";
// import EventManagenent from "./EventManagement";
// import OrderManagement from "./OrderManagement";
// import ProductCategory from "./ProductCategory";
// import ProductManagement from "./ProductManagement";
// import StoryManagement from "./StoryManagement";

// function AdminPanel() {
//   const storedPage = localStorage.getItem("currentPage");
//   // Initialize the current page with the stored value or the default value
//   const initialPage = storedPage || "Product";

//   const users = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     navigate("/");
//     window.location.reload();
//   };
//   // Use state to keep track of the current page
//   const [currentPage, setCurrentPage] = useState(initialPage);
//   const [isLogoutModalOpen, setLogoutIsModalOpen] = useState(false);
//   const openLogoutModal = () => setLogoutIsModalOpen(true);
//   const closeLogoutModal = () => setLogoutIsModalOpen(false);

//   let content;
//   switch (currentPage) {
//     case "Product":
//       content = <ProductManagement />;
//       break;
//     case "Product Category":
//       content = <ProductCategory />;
//       break;
//     case "OrderManagement":
//       content = <OrderManagement />;
//       break;
//     case "Adopt":
//       content = <Adopt />;
//       break;
//     case "Donate":
//       content = <Donate />;
//       break;
//     case "Event":
//       content = <EventManagenent />;
//       break;
//     case "StoryManagement":
//       content = <StoryManagement />;
//       break;
//     case "ContactManagement":
//       content = <ContactManagement />;
//       break;
//     default: {
//       content = <AdminDashBoard />;
//     }
//   }
//   useEffect(() => {
//     localStorage.setItem("currentPage", currentPage);
//   }, [currentPage]);

//   return (
//     <>
//       <div className="adminMainContainer">
//         <header className="adminHeader">
//           <div>{users?.isAdmin ? "Admin Panel" : "Organization Panel"}</div>
//           {
//             <div className="d-flex flex-row align-items-center gap-3">
//               <h6 className="m-0 me-2">Welcome, {users?.username}</h6>
//               <button onClick={openLogoutModal} className="logoutBtn">
//                 <CustomFaIcons icon={faSignOut} className={"m-0 me-2"} />
//               </button>
//             </div>
//           }
//         </header>
//         <div className="adminWrapper">
//           <ul className="adminUl z-50">
//             <li
//               className={`adminLi ${currentPage === "Product" ? "active" : ""}`}
//             >
//               <button onClick={() => setCurrentPage("Product")} tabIndex="2">
//                 Product Management
//               </button>
//             </li>

//             <li
//               className={`adminLi ${
//                 currentPage === "Product Category" ? "active" : ""
//               }`}
//             >
//               <button
//                 onClick={() => setCurrentPage("Product Category")}
//                 tabIndex="9"
//               >
//                 Product Category
//               </button>
//             </li>

//             <li
//               className={`adminLi ${currentPage === "OrderManagement" ? "active" : ""}`}
//             >
//               <button onClick={() => setCurrentPage("OrderManagement")} tabIndex="3">
//                 OrderManagement
//               </button>
//             </li>
//             <li
//               className={`adminLi ${currentPage === "Adopt" ? "active" : ""}`}
//             >
//               <button onClick={() => setCurrentPage("Adopt")} tabIndex="4">
//                 Adoption Management
//               </button>
//             </li>
//             <li
//               className={`adminLi ${currentPage === "Donate" ? "active" : ""}`}
//             >
//               <button onClick={() => setCurrentPage("Donate")} tabIndex="5">
//                 Donate
//               </button>
//             </li>
//             <li
//               className={`adminLi ${currentPage === "Event" ? "active" : ""}`}
//             >
//               <button onClick={() => setCurrentPage("Event")} tabIndex="6">
//                 Event
//               </button>
//             </li>
//             <li
//               className={`adminLi ${currentPage === "StoryManagement" ? "active" : ""}`}
//             >
//               <button onClick={() => setCurrentPage("StoryManagement")} tabIndex="7">
//                 StoryManagement
//               </button>
//             </li>
//             <li
//               className={`adminLi ${currentPage === "ContactManagement" ? "active" : ""}`}
//             >
//               <button onClick={() => setCurrentPage("ContactManagement")} tabIndex="8">
//                 Contact Management
//               </button>
//             </li>
//           </ul>
//           <main className="mt-4">
//             {content}
//             {isLogoutModalOpen && (
//               <div
//                 className="fixed inset-0 flex items-center justify-center bg-opacity-20 overflow-y-auto h-full w-full"
//                 id="my-modal"
//               >
//                 <div className="relative mx-auto p-4 border  shadow-sm w-1/4 rounded-md bg-white space-y-8 justify-center items-center flex flex-col">
//                   <h6 className="font-medium w-3/4 mx-auto text-center">
//                     <img
//                       className="mb-2"
//                       src="/assets/images/sure_about_that.jpg"
//                       alt=""
//                     />
//                     Are you sure to logout ?
//                   </h6>
//                   <div className="flex flex-wrap items-center justify-between m-0 w-full">
//                     <button
//                       onClick={handleLogout}
//                       className="w-1/3 text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center py-2.5"
//                     >
//                       Yes, Logout !!
//                     </button>
//                     <button
//                       type="submit"
//                       className="w-1/3 text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5"
//                       onClick={closeLogoutModal}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdminPanel;

import {
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomFaIcons from "../../components/CustomFaIcons";
import "../../style/AdminPanel.css";
import AdminDashBoard from "./admin_dashboard/AdminDashboard";
import Adopt from "./AdoptManagement";
import ContactManagement from "./ContactManagement";
import Donate from "./Donate";
import EventManagenent from "./EventManagement";
import OrderManagement from "./OrderManagement";
import ProductCategory from "./ProductCategory";
import ProductManagement from "./ProductManagement";
import StoryManagement from "./StoryManagement";

function AdminPanel() {
  const storedPage = localStorage.getItem("currentPage");
  const initialPage = storedPage || "Product";

  const users = JSON.parse(localStorage.getItem("user"));
  console.log(users)
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isLogoutModalOpen, setLogoutIsModalOpen] = useState(false);
  const openLogoutModal = () => setLogoutIsModalOpen(true);
  const closeLogoutModal = () => setLogoutIsModalOpen(false);

  let content;
  switch (currentPage) {
    case "Product":
      content = <ProductManagement />;
      break;
    case "Product Category":
      content = <ProductCategory />;
      break;
    case "OrderManagement":
      content = <OrderManagement />;
      break;
    case "Adopt":
      content = <Adopt />;
      break;
    case "Donate":
      content = <Donate />;
      break;
    case "Event":
      content = <EventManagenent />;
      break;
    case "StoryManagement":
      content = <StoryManagement />;
      break;
    case "ContactManagement":
      content = <ContactManagement />;
      break;
    default:
      content = <AdminDashBoard />;
  }

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-1/4 bg-[#E6F1FF] shadow-lg">
        <header className="p-6 bg-[#1D1F8D] text-white font-bold text-center">
          {users?.isAdmin ? "Admin Panel" : "Organization Panel"}
        </header>
        <ul className="mt-4 space-y-2">
          {[
            { label: "Product Management", key: "Product" },
            { label: "Product Category", key: "Product Category" },
            { label: "Order Management", key: "OrderManagement" },
            { label: "Adoption Management", key: "Adopt" },
            { label: "Donate", key: "Donate" },
            { label: "Event", key: "Event" },
            { label: "Story Management", key: "StoryManagement" },
            { label: "Contact Management", key: "ContactManagement" },
          ].map((item) => (
            <li
              key={item.key}
              className={`py-2 px-4 cursor-pointer text-lg font-medium ${
                currentPage === item.key
                  ? "bg-[#EA9E1A] text-white"
                  : "text-gray-800 hover:bg-[#D6E9FF]"
              }`}
              onClick={() => setCurrentPage(item.key)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {currentPage.replace(/([A-Z])/g, " $1").trim()}
          </h1>
          <div className="flex items-center gap-3">
            <span className="text-gray-600">Welcome, {users?.fullName}</span>
            <button
              onClick={openLogoutModal}
              className="text-gray-600 hover:text-white hover:bg-[#EA9E1A] p-2 rounded-full"
            >
              <CustomFaIcons icon={faSignOut} />
            </button>
          </div>
        </header>
        <div>{content}</div>
      </main>

      {/* Logout Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-lg space-y-4 text-center">
            <h3 className="text-lg font-bold">Confirm Logout</h3>
            <p className="text-gray-600">Are you sure you want to logout?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
              <button
                onClick={closeLogoutModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
