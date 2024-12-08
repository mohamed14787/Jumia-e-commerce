import { Carousel } from "flowbite-react";
import ItemCard from "./itemCard";
import carousal1 from "../Assets/carousel 1.jpeg";
import carousal2 from "../Assets/carousel 2.jpeg";
import carousal3 from "/Users/mohamedelshaarawy/Desktop/Jumia e-commerce/src/main/FrontEnd/ui/src/Assets/Carousal 3.png";
function Slider() {
  return (
    <div
      style={{
        marginLeft: "3%",
        marginRight: "3%",
        marginBottom: "20px",
      }}
    >
      <div
        className="h-56 sm:h-64 xl:h-80 2xl:h-96 "
        style={{ height: "60vh" }}
      >
        <Carousel slideInterval={5000}>
          <img src={carousal1} alt="..." />
          <img src={carousal2} alt="..." />
          <img src={carousal3} alt="..." />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
