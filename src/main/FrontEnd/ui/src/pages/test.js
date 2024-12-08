import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Button } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { Footer } from "flowbite-react";
import { Card } from "flowbite-react";
import { Timeline } from "flowbite-react";

import OrderShow from "../components/orderShow";
import OrderPage from "./orderPage";
import Slider from "../components/slider";
import UpperBar from "../components/upperBar";
import ItemCard from "../components/itemCard";
import ItemSlider from "../components/itemSlider";
import Story from "../components/story";
import ImagesSlider from "../components/imagesSlider";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import adidasLogo from "/Users/mohamedelshaarawy/Desktop/Jumia e-commerce/src/main/FrontEnd/ui/src/Assets/ADIDAS LOGO.jpg";

var url = "http://localhost:9090/";

function Test() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9090/api/public/categories")
      .then((response) => {
        console.log(response.data); // Make sure to log the actual data
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []); // The empty array ensures the effect runs once after the component mounts

  return (
    <div className="App">
      <div>
        <UpperBar />

        <Slider />
        <ItemSlider />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "30px",
            margin: "80px",
          }}
        ></div>

        <ImagesSlider />

        <Story />
        <ItemCard />

        <Footer container>
          <div className="w-full">
            <div className="grid w-full justify-around sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <Footer.Brand
                  alt="ADIDAS Logo"
                  src={adidasLogo}
                  className="mr-3 h-6 sm:h-9"
                  style={{ width: "75px", height: "65px", marginLeft: "10px" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>

                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <Footer.Copyright href="#" by="Adidas™" year={2024} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="#" icon={BsGithub} />
                <Footer.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </Footer>
      </div>
    </div>
  );
}

export default Test;
