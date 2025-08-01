import { Searchbar } from "../components/searchbar";
import styles from "./pins.module.css";
import { Api } from "../networking/Api";
import { useState } from "react";
import Masonry from "react-masonry-css";
import { IoOptionsOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { useEffect } from "react";
import { HashLoader } from "react-spinners";
import { SaveIdea } from "../components/saveIdeaModal";
import { Navigate, useNavigate } from "react-router-dom";
import { Boards } from "../pages/board";

export function Pins() {
  const navigate = useNavigate();

  const [showAllPins, setShowAllPins] = useState(true);
  const [allPins, setAllPins] = useState([]);
  const [createdByUser, setCreatedByUser] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [showHrLine, setHrLine] = useState(true);
  const [activeTab, setActiveTab] = useState("pins");
  const [showPlusModal, setShowPlusModal] = useState(false);
  const [hoverId, setHoverId] = useState(null);

  const getPins = async () => {
    const response = await Api({ type: "pins" });
    console.log(response);
    const userCreatedPins = [...(response.createdPins || [])];
    const mergedPins = [
      ...(response.savedPins || []),
      ...(response.createdPins || []),
    ];

    setCreatedByUser(userCreatedPins);
    setTimeout(() => {
      setAllPins(mergedPins);
      setActiveTab("pins");
      setShowLoader(false);
    }, 1000);
    setShowOptions(true);
  };

  useEffect(() => {
    getPins();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className={styles.container}>
      <Searchbar />

      {/* loader */}

      {showLoader ? (
        <div className={styles.loader}>
          <HashLoader color="#e60023" size={50} />
        </div>
      ) : (
        //  body
        // 1st div

        <div className={styles.body}>
          <h2>
            <b>Your Saved Pins</b>
          </h2>

          {/* 2nd row div */}

          {/* pins */}
          <div className={styles.pins}>
            <p
              className={`${styles.pinTag} ${
                activeTab == "pins" ? styles.active : ""
              }`}
              onClick={getPins}
            >
              Pins
            </p>
            {/* boards */}

            <p
              className={`${styles.boardsTag} ${
                activeTab == "boards" ? styles.active : ""
              }`}
              onClick={() => {
                navigate("/Boards");
              }}
            >
              Boards
            </p>
          </div>

          {/* 3rd row div */}
          {/* pins section button  */}

          <div className={styles.buttons}>
            {showOptions && (
              <IoOptionsOutline size={30} className={styles.options} />
            )}
            <button className={styles.button1}>
              <FaStar style={{ paddingRight: "4px", paddingBottom: "3px" }} />
              Favorites
            </button>
            <button
              className={styles.button2}
              onClick={() => {
                setAllPins(createdByUser);
                setShowAllPins(true);
              }}
            >
              Created by you
            </button>
            <button
              className={styles.button3}
              onClick={() => setShowPlusModal(true)}
            >
              +
            </button>
            {showPlusModal && (
              <div className={styles.plusModal}>
                <SaveIdea
                  show={showPlusModal}
                  handleClose={() => setShowPlusModal(false)}
                />
              </div>
            )}
          </div>
          {showAllPins && (
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className={styles.masonry}
              columnClassName={styles.column}
            >
              {allPins.map((pin, index) => (
                <div
                  key={index}
                  className={styles.images}
                  onMouseEnter={() => {
                    setHoverId(pin._id);
                  }}
                  onMouseLeave={() => {
                    setHoverId(null);
                  }}
                >
                  <img
                    src={`http://localhost:5000${pin.images}`}
                    alt="pin"
                    height={"280px"}
                    className={styles.pinImage}
                    onClick={() => navigate(`/PinDetails/${pin._id}`)}
                  />
                  {hoverId === pin._id && (
                    <div className={styles.hoverCard}>
                      {pin.link && (
                        <a href={pin.link}>
                          <button className={styles.VisitButton}>
                            Visit Button
                          </button>
                        </a>
                      )}
                      <button className={styles.saveButton}>Save</button>
                    </div>
                  )}
                  {/* hmne src mai url isliye likha h taki frontend ko pta lg jaye ki images kis server se lani h */}
                  {/* {console.log(pin.images)} */}
                </div>
              ))}
            </Masonry>
          )}
        </div>
      )}
    </div>
  );
}
