import logo from "./logo.svg";
import "./App.css";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Button } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { Footer } from "flowbite-react";
import { Card } from "flowbite-react";
import { Timeline } from "flowbite-react";

import AddProductPage from "./pages/addProductPage";
import Test from "./pages/test";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import adidasLogo from "/Users/mohamedelshaarawy/Desktop/Jumia e-commerce/src/main/FrontEnd/ui/src/Assets/ADIDAS LOGO.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "./components/productDetails";

var url = "http://localhost:9080/";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/addProduct" element={<AddProductPage />} />
        <Route path="/productDetails" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
