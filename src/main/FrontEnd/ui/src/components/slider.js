import { Carousel } from "flowbite-react";
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
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
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
