  import { useState, useEffect } from "react";
  import { useNavigate, useLocation } from "react-router-dom";

  export function Scroller() {
    const [stage, setStage] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
      function handleScroll() {
        const scrollY = window.scrollY;
        console.log("ScrollY:", scrollY, "Stage:", stage);
  console.log("scrolling...");
        if (scrollY < 100 && stage !== 0) {
          setStage(0);
          navigate("/");
        } else if (scrollY >= 100 && scrollY < 800 && stage !== 1) {
          setStage(1);
          navigate("/inspiration");
          
        } else if (scrollY >= 800 && scrollY < 1600 && stage !== 2) {
          setStage(2);
          navigate("/search");
        } else if (scrollY >= 1600 && scrollY < 2400 && stage !== 3) {
          setStage(3);
          navigate("/save");
        } else if (scrollY >= 2400 && stage !== 4) {
          setStage(4);
          navigate("/shop");
        }
      }

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [navigate, stage]);

    return null;
  }
