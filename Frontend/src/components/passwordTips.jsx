import { Modal, Button } from "react-bootstrap";
import "../components/passwordTips.css";

export function PasswordTips({ show, handelclose }) {
  return (
    <Modal show={show} centered dialogClassName="custom-modal-width">
      {/*  dialogClassName lena padta hai jab:
      Tum modal ki width set kar rahi ho
      Tum modal ko center align karna chahti ho
      Tum chah rahi ho ki internal box ka style change ho */}
      <Modal.Body>
        <p>
          <h6 className="fw-bold">Password tips</h6>A strong password helps keep
          your account safe. Use at least 8 letters, numbers and symbols.
        </p>
        <h5 className="fw-bold mt-4">What to avoid</h5>
        <ul>
          <li>Common passwords, words and names</li>
          <li>Recent dates or dates associated with you</li>
          <li>Simple patterns and repeated text</li>
        </ul>
        <Button
          variant="danger"
          onClick={handelclose}
          className="w-100 rounded-pill mt-4"
        >
          Okay
        </Button>
      </Modal.Body>
    </Modal>
  );
}
