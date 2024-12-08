import { Card } from "flowbite-react";
import adidasLogo from "/Users/mohamedelshaarawy/Desktop/Jumia e-commerce/src/main/FrontEnd/ui/src/Assets/ADIDAS LOGO.jpg";
import shoessample from "/Users/mohamedelshaarawy/Desktop/Jumia e-commerce/src/main/FrontEnd/ui/src/Assets/Forum_Low_Shoes_White_FY7756_01_standard.avif";

function ItemCard() {
  return (
    <Card
      renderImage={() => (
        <img
          height="auto"
          src={shoessample}
          alt="image 1"
          style={{ minWidth: "100px", maxWidth: "400px", flex: "1 1 200px" }}
        />
      )}
      style={{ minWidth: "100px", maxWidth: "400px", flex: "1 1 200px" }}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest
      </p>
    </Card>
  );
}

export default ItemCard;
