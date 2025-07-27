import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Inspiration } from "./pages/inspiration";
import { Save } from "./pages/save";
import { Search } from "./pages/search";
import { Shop } from "./pages/shop";
import { Login } from "./pages/form/login";
import { Signup } from "./pages/form/signup";
import { Scroller } from "./components/scroller";
import { About } from "./pages/about";
import { News } from "./pages/news";
import { NewHomePage } from "./pages/newHomePage";
import { CreatePin } from "./pages/createPin";
import { Explore } from "./pages/Explore";
import { PinDetails } from "./pages/pinDetails";
import { Actions } from "./components/moreActions";
import { Boards } from "./pages/boards";

const App = () => {
  const location = useLocation();

  const showScrollerPaths = ["/", "/inspiration", "/search", "/save", "/shop"];

  const shouldShowScroller = showScrollerPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/CreatePin" element={<CreatePin />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/inspiration" element={<Inspiration />} />
        <Route path="/search" element={<Search />} />
        <Route path="/save" element={<Save />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/PinDetails/:id" element={<PinDetails />} />
        <Route path='/Boards' element={<Boards/>}/>
      </Routes>
    </>
  );
};

export default App;
