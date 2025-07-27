import { AboutNav } from "../components/aboutNav";
import pin from "../assets/pinImage.png";
import { FaPinterest } from "react-icons/fa6";
import { FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Carding } from "../components/cards";
import { Card } from "react-bootstrap";
import pin2 from "../assets/pin2.jpg";
import { Nav, Navbar } from "react-bootstrap";
import l1 from "../assets/l1.jpg";
import l2 from "../assets/l2.jpg";
import l3 from "../assets/l3.jpg";
import l4 from "../assets/l4.jpg";
import { useState } from "react";
import { PiNumberSquareOne } from "react-icons/pi";
import { PiNumberSquareTwoLight } from "react-icons/pi";
import { PiNumberSquareThreeLight } from "react-icons/pi";
import { AboutFooter } from "../components/aboutFooter";

export function About() {
  const [isOpen, setIsOpen] = useState(false);

  const cards = [
    {
      views: "150 million",
      active: "monthly Active users",
    },
    {
      views: "1.5 billion",
      active: " pins saved every week",
    },
    {
      views: "More than 50%",
      active: "of users think of pintrest as place to shop",
    },
  ];

  const leaders = [{ img: l1 }, { img: l2 }, { img: l3 }, { img: l4 }];

  return (
    <>
      <div className="position-relative">
        <AboutNav />
        <div
          className="d-flex  align-items-center justify-content-center mx-5 mb-5   text-center "
          style={{
            height: "80vh",
            lineHeight: "1.5rem",
            paddingTop: "9rem",
            marginTop: "4.5em",
          }}
        >
          <h1
            className="mx-5"
            style={{
              width: "60%",
              fontSize: "75px",
              fontWeight: "760",
              lineHeight: "1em",
              wordSpacing: "0.1px",
            }}
          >
            Get inspired{" "}
            <img src={pin} alt="pin" width={"100px"} height={"80px"}></img>
            <br />
            Then get started <FcOk style={{ color: "lightgreen" }} />
            <br />
            All on <FaPinterest style={{ color: "red" }} /> Pinterest
          </h1>
        </div>
        <div
          className="d-flex-direction-column align-items-center justify-content-start mx-5 mb-5 text-center"
          style={{ paddingLeft: "180px", paddingRight: "270px" }}
        >
          <div style={{ width: "9vw" }}>
            <p style={{ fontSize: "15px", paddingLeft: "0", marginLeft: "0" }}>
              <b>About Pintrest</b>
            </p>
          </div>
          <h1
            style={{
              fontWeight: 760,
              textAlign: "left",
              lineHeight: "1.2",
              fontSize: "45px",
              paddingBottom: "40px",
            }}
          >
            Pinterest is a visual search and discovery platform where people
            find inspiration, curate ideas, and shop products — all in a
            positive place online. Headquartered in San Francisco, Pinterest
            launched in 2010 and has over half a billion monthly active users
            worldwide.
          </h1>
          <button
            style={{
              color: "white",
              background: "black",
              fontSize: "20px",
              fontWeight: 440,
              display: "flex",
              justifyContent: "flex-start",
              padding: "12px 20px",
              borderRadius: "20px",
            }}
            className={`pb-3 pt-3 px-3 mt-4 rounded-pill`}
          >
            Visit Pinterest
          </button>
        </div>
        <div
          className="d-flex flex-wrap justify-content-evenly align-items-center my-5"
          style={{ minHeight: "200px", padding: "30px", paddingTop: "145px" }}
        >
          {cards.map((card, index) => (
            <Carding key={index} views={card.views} active={card.active} />
          ))}
        </div>
        <div className="d-flex justified-content-start  align-items-center">
          <div
            className=" px-5  "
            style={{
              marginLeft: "100px",
              marginRight: "50px",
              paddingBottom: "60px",
            }}
          >
            <Navbar
              style={{
                fontSize: "17px",
                fontWeight: 500,
                textAlign: "center",
                marginLeft: "80px",
              }}
              className="d-flex justify-content-start gap-3"
            >
              <Nav.Item>
                <Nav.Link>Impact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>people</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Product</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Planet</Nav.Link>
              </Nav.Item>
            </Navbar>

            <h1
              style={{
                fontWeight: 700,
                fontSize: "45px",
                textAlign: "center",
                marginRight: "50px",
                marginTop: "20px",
              }}
            >
              <b>A more inspired internet. A better world.</b>
              <span style={{ color: "lightgreen" }}> It’s Possible.</span>
            </h1>
            <p
              style={{
                fontSize: "20px",
                fontWeight: 600,
                textAlign: "center",
                paddingLeft: "20px",
                marginRight: "95px",
                paddingTop: "20px",
                lineHeight: "1.3rem",
                wordSpacing: "0.1rem",
              }}
            >
              We’re building a more positive place online. A place that inspires
              the people we serve and protects the planet we share.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{
                  color: "white",
                  background: "black",
                  fontSize: "18px",
                  fontWeight: 440,
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  alignItems: "center",
                }}
                className="pb-2 pt-2 px-3 mt-4 rounded-pill mx-5"
              >
                Explore impact
              </button>
            </div>
          </div>
          <div className="px-5">
            <img src={pin2} alt="pin2" height={"520vh"}></img>
          </div>
        </div>
        <div
          className="d-flex-jusfiy-content-center align-items-center"
          style={{ paddingTop: "150px", textAlign: "center" }}
        >
          <h1 style={{ fontSize: "50px", fontWeight: 550 }}>
            Meet Pinterest’s leadership
          </h1>
          <p style={{ fontSize: "20px", fontWeight: 400 }}>
            Get to know our executive team.
          </p>
          <button
            style={{
              color: "black",
              background: "white",
              fontSize: "18px",
              fontWeight: 440,
              padding: "10px 20px",
              borderRadius: "20px",
              border: "solid",
              alignItems: "center",
              cursor: "pointer",
            }}
            className="pb-2 pt-2 px-3 mt-4 rounded-pill mx-5"
          >
            Meet the team
          </button>
          <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
            {leaders.map((leader, id) => (
              <Carding key={id} leader={leader.img} />
            ))}
          </div>
        </div>
        <div
          className="d-flex justify-content-around flex-wrap"
          style={{
            marginTop: "280px",
            padding: "0 50px",
            marginBottom: "300px",
          }}
        >
          {/* Get in touch */}
          <div style={{ maxWidth: "400px", textAlign: "center" }}>
            <h2>Get in touch</h2>
            <p style={{ fontSize: "18px", fontWeight: 500 }}>
              Contact our press team. Only press-related inquiries and speaker
              requests will receive a response.
            </p>
            <button
              style={{
                color: "white",
                background: "black",
                fontSize: "18px",
                fontWeight: 440,
                display: "flex",
                justifyContent: "center",
                padding: "10px 20px",
                borderRadius: "20px",
                alignItems: "center",
                margin: "0 auto",
              }}
              className="pb-2 pt-2 px-3 mt-4 rounded-pill"
            >
              Press@pinterest.com
            </button>
          </div>

          {/* Stay connected */}
          <div style={{ maxWidth: "400px", textAlign: "center" }}>
            <h2>Stay connected</h2>
            <p style={{ fontSize: "18px", fontWeight: 500 }}>
              Subscribe to our RSS feed to stay up to date on the latest news
              from Pinterest.
            </p>
            <button
              style={{
                color: "white",
                background: "black",
                fontSize: "18px",
                fontWeight: 440,
                display: "flex",
                justifyContent: "center",
                padding: "10px 20px",
                borderRadius: "20px",
                alignItems: "center",
                margin: "0 auto",
              }}
              className="pb-2 pt-2 px-3 mt-4 rounded-pill"
            >
              Subscribe via RSS
            </button>
          </div>
        </div>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ padding: "0 150px" }}
        >
          <h6 style={{ fontSize: "18px", fontWeight: 600 }}>Footnotes</h6>
          <span
            onClick={() => setIsOpen(!isOpen)}
            style={{ fontSize: "30px", cursor: "pointer" }}
          >
            {isOpen ? "_" : "+"}
          </span>
        </div>
        {isOpen && (
          <div className="d-flex justify-content-evenly px-5 py-3 text-start">
            {/* Item 1 */}
            <div
              className="d-flex flex-column align-items-center"
              style={{ width: "250px" }}
            >
              <PiNumberSquareOne size={22} />
              <p
                style={{ fontSize: "15px", marginTop: "10px", fontWeight: 530 }}
              >
                Pinterest, Global analysis, Q1 2025
              </p>
            </div>

            {/* Item 2 */}
            <div
              className="d-flex flex-column align-items-center"
              style={{ width: "250px" }}
            >
              <PiNumberSquareTwoLight size={22} />
              <p
                style={{ fontSize: "15px", marginTop: "10px", fontWeight: 530 }}
              >
                Pinterest Internal Data, Global, June 2023. Weekly average over
                last twelve months.
              </p>
            </div>

            {/* Item 3 */}
            <div
              className="d-flex flex-column align-items-center"
              style={{ width: "250px" }}
            >
              <PiNumberSquareThreeLight size={22} />
              <p
                style={{ fontSize: "15px", marginTop: "10px", fontWeight: 530 }}
              >
                GfK, Path to purchase study with weekly Pinners, US, Nov 2018
              </p>
            </div>
          </div>
        )}

        <hr
          style={{
            borderTop: "1.5px solid black",
            opacity: 0.1,
            margin: "5px 150px",
          }}
        />
        <div style={{marginTop:"70px",marginLeft:"90px"}}>
          <AboutFooter />
        </div>
      </div>
    </>
  );
}
