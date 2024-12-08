import { Carousel, Button } from "flowbite-react";
import ItemCard from "./itemCard";
import { useState } from "react";
export default function ItemSlider() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleHover = (index) => {
    setHoveredIndex(index);
  };
  return (
    <div
      style={{
        overflowX: "auto", // Allow horizontal scrolling
        display: "flex", // Ensure a single row
        gap: "40px", // Spacing between cards
        padding: "10px",

        height: "auto", // Set a fixed height
      }}
    >
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
      <div
        style={{
          flex: "0 0 calc((100% - 3 * 40px) / 4)", // Four cards per view, dynamically calculated
          maxWidth: "400px", // Limit card maximum size
          minWidth: "200px", // Set a minimum card size
        }}
      >
        <ItemCard />
      </div>
    </div>
  );
}
