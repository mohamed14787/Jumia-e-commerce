import { Rating } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import UpperBar from "./upperBar";
import shoes1 from "../Assets/shoes 1.png";
import shoes2 from "../Assets/Shoes 2.png";
import shoes3 from "../Assets/Shoes 3.png";
import shoes4 from "../Assets/Shoes 4.png";
import ItemSlider from "./itemSlider";

function ProductDetails() {
  const shoesSizes = [6, 7, 8, 9, 10, 11, 12];

  const customTheme = {
    tablist: {
      pills: {
        active: {
          on: "bg-red-500 hover:bg-red-600",
          off: "bg-red-200",
        },
      },
    },
  };
  return (
    <div>
      <UpperBar />

      <Flowbite theme={{ customTheme }}>
        <div
          style={{
            display: "flex",

            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 2.2,
              flexDirection: "column",
              gap: "3px",
              display: "flex",
              overflowY: "scroll",
              height: "90vh",
            }}
          >
            <div
              style={{ display: "flex", flex: "1", width: "50%", gap: "3px" }}
            >
              <img src={shoes1} alt="shoes1" />
              <img src={shoes2} alt="shoes2" />
            </div>

            <div
              style={{
                display: "flex",
                flex: "1",
                width: "50%",
                gap: "3px",
                marginBottom: "10%",
              }}
            >
              <img src={shoes3} alt="shoes3" />
              <img src={shoes4} alt="shoes4" />
            </div>

            <div
              style={{
                width: "100%",
                height: "auto", // Set to auto or specific height
              }}
            >
              <ItemSlider />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              paddingLeft: "3%",
              paddingTop: "2%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              maxHeight: "90vh",
              overflowY: "auto", // To ensure scrolling for long content
            }}
          >
            {/* Rating Section */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%", // Ensure it takes full width for proper alignment
              }}
            >
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                  4.95 out of 5
                </p>
              </Rating>
            </div>

            {/* Product Title and Description */}
            <h1>Product Name</h1>
            <h2>Product Description</h2>
            <h3>Price: $100</h3>
            <h4>Available Sizes:</h4>

            {/* Available Sizes */}
            <div style={{ gap: "15px", outline: "none" }}>
              <Tabs aria-label="Pills" variant="underline">
                {shoesSizes.map((size) => (
                  <Tabs.Item key={size} title={`Size ${size}`}>
                    <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                  </Tabs.Item>
                ))}
              </Tabs>
            </div>

            {/* Add to Cart Button */}
            <button
              style={{
                outline: "none",
                padding: "10px 20px",
                marginTop: "20px",
              }}
            >
              Add to Cart
            </button>

            {/* Product Details */}
            <h1>Product Details</h1>
          </div>
        </div>
      </Flowbite>
    </div>
  );
}

export default ProductDetails;
