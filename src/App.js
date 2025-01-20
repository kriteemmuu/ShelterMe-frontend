import React from "react";
import { Route, BrowserRouter as Router, Routes,Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import AdminPanel from "./pages/admin/AdminPanel";
import Adopt from "./pages/Adopt";
import Donate from "./pages/admin/Donate";
import Faq from "./pages/Faq";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import TermsAndConditions from "./pages/Terms";
import Profile from "./pages/user/Profile";
import AllEvents from "./pages/AllEvents";
import MyPetRequests from "./pages/user/MyPetRequest";
import Footers from "./components/Footers";
import MyCart from "./pages/user/MyCart";
import PasswordForgot from "./pages/PasswordForgot";
import NewPassword from "./pages/NewPassword";
import LoginModal from "./pages/Login";
import UpdatedPasswords from "./pages/PasswordNew";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import PaymentPage from "./pages/user/PaymentPage";
import MyOrders from "./pages/user/MyOrders";
import DetailPage from "./pages/user/DetailPage";
import Contact from "./pages/Contact";
import Story from "./pages/user/Story";
import PrivacyPolicy from "./pages/user/PrivacyPolicy";
import OurServices from "./pages/user/OurServices";
import StorySlider from "./components/StorySlider";
import Donar from "./pages/user/Donar";
import './index.css'; 


const ProtectedRoute = ({ isAdmin, children }) => {
  if (!isAdmin) {
    
    return <Navigate to="/home" replace />;
  }

  
  return children;
};
function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <ToastContainer />
      {user?.isAdmin ? null : <Navbar />}

      <Routes>
      <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute isAdmin={user?.isAdmin}>
              <AdminPanel />
            </ProtectedRoute>
          }
        />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/my-cart" element={<MyCart />} />
        <Route path="/terms-and-condition" element={<TermsAndConditions />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<AllEvents />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/pet-req/:id" element={<MyPetRequests />} />
        <Route path="/my-orders/:id" element={<MyOrders />} />
        <Route path = "/reset_password/:token" element ={<NewPassword/>} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancel />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/changePassword/:id" element={<UpdatedPasswords />} />
        <Route path="/passwordForget" element={<PasswordForgot />} />
        <Route path="/details/:id" element={<DetailPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/services" element={<OurServices/>}/>
        <Route path="/story" element={<StorySlider/>}/>
        <Route path="/donar" element={<Donar/>}/>
      </Routes>
      {user?.isAdmin ? null : <Footers />}
    </Router>
  );
}

export default App;
