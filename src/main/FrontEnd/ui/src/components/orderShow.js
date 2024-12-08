import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

function OrderShow() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      <Card
        renderImage={() => (
          <img
            width={200}
            height={300}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="image 1"
          />
        )}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "row",
          width: "900px",
          gap: "20px",
        }}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest
        </p>
      </Card>

      <Card
        renderImage={() => (
          <img
            width={200}
            height={300}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="image 1"
          />
        )}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "row",
          width: "900px",
          gap: "20px",
        }}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest
        </p>
      </Card>
      <Card
        renderImage={() => (
          <img
            width={200}
            height={300}
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="image 1"
          />
        )}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "start",
          flexDirection: "row",
          width: "900px",
          gap: "20px",
        }}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest
        </p>
      </Card>
    </div>
  );
}

export default OrderShow;
