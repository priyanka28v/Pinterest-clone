import { useState, useEffect } from "react";
import { NavigationBar } from "../components/navbar";
import home from "../assets/home.jpg";
import { LoginBydefault } from "./form/loginDefault";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {/* <div style={{minHeight:"1000px",display: "flex",
  flexDirection: "column"}}> */}
        <NavigationBar
          show={() => setShowLogin(true)}
          onhide={() => setShowLogin(false)}
        />

        <div
          className={styles.heroContainer}
          style={{
            backgroundImage: `url(${home})`,
            height: "100vh", // <-- ensure there's scroll
          }}
        >
          <div className={styles.leftSection}>
            <div className={styles.overlay}></div>
            <h1 className={styles.heroText}>Log in to get your ideas</h1>
          </div>

          {showLogin && (
            <div className={styles.rightSection}>
              <LoginBydefault
                show={showLogin}
                onhide={() => setShowLogin(false)}
              />
            </div>
          )}
        </div>
      {/* </div> */}
    </>
  );
}
