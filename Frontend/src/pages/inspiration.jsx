import React, { useState } from "react";
import { NavigationBar } from "../components/navbar";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Masonry from "react-masonry-css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Inspiration.css";

export function Inspiration() {
  const strings = [
    "chai time snacks idea",
    "home decor idea",
    "outfit idea",
    "DIY idea",
  ];

  const masonryData = {
    "chai time snacks idea": [
      {
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
        title: "Samosa",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcGn6T9vufbtZdnupIx1n-eLIiOovL8DO9w&s",
      },
      {
        img: "https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjhkUsJa4nFmUhaf69WdfrRca0zbetiMmjQ&s",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuoXJSywNS3TatiwIUYgh43TDsvrhyvkF3QN6ObsIVXRdU2zD2PlfL6IqJFY26E-Q8fQ&usqp=CAU",
      },
    ],
    "home decor idea": [
      {
        img: "https://assets-news.housing.com/news/wp-content/uploads/2018/01/30130410/Decor-trends-that-will-define-2018-FB-1200x700-compressed.jpg",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlAarG7Ku33yLx3xWoXKD10Rs7ccT9yjJ9fpYoBxmU1zI86m-nNXKGBc1TkYa-pVlqetA&usqp=CAU",
      },
      {
        img: "https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6PGIozacwv87iTm-VX_HSrl_4kP5XvSwAQ&s",
      },
      {
        img: "https://5.imimg.com/data5/SELLER/Default/2024/3/403549928/XO/GN/BJ/12929648/home-decoration-accessories-ceramic-round-modern-luxury-home-decor-500x500.jpg",
      },
    ],
    "outfit idea": [
      {
        img: "https://5.imimg.com/data5/SELLER/Default/2024/3/403549928/XO/GN/BJ/12929648/home-decoration-accessories-ceramic-round-modern-luxury-home-decor-500x500.jpg",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxUTnYX-ahilEwDVNK4AVF4BW3GuW1oJR-XA&s",
      },
      {
        img: "https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg",
      },
      {
        img: "https://www.giva.co/cdn/shop/articles/1-min_0777615e-d8d0-48da-89b9-5053981f49af.jpg?v=1738387900",
      },
      {
        img: "https://hips.hearstapps.com/hmg-prod/images/diy-garden-suncatcher-wind-chime-a-summer-kids-craft-4-67f3ee6dd521d.jpg?crop=1.00xw:0.667xh;0,0.151xh&resize=980:*",
      },
    ],
    "DIY idea": [
      {
        img: "https://images.squarespace-cdn.com/content/v1/67c6b907ec85643a3ddd2d5b/f5f2faa7-ef1b-444a-858f-b9597fe39bc9/Summer+Craft+Ideas",
      },
      {
        img: "https://i.pinimg.com/736x/af/58/52/af5852d1b844de8da8d2a3960688a33a.jpg",
      },
      {
        img: "https://wallpapers.com/images/featured/blank-white-7sn5o1woonmklx1h.jpg",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsyCX3xFiYq9xwc9MJY8nW6bTCBpRdm4HIA&s",
      },
      {
        img: "https://i.pinimg.com/736x/af/58/52/af5852d1b844de8da8d2a3960688a33a.jpg",
      },
    ],
  };

  const [color, setColor] = useState("#e60023");
  const [activeIndex, setActiveIndex] = useState(0);

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const breakpointColumnsObj = {
    default: 5,
    1100: 5,
    768: 2,
    500: 1,
  };

  return (
    <>
    <div style={{minHeight:"1000px"}}>
      <NavigationBar />
      
      <div style={{ paddingTop: "100px", textAlign: "center" }}>
        <h1 style={{ fontSize: "60px", color: "black" }}>
          <strong>Get your next</strong>
        </h1>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            setColor(getRandomColor());
          }}
        >
          {strings.map((idea, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  paddingBottom: "40px",
                  borderRadius: "12px",
                }}
              >
                <h1 style={{ color: color, fontSize: "60px" }}>
                  <strong>{idea}</strong>
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Masonry Section */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          style={{ padding: "30px" }}
        >
          {(masonryData[strings[activeIndex]] || []).map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "2px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                background: "#fff",
                marginTop:
                  i === 1
                    ? "80px" // 2nd image
                    : i === 2
                    ? "140px" // 3rd image
                    : i === 3
                    ? "100px" // 4th image
                    : "0px", // 1st and 5th → no extra top margin
              }}
            >
              <img
                src={item.img}
                alt=""
                style={{
                  width: "100%",
                  height: i === 0 || i === 4 ? "250px" : "200px", // 1 & 5 taller
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "300px",
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.6), rgba(255,255,255,0.2), transparent)",
                }}
              ></div>
            </div>
          ))}
        </Masonry>
      </div>
          </div>
    </>
  );
}
