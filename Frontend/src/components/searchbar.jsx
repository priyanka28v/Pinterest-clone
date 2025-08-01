import { Navbar, Form } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CurrentUser } from "./currentUser";

import { FaPinterest } from "react-icons/fa";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { TbLayoutBoardSplit } from "react-icons/tb";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiCircleChevDown } from "react-icons/ci";

export function Searchbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentUser, setCurrentUser] = useState(false);

  const user = () => {
    setCurrentUser((prev) => !prev);
  };

  return (
    <div
      style={{ background: "white", height: "100vh",position:"fixed"}}
      className="d-flex justify-content-start align-items-start"
    >
      <div className="d-flex flex-column justify-content-start align-items-start">
        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-pinterest">Pinterest</Tooltip>}
        >
          <FaPinterest
            size={32}
            style={{
              color: "red",
              marginTop: "30px",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/NewHome")}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-home">Home</Tooltip>}
        >
          <RiHomeSmileFill
            size={32}
            style={{
              color: "black",
              marginTop: "38px",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/NewHome")}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-explore">Explore</Tooltip>}
        >
          <MdOutlineExplore
            size={32}
            style={{ marginTop: "38px", marginLeft: "20px", cursor: "pointer" }}
            onClick={() => navigate("/Explore")}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-boards">Boards</Tooltip>}
        >
          <TbLayoutBoardSplit
            size={32}
            style={{ marginTop: "38px", marginLeft: "20px", cursor: "pointer" }}
             onClick={() => navigate("/pins")}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-create">Create</Tooltip>}
        >
          <MdOutlineCreateNewFolder
            size={32}
            style={{ marginTop: "38px", marginLeft: "20px", cursor: "pointer" }}
            onClick={() => navigate("/CreatePin")}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-bell">Notifications</Tooltip>}
        >
          <GoBell
            size={32}
            style={{ marginTop: "38px", marginLeft: "20px", cursor: "pointer" }}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-message">Messages</Tooltip>}
        >
          <LuMessageSquareMore
            size={32}
            style={{ marginTop: "38px", marginLeft: "20px", cursor: "pointer" }}
          />
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          overlay={<Tooltip id="tooltip-settings">Settings</Tooltip>}
        >
          <IoSettingsOutline
            size={32}
            style={{ marginTop: "38px", marginLeft: "20px", cursor: "pointer" }}
          />
        </OverlayTrigger>
      </div>
      <div
        style={{
          height: "100vh",
          width: "0.5px",
          backgroundColor: "#ddd",
          marginLeft: "20px",
          marginRight: "0px", // reduced spacing
        }}
      ></div>
      <div className="flex-grow-1" style={{ paddingRight: "0px",position:"fixed",marginLeft:"60px",zIndex:9999 }}>
        <Navbar style={{ marginLeft: "30px", marginTop: "9px" }}>
          <Form className="position-relative">
            {/* Search icon inside input */}

            {/* Search input */}
            <Form.Control
              size="sm"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ps-5 pe-5"
              aria-label="Search"
              style={{
                width: "1100px",
                height: "40px",
                fontSize: "14px",
                background: "#f2f2f2",
                position:"fixed",
                borderRadius:"10px"
              }}
            />
              <CiSearch
                size={25}
                style={{
                  position: "fixed",
                  left: "100px",
                  top: "6%",
                  transform: "translateY(-50%)",
                  color: "#666",
                }}
              />
          </Form>
          <div>
            <CiCircleChevDown
              size={30}
              style={{ position:"absolute", marginLeft: "1120px",marginTop:"4px", cursor: "pointer" }}
              onClick={user}
            />
            {/* {currentUser && <CurrentUser />} */}
          </div>
        </Navbar>
      </div>
    </div>
  );
}
