import { Searchbar } from "../components/searchbar";
import E1 from "../assets/E1.jpg";
import E2 from "../assets/E2.jpg";
import E3 from "../assets/E3.jpg";
import E4 from "../assets/E4.jpg";
import E5 from "../assets/E5.jpg";
import E6 from "../assets/E6.jpg";
import E7 from "../assets/E7.jpg";
import { CiCircleCheck } from "react-icons/ci";
import { Col, Row, Container } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

export function Explore() {
  const navigate = useNavigate();
  const images = [
    {
      img: E1,
      title: "In your girl group era",
      subtitle: "KATSEYE",
    },
    {
      img: E2,
      title: "Pickleballers's aesthetic",
      subtitle: "Cute on court",
    },
    {
      img: E3,
      title: "Relatable travel memes",
      subtitle: "Get,set,giggle",
    },
    {
      img: E4,
      title: "Cute storage ideas",
      subtitle: "Practical,but preety",
    },
    {
      img: E5,
      title: "Main character college prep",
      subtitle: "Shine brighter",
    },
    {
      img: E6,
      title: "Scarf styling ideas",
      subtitle: "Chic Summer",
    },
    {
      img: E7,
      title: "Micro fruit nails",
      subtitle: "Trending now",
    },
  ];

  return (
    <>
      <div className="bg-light min-vh-100 position-relative">
        {/* Searchbar at Top */}
        <Searchbar />

        {/* Absolute Centered Overlay Text */}
        <div
          className="position-absolute top-0  translate-middle-x text-center"
          style={{
            marginTop: "80px",
            zIndex: 2,
            marginLeft: "600px",
          }}
        >
          <div>
            <h5>
              {new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </h5>
            <h2 className="fw-bold">Stay Inspired</h2>
          </div>

          {/* Image Grid Section */}
          <Container className="pt-0 mt-5 mx-5 ">
            <Row className="d-flex justify-content-center mt-5 gx-3 mx-5">
              {images.map((image, id) => (
                <Col
                  xs={12}
                  md={6}
                  key={id}
                  className="d-flex  mb-4"
                  // style={{maxWidth:"100%"}}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "850px",
                      height: "300px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={image.img}
                      alt={`Explore ${id}`}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "30px",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.4)",
                        borderRadius: "30px",
                        zIndex: 1,
                        color: "white",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "20px",
                      }}
                    >
                      <small>{image.subtitle}</small>
                      <h5
                        style={{
                          fontWeight: 800,
                          margin: 0,
                        }}
                      >
                        {image.title}
                      </h5>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
          <div
            className=" d-flex flex-column "
            style={{ marginTop: "100px", marginLeft: "60px" }}
          >
            <CiCircleCheck
              size={40}
              style={{
                fontWeight: 1200,
                marginLeft: "500px",
                marginBottom: "20px",
              }}
            />
            <p>That's all for today!</p>
            <h5>
              <strong>Come back tomorrow for more inspiration</strong>
            </h5>
            <button
              className="border border-1"
              style={{
                color: "black",
                backgroundColor: "#d4d2d2ff",
                fontSize: "15px",
                width: "150px",
                borderRadius: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
                marginLeft: "450px",
                marginTop: "20px",
                marginBottom: "100px",
              }}
              onClick={() => navigate("/NewHome")}
            >
              Go to home feed
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
