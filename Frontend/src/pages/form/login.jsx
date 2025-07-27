import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Footer } from "../../components/footer";
import { FaPinterest } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { Api } from "../../networking/Api";
import "./loginForm.module.css";

export function Login({ show, onHide }) {
  const navigate = useNavigate();

  const validateSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("please enter email"),
    password: yup
      .string()
      .required("enter your password")
      .min(8, "passwor must be atleast 8 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateSchema,

    onSubmit: async (values) => {
      try {
        console.log("Form submitted:", values);
        const response = await Api({ type:"login",...values });
        //  Ye tumhare backend ke loginUser function ko hit karega.

        if (response.message === "please signUp first") {
          alert("Please sign up first.");
        } else if (response.message === "Invalid Credencials") {
          alert("Invalid credentials.");
        } else {
          navigate("/NewHome"); 
        }
      } catch (err) {
        console.log(err);
        alert("Login failed. Please try again.");
      }
    },
  });
  // console.log(formik);
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
            <Modal.Title className="d-flex align-items-center gap-2 mw-1">
              <h2 className="mb-0">Welcome to Pinterest</h2>
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
              <div style={{ color: "maroon", fontSize: "0.8rem" }}>
                {formik.errors.email}
              </div>
            )}

            <br />

            <label htmlFor="password" className="mt-2">
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className="input h-100 d-inline-block border border-black rounded-3 mb-3"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "mahroon", fontsize: "0.8rem" }}>
                {formik.errors.password}
              </div>
            )}

            <Link to="/ForgotPass" className="fp fs-6 fw-light mb-4">
              <h6>Forgot Your password?</h6>
            </Link>
            <button
              type="submit"
              className=" bt fs-6 mt-2 rounded-3 w-75 p-1 border border-light-subtle text-light"
            >
              Log in
            </button>
            <h6 className="or">OR</h6>
            <button
              type="submit"
              className=" facebook fs-6 rounded-2 w-75 p-2 border border-light-subtle text-light  bg-primary d-flex align-items-center gap-2 justify-content-center fw-bold"
            >
              <FaFacebookF size={18} />
              Continue with Facebook
            </button>
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
            <h6 className="last fw-bold ms-5">Not on Pinterest yet? Sign Up</h6>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
