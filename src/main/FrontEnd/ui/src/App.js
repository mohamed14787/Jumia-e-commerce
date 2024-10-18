import logo from "./logo.svg";
import "./App.css";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { Button } from "flowbite-react";
import { ListGroup } from "flowbite-react";
import { Footer } from "flowbite-react";
import { Card } from "flowbite-react";

import UpperBar from "./components/upperBar";

import Slider from "./components/slider";
import ItemCard from "./components/itemCard";

var url = "http://localhost:9090/";

function App() {
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
      <div
        style={{
          position: "fixed",
          top: "40%",
          right: "0",
          transform: "rotate(270deg)",
          transformOrigin: "right bottom",
          zIndex: "100",
        }}
      >
        <Button
          outline
          gradientDuoTone="purpleToPink"
          style={{ outline: "none" }}
        >
          FEEDBACK
        </Button>
      </div>
      <UpperBar />
      <Slider />
      <ItemCard />

      <div className="flex justify-center">
        <ListGroup>
          {categories.map((category) => (
            <ListGroup.Item key={category.id} className="text-black bg-white">
              {category.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Button>Click me</Button>
      </div>

      <div>
        <Footer container></Footer>
        <Footer container>
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </Footer>
      </div>
    </div>
  );
}

export default App;
