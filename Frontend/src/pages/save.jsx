import { NavigationBar } from "../components/navbar";
import "./save.css";

export function Save() {
  return (
    <>
      <div style={{minHeight:"1000px"}}>
        <NavigationBar />
        <div className="save-container">
          <h1>Save ideas you like</h1>
          <p>Collects your favourites so you can get back to them later.</p>
          <button>Explore </button>
        </div>
      </div>
    </>
  );
}
