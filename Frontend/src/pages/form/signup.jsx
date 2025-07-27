import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Footer } from "../../components/footer";
import { FaPinterest } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PasswordTips } from "../../components/passwordTips";
import { Tooltip } from "react-tooltip";
import { FaTimesCircle } from "react-icons/fa";
import { Api } from "../../networking/Api";
import { useNavigate } from "react-router-dom";
// import ProgressBar from 'react-bootstrap/ProgressBar';

import "./signup.css";

export function Signup({ show, onHide }) {
  const navigate = useNavigate();

  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email("Hmm...that doesn't look like an email address")
      .required("please enter email"),
    password: yup.string().required("enter your password"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   " Make it more complicated"
    // ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      birthdate: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values) => {
      try {
        console.log("Form submitted:", values);
        const response = await Api({ type:"signup",...values });

        if (response.message === "user created successfully") {
          navigate("/NewHome"); 
        } else if (response.message === "user already exits") {
          alert(response.message);
        }
      } catch (err) {
        console.log(err);
        alert("Signup failed");
      }
    },
  });

  const [showTips, setShowTips] = useState(false);

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
        dialogClassName=" mod rounded-4"
      >
        {/* hmne ismai dialoge classname isliye liya hai kyuki React-Bootstrap me jab tum
           className="mod" deti ho <Modal> component pe, toh woh class modal ke outer wrapper 
           (.modal-dialog) pe lagti hai.
          Lekin border-radius apply hota hai .modal-content pe — jo actual box hota hai. */}
        <Modal.Header closeButton>
          <div className="mod-head pt-0 mt-0 ms-5 heading fw-bold text-center">
            <FaPinterest size={32} color="#E60023" className="mb-3" />
            <Modal.Title className=" align-items-center gap-1 mw-1">
              <h2 className="mb-0">Welcome to Pinterest</h2>
              <h6 style={{ lineHeight: 2 }}>Find new ideas to try</h6>
            </Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body className="mod-body ms-4">
          <form onSubmit={formik.handleSubmit} className="form ">
            <label htmlFor="email" className="mt-2">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="input h-100 d-inline-block mh-100  rounded-3 border border-black"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "maroon",
                  fontSize: "0.8rem",
                  gap: "6px",
                }}
              >
                <FaTimesCircle size={12} color="maroon" />
                {formik.errors.email}
              </div>
            )}

            <label htmlFor="password" className="mt-2">
              Password
            </label>
            <br />
            <div className="d-flex flex-column">
              <input
                type="password"
                name="password"
                id="password"
                className="input h-100 d-inline-block border border-black rounded-3 mb-0"
                placeholder="Create Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {formik.touched.password && formik.errors.password && (
                <div style={{ color: "black", fontSize: "0.7rem" }}>
                  <strong> {formik.errors.password}</strong>
                </div>
              )}
              <span
                style={{ fontSize: "0.75rem", lineHeight: "1.5" }}
                //line-height: 1;
                // iska matlab hai:
                // "Jo bhi text likha gaya hai, uski height sirf utni ho jitni zarurat hai — koi extra vertical space nahi."

                className="mt-0 pt-0"
              >
                Use 8 or more letters, numbers and symbols
              </span>
            </div>

            <h6
              style={{ cursor: "pointer" }}
              className="hover-highlight  mt-3 mb-1"
              onClick={() => setShowTips(true)}
            >
              password tips <AiOutlineInfoCircle />
            </h6>
            {showTips && <div className="overlay-over-modal"></div>}
            <PasswordTips
              show={showTips}
              handelclose={() => {
                setShowTips(false);
              }}
            />

            <br />
            <label htmlFor="birthdate" className="">
              Birthdate
            </label>
            <AiOutlineInfoCircle
              data-tooltip-id="birthDate"
              data-tooltip-content="To help keep Pintrest safe,we now require your birthdate.your birthdate also help us provide more personalized recommendations and relevant ads.we won't share this information without your permission and it won't be visible on your profile"
              style={{ cursor: "pointer", marginLeft: "6px" }}
            />

            <Tooltip
              id="birthDate"
              place="right"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "12px",
                maxWidth: "200px", // ye text jyada long that isliye ye lgaya
              }}
            />

            <br />
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              className="input h-100 d-inline-block border border-black rounded-3 mb-3"
              placeholder="Password"
              value={formik.values.birthdate}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <button
              type="submit"
              className=" bt fs-6 mt-2 rounded-3 w-75 p-1 border border-light-subtle text-light"
            >
              Continue
            </button>
            <h6 className="or">OR</h6>
            <button
              type="submit"
              className="  google mt-2  fs-6 rounded-2 w-75 p-2 border border-light-subtle text-black bg-white gap-2 d-flex align-items-center justify-content-center "
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer className="mod-fot">
          <div className="ms-5">
            <Footer className="footer text-black-50 bg-white pt-2" />
            <h6 className="last fw-bold ms-5">Already a member? Log in</h6>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
