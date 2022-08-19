import { Carousel } from "react-bootstrap";
import pen1 from "../../public/imgs/pen1.jpeg";
import pen2 from "../../public/imgs/pen2.jpeg";
import pen3 from "../../public/imgs/pen3.jpeg";
import penImg from "../../public/imgs/pen_img.png";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const navigateToStore = () => {
    navigate("/store");
  };

  return (
    <section>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginBottom: "1rem", gap: "5rem" }}
      >
        <div
          style={{
            height: "400px",
            width: "200px",
          }}
        >
          <img
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
            src={penImg}
            alt=""
          ></img>
        </div>
        <div>
          <h1>Find The Perfect Pen</h1>
          <h4>We sell writing instruments for generations</h4>
          <Button
            variant="outline-dark"
            size="lg"
            className="mt-4"
            onClick={navigateToStore}
          >
            Shop
          </Button>
        </div>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover" }}
            height={700}
            className="d-block w-100"
            src={pen1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Write</h3>
            <p>Your writing experience is as important as story itself</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover" }}
            height={700}
            className="d-block w-100"
            src={pen2}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Journal</h3>
            <p>Help yourself with organization</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ objectFit: "cover" }}
            height={700}
            className="d-block w-100"
            src={pen3}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Enjoy</h3>
            <p>Treat yourself with a nice pen</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
