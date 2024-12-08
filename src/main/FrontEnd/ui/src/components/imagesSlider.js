import outfit1 from "../Assets/outfit 1.png";
import outfit2 from "../Assets/outfit 2.png";
import outfit3 from "../Assets/outfit 3.png";
import outfit4 from "../Assets/outfit 4.png";
import outfit5 from "../Assets/outfit 5.png";
import outfit6 from "../Assets/outfit 6.png";
import outfit7 from "../Assets/outfit 7.png";

function ImagesSlider() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          gap: "20px",
          paddingBottom: "5%",
        }}
      >
        <img
          src={outfit1}
          alt="..."
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={outfit2}
          alt="..."
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={outfit3}
          alt="..."
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={outfit4}
          alt="..."
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={outfit5}
          alt="..."
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={outfit6}
          alt="..."
          style={{ width: "400px", height: "auto" }}
        />
        <img
          src={outfit7}
          alt="..."
          style={{ width: "400px", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default ImagesSlider;
