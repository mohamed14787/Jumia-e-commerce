import { Card } from "flowbite-react";

function ItemCard() {
  return (
    <Card
      style={{ width: "200px", height: "300px" }}
      renderImage={() => (
        <img
          width={200}
          height={300}
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="image 1"
        />
      )}
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
