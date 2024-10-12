import logo from "./logo.svg";
import "./App.css";

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
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
      <header className="App-header">
        <h1>Categories</h1>
        <ul>
          {categories.map((category) => (
            <li>
              <div>{category.name}</div>
              <div>{category.description}</div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
