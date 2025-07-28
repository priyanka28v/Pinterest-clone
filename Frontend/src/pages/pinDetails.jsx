import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../networking/Api";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Searchbar } from "../components/searchbar";
import styles from "./pinDetails.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Card } from "react-bootstrap";
import { FaRegComment } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ShareModal } from "../components/shareModal";
import { Actions } from "../components/moreActions";

export function PinDetails() {
  const { id } = useParams();

  const [pinData, setPinData] = useState(null);

  const [likesCount, setLikesCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [isComments, setIsComments] = useState(false);
  const [textComments, setTextComments] = useState("");
  const [commentsCount, setCommentsCount] = useState(0);
  const [showComments, setShowComments] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const [savepin, setSavePin] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  // to get pindetails
  useEffect(() => {
    const fetchPinDetails = async () => {
      const response = await Api({ type: "NewHomeById", id });

      setPinData(response.pin);
      setLikesCount(response.pin.likes.length);
      setCommentsCount(response.pin.comments.length);
      setIsLiked(response.isLiked);
    };
    fetchPinDetails();
  }, [id]);

  // To handel likes

  const handelLike = async () => {
    try {
      const response = await Api({ type: "likes", id });
      console.log(response);
      setLikesCount(response.likes);
      setIsLiked(response.isLiked);
    } catch (err) {
      console.log(err);
    }
  };

  // To handel comment

  const handelComment = async () => {
    try {
      const response = await Api({
        type: "comments",
        id,
        formData: { textComments },
      });
      console.log(response);
      setCommentsCount(response.commentsCount);
      setIsComments(response.isComment);
      setTextComments("");
      setShowComments(true);
      setPinData(response.updatedPin);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  const moreActionsToggle = () => {
    setShowActions((prev) => !prev);
  };

  // To handel Saved pins

  const handleSavePin = async () => {
    try {
      const response = await Api({ type: "savePin", id });
      console.log(response);
      if (response.isSaved) {
        setSavePin(true);
        setSaveMessage("Saved successfully");
      } else {
        setSavePin(false);
        setSaveMessage("Pin Unsave");
      }
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      setSaveMessage("");
    }, 3000);
  };
  return (
    <>
      <div className={styles.container}>
        <Searchbar />
        <div className={styles.main}>
          <IoIosArrowRoundBack size={50} />
          <Card className={styles.card}>
            <div className={styles.icons}>
              {/* likeFuntionlity */}

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-like">React</Tooltip>}
              >
                {isLiked ? (
                  <FaHeart
                    onClick={handelLike}
                    size={28}
                    className={styles.hoverEffect}
                    style={{ color: "red" }}
                  />
                ) : (
                  <FaRegHeart
                    onClick={handelLike}
                    size={28}
                    className={styles.hoverEffect}
                    style={{ color: "black" }}
                  />
                )}
              </OverlayTrigger>

              {/* commentsFunctionlity */}

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="comments-tooltip">Comments</Tooltip>}
              >
                <FaRegComment size={20} className={styles.hoverEffect} />
              </OverlayTrigger>

              {/* shareFuntionlity */}

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-share">Share</Tooltip>}
              >
                <span onClick={toggleModal}>
                  <IoShareOutline size={37} className={styles.hoverEffect} />
                </span>
              </OverlayTrigger>

              {showModal && (
                <div className={styles.shareModal}>
                  <ShareModal pinId={id} />
                </div>
              )}

              {/* moreActionsFuntionlity */}

              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="tooltip-actions">More actions</Tooltip>}
              >
                <span onClick={moreActionsToggle}>
                  <HiOutlineDotsHorizontal
                    size={29}
                    className={styles.hoverEffect}
                  />
                </span>
              </OverlayTrigger>
              {showActions && (
                <div className={styles.actions}>
                  <Actions />
                </div>
              )}

              {/* savedFunctionlity */}

              <button onClick={handleSavePin}>
                {savepin ? "Saved" : "Save"}
              </button>

              {saveMessage && <p style={{ color: "green" }}>{saveMessage}</p>}
            </div>

            {/* showImages */}
            
            {pinData?.images && (
              <img
                src={`http://localhost:5000/${pinData.images.replace(
                  /^\/+/,
                  ""
                )}`}
                alt="Pin"
                className={styles.pinImage}
              />
            )}
            <p className={styles.pTag}>
              Posted by:{" "}
              {pinData?.createdBy?.email?.split("@")[0].replace(/[0-9]/g, "")}
            </p>
            <div>
              <hr className={styles.hr}></hr>
            </div>
            <div className={styles.inputWrapper}>
              {commentsCount > 0 ? (
                <h6
                  onClick={() => setShowComments(!showComments)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {commentsCount} Comments
                  <MdKeyboardArrowDown
                    size={26}
                    style={{
                      paddingLeft: "8px",
                      transform: showComments
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </h6>
              ) : (
                <h6>No Comments yet</h6>
              )}
              {showComments && (
                <div className={styles.commentsList}>
                  {console.log(pinData.comments)}
                  {pinData?.comments?.map((comment, index) => (
                    <div key={index} className={styles.commentItem}>
                      <strong>{comment.user?.email?.split("@")[0]}</strong>
                      {console.log(comment.user.email)}
                      <p>{comment.text}</p>
                    </div>
                  ))}
                </div>
              )}

              <input
                type="text"
                placeholder="Add a comment"
                value={textComments}
                onChange={(e) => setTextComments(e.target.value)}
                className={styles.input}
              />
              {textComments.trim() && (
                <IoMdSend
                  className={styles.sendIcon}
                  onClick={handelComment}
                  size={27}
                />
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
