import { Searchbar } from "../components/searchbar";
import styles from "./board.module.css";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Pins } from "./pins";
import { SaveIdea } from "../components/saveIdeaModal";
import { CreateBoard } from "../components/createBoard";
import { Api } from "../networking/Api";
import { useEffect } from "react";
import {Card} from 'react-bootstrap';
import { boards } from "../../../Backend/controller/boardsController";

export function Boards() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("boards");
  const [showPlusModal, setShowPlusModal] = useState(false);
  const [showBoard,setShowBoard]=useState(true)
  const [boards,setBoards]=useState([])

 const fetchBoards = async () => {
  try {
    const response = await Api({ type: "getBoard" });
    console.log("response is:"+response);
    setBoards(response.boards)
  } catch (err) {
    console.error("Error fetching boards:", err);
  }
};

  useEffect (()=>{
    fetchBoards();
  },[]) 

  return (
    <div className={styles.container}>
      <Searchbar />
      <div className={styles.body}>
        <h2>
          <b>Your Saved Pins</b>
        </h2>

        {/* 2nd row div */}
        {/* boards */}

        <div className={styles.boards}>
          <p
            className={`${styles.pinTag} ${
              activeTab == "pins" ? styles.active : ""
            }`}
            onClick={() => {
              navigate("/pins");
            }}
          >
            Pins
          </p>
          <p
            className={`${styles.boardsTag} ${
              activeTab == "boards" ? styles.active : ""
            }`}
          >
            Boards
          </p>
        </div>
        {/* 3rd row div
        borad section button */}
        <div className={styles.boardSection}>
          <button className={styles.button1}>Group</button>
          <button
            className={styles.button2}
            onClick={() => {
              setShowPlusModal(true);
            }}
          >
            +
          </button>
          {showPlusModal && (
            <div className={styles.plusModal}>
              <SaveIdea
                show={showPlusModal}
                handleClose={() => setShowPlusModal(false)}
              />
            </div>
          )}
        </div>
        <div className={styles.userBoards}>
          {showBoard && (
            boards.map((board,id)=>(
              <Card className={styles.boardCards} key={id} onClick={()=>{navigate(`/ShowBoard/${board.boardName}`)}}>
                  {board.boardName}
              </Card>
              
            ))
          )}
        </div>
      </div>
    </div>
  );
}
