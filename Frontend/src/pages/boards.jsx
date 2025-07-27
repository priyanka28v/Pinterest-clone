import { Searchbar } from "../components/searchbar";
import styles from "./boards.module.css";

export function Boards() {
  return (
    <>
      <div className={styles.container}>
        <Searchbar />
        <div className={styles.body}>
          <h2>
            <b>Your Saved Pins</b>
          </h2>
          <div className={styles.pins}>
            <p>Pins</p>
            <p>Boards</p>
          </div>
        </div>
      </div>
    </>
  );
}
