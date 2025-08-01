import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CreateBoard } from "./createBoard";
import styles from "./saveIdea.module.css";

export function SaveIdea({ show, handleClose }) {
  const navigate = useNavigate();

  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);

  return (
    <>
      {/* First Modal */}
      {!showCreateBoardModal && (
        <Modal
          show={show}
          onHide={handleClose}
          centered
          className={styles.container}
        >
          <Modal.Body>
            <p>Create</p>
            <h6
              className={styles.pin}
              onClick={() => navigate("/CreatePin")}
            >
              Pin
            </h6>
            <h6
              className={styles.board}
              onClick={() => {
                setShowCreateBoardModal(true); 
              }}
            >
              Board
            </h6>
          </Modal.Body>
        </Modal>
      )}

      {/* Second Modal - Create Board */}
      {showCreateBoardModal && (
        <CreateBoard
          show={showCreateBoardModal}
          onHide={() => {
            setShowCreateBoardModal(false); 
          }}
        />
      )}
    </>
  );
}
