import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./LandingPage/Home/HomePage";
import "react-toastify"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "./LandingPage/About/AboutPage";
import ProductPage from "./LandingPage/Products/ProductPage";
import PricingPage from "./LandingPage/Pricing/PricingPage";
import SupportPage from "./LandingPage/Support/SupportPage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import NotFound from "./LandingPage/NotFound";
import Login from "./LandingPage/User/Login";
import SignUp from "./LandingPage/User/SignUp";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/signup" element={<SignUp />} />
      <Route path="/user/login" element={<Login />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
    <Footer />
  </BrowserRouter>
);
