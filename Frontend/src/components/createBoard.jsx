import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { Form } from "react-bootstrap";
import styles from "./createBoard.module.css";
import { CiSearch } from "react-icons/ci";
import * as yup from "yup";
import { Api } from "../networking/Api";

export function CreateBoard({ show, onHide }) {
  const validateSchema = yup.object().shape({
    boardName: yup.string().required("Don't forget to name your board!"),
  });

  const formik = useFormik({
    initialValues: {
      boardName: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      try {
        const response = await Api({ type: "boards", ...values });
        // console.log(response);
        console.log(values);
        onHide(); 
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Body>
        <p className={styles.heading}>Create Board</p>
        <br />
        <Form onSubmit={formik.handleSubmit}>
          {/* Board Name */}
          <Form.Label>Name</Form.Label>
          <br />
          <input
            type="text"
            name="boardName"
            placeholder="Like Places to Go or Recipes to Make"
            value={formik.values.boardName}
            className={styles.input}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.boardName && formik.errors.boardName && (
            <div className={styles.error}>{formik.errors.boardName}</div>
          )}

          {/* Secret Board */}
          <Form.Check
            type="checkbox"
            id="secretBoard"
            label={
              <>
                <span className={styles.subText1}>Keep this board secret</span>
                <p className={styles.subText2}>
                  So only you and collaborators can see it.
                </p>
              </>
            }
          />

          {/* Add Collaborators */}
          <Form.Label style={{ marginTop: "40px" }}>Add Collaborators</Form.Label>
          <div style={{ position: "relative", width: "100%" }}>
            <Form.Control
              size="sm"
              type="search"
              placeholder="Search"
              style={{
                height: "40px",
                fontSize: "14px",
                background: "#f2f2f2",
                borderRadius: "10px",
                paddingLeft: "35px",
              }}
            />
            <CiSearch
              size={20}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
              }}
            />
          </div>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <button
          type="submit"
          className={
            !formik.isValid || !formik.dirty
              ? styles.disabled
              : styles.create
          }
          disabled={!formik.isValid || !formik.dirty}
          onClick={formik.handleSubmit}
        >
          Create
        </button>
      </Modal.Footer>
    </Modal>
  );
}
