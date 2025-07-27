import { NavigationBar } from "../components/navbar";
import styles from "./searchPage.module.css";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import { Navigate } from "react-router-dom";

export function Search() {
  return (
    <>
      <div style={{ minHeightheight: "1000px" }}>
        <NavigationBar />
        <div className={styles.searchBody}>
          <div className={styles.images}>
             <button className={styles.imgButton}>easy kitchen dinner</button>
            <img src={s1} alt="image1" className={styles.s1} />
            <img src={s4} alt="image4" className={styles.s4} /> 
             <img src={s3} alt="image3" className={styles.s3} /> 
             <img src={s2} alt="image2" className={styles.s2} />
          </div>
          <div className={styles.textArea}>
            <h1>Search for an idea </h1>
            <br />
            <p>
              What do you want to try next? Think of something you're into __
              like "easy cicken dinner"__ and see what you find.
            </p>
            <button className={styles.exploreButton} >Explore </button>
          </div>
        </div>
      </div>
    </>
  );
}
