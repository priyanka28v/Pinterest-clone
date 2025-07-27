import { NavigationBar } from "../components/navbar";
import "./shop.css";
import ShopImage from "../assets/shopImage.png";

export function Shop() {
  return (
    <>
      <div style={{minHeight:"1000px"}}>
        <NavigationBar />
        <div className="shop-body">
          <img src={ShopImage} alt="img" />

          <div className="content-wrapper">
            <h1>See it, make it,</h1>
            <h1>Try it, do it</h1>
            <p>
              The best part of Pinterest is discovering new things and ideas
              from people around the world.
            </p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
}
