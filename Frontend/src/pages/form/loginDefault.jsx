import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaPinterest } from "react-icons/fa";
import { Footer } from "../../components/footer";
// import { NewHome } from "../../../../Backend/controller/PinsController";
import * as yup from "yup";
import "./loginForm.module.css";
import { FaTimesCircle } from "react-icons/fa";
import { Api } from "../../networking/Api";

export function LoginBydefault({ show, onhide }) {
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email("Hmm...that doesn't look like an email address")
      .required("please enter email"),
    password: yup.string(),
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
        const response = await Api({type:"login", ...values });

        if (response.message === "Invalid Credencials") {
          alert("Invalid credentials");
        } else if (response.message === "please signUp first") {
          alert("Please sign up first");
        } else {
          navigate("/NewHome"); 
        }
      } catch (err) {
        console.log(err);
        alert("Login failed!");
      }
    },
  });

  return (
    <div className="mod container rounded-4 mt-5 p-4 shadow">
      {/* Header */}
      <div className="mod-head text-center">
        <FaPinterest size={32} color="#E60023" className="mb-3" />
        <h2 className="mb-3 fw-bold">Welcome to Pinterest</h2>
      </div>

      {/* Body */}
      <div className="mod-body ms-4">
        <form onSubmit={formik.handleSubmit} className="form">
          <label htmlFor="email" className="mt-2">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            className="input h-100 d-inline-block mh-100 rounded-3 border border-black"
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
            <div
              style={{ color: "mahroon", fontsize: "0.8rem", lineHeight: "2" }}
            >
              {formik.errors.password}
            </div>
          )}
          <Link to="/ForgotPass" className="fp fs-6 fw-light mb-4 d-block">
            <h6>Forgot Your password?</h6>
          </Link>

          <button
            type="submit"
            className="bt fs-6 mt-2 rounded-3 w-75 p-1 border border-light-subtle text-light"
          >
            Log in
          </button>

          <h6 className="or">OR</h6>

          <button
            type="submit"
            className="facebook fs-6 rounded-2 w-75 p-2 border border-light-subtle text-light bg-primary d-flex align-items-center gap-2 justify-content-center fw-bold"
          >
            <FaFacebookF size={18} />
            Continue with Facebook
          </button>

          <button
            type="submit"
            className="google mt-2 fs-6 rounded-2 w-75 p-2 border border-light-subtle text-black bg-white gap-2 d-flex align-items-center justify-content-center"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="mod-fot mt-4">
        <Footer className="footer text-black-50 bg-white pt-2" />
        <h6 className="last fw-bold text-center mt-3">
          Not on Pinterest yet? Sign Up
        </h6>
      </div>
    </div>
  );
}
