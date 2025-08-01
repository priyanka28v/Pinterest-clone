import { Searchbar } from "../components/searchbar";
import { useParams } from "react-router-dom";
import styles from "./showBoard.module.css";
import { IoShareOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { ShareModal } from "../components/shareModal";
import { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export function ShowBoard() {
  const { boardName } = useParams();
  const [showShareModal, setShowShareModal] = useState(false);

  const toggleModal = () => {
    setShowShareModal(!showShareModal);
  };
  return (
    <>
      <div className={styles.container}>
        <Searchbar />
        <div className={styles.heading}>
  <h1>{boardName}</h1>

  {/* Share button + modal wrapper */}
  <div className={styles.shareWrapper}>
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Share</Tooltip>}
    >
      <IoShareOutline
        size={37}
        className={styles.shareIcon}
        onClick={toggleModal}
      />
    </OverlayTrigger>

    {showShareModal && (
      <div className={styles.shareFunc}>
        <ShareModal />
      </div>
    )}
  </div>

  <BsThreeDots size={37} className={styles.threeDotsIcon} />
</div>

      </div>
    </>
  );
}
