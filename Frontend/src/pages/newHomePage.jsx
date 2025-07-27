import { Searchbar } from "../components/searchbar";
import { useState, useEffect } from "react";
import { Api } from "../networking/Api";
import Masonry from "react-masonry-css";
import styles from "./NewHomePage.module.css";
import { HashLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export function NewHomePage() {
  const [authUser,setAuthUser] =useState(null)
  const [showPins, setShowPins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [hoverId, setHoverId] = useState(null);

  const navigate=useNavigate()

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const result = await Api({ type: "NewHome" });
        console.log(result);
        const shuffled = result.sort(() => Math.random() - 0.5);
        setTimeout(() => {
          setShowPins(shuffled);
          setLoader(false);
        }, 1000);
      } catch (err) {
        console.error("Error fetching pins:", err);
      }
    };
    fetchPins();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <div className={styles.fullPage}>
        <Searchbar />
        <div className={styles.SearchBar}></div>
        {loader ? (
          <HashLoader color="#e60023" size={50} />
        ) : (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles.masonryGrid}
            columnClassName={styles.masonryColumn}
          >
            {showPins.map((pin) => (
              <div
                key={pin._id}
                className={styles.pinCard}
                onMouseEnter={() => {
                  setHoverId(pin._id);
                }}
                onMouseLeave={() => {
                  setHoverId(null);
                }}
                onClick={()=>navigate(`/PinDetails/${pin._id}`)}
              >
                <img
                  src={`http://localhost:5000/${pin.images.replace(
                    /^\/+/,
                    ""
                  )}`}
                  alt={pin.title}
                  className={styles.pinImage}
                />
                {hoverId === pin._id && (
                  <div className={styles.hoverCard}>
                    {pin.link && (
                      <a href={pin.link}>
                        <button className={styles.visitButton}>Visit Link</button>
                      </a>
                    )}
                    <button className={styles.saveButton}>Save</button>
                  </div>
                )}
              </div>
            ))}
          </Masonry>
        )}
      </div>
    </>
  );
}
