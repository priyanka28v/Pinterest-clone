import { Searchbar } from "../components/searchbar";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { Api } from "../networking/Api";
import styles from "./CreatePin.module.css";

export function CreatePin() {
  const [isUploaded, setIsUploaded] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const FILE_SIZE_LIMITS = {
    image: 20 * 1024 * 1024, // 20MB
    video: 200 * 1024 * 1024, // 200MB
  };

  const validateSchema = yup.object().shape({
    images: yup
      .mixed()
      .required("Please upload an image or video")
      .test("fileType", "Only JPG/PNG/MP4 files are allowed", (value) => {
        if (!value) return false;
        const allowedTypes = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "video/mp4",
        ];
        return allowedTypes.includes(value.type);
      })
      .test("fileSize", "File is too large", (value) => {
        if (!value) return false;
        const isImage = value.type.startsWith("image/");
        const isVideo = value.type === "video/mp4";

        if (isImage && value.size <= FILE_SIZE_LIMITS.image) return true;
        if (isVideo && value.size <= FILE_SIZE_LIMITS.video) return true;
      }),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      link: "",
      boards: "",
      tags: "",
      images: null,
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      //FormData ek JavaScript object hai jo form ke data ko key-value pairs mein store karta hai, jismein files/images bhi add ki ja sakti hain. Jab tum server ko file ya image bhejna chahte ho, tab FormData hi use hota hai.

      //formData.append("images", values.images);
      // Yani tum image ya file upload kar rahe ho. Agar tum ye normal JSON object ke form mein bhejte:

      // Isiliye FormData use karte hain:
      // File/image ko multipart/form-data ke format mein server tak bhejne ke liye.
      // Server (Express + Multer) properly us file ko receive kar sake.

      console.log("Form submitted", values);
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("link", values.link);
      formData.append("boards", values.boards);
      formData.append("tags", values.tags);
      formData.append("images", values.images);

      try {
        const response = await Api({ type: "CreatePin", formData });
        console.log("uploaded");
        resetForm();
        setImagePreview(null);
        setIsUploaded(false);
      } catch (err) {
        console.log(err);
      }
    },
  });
  console.log(formik);
  return (
    <div className={`container-fluid position-relative ${styles.container}`}>
      <Searchbar />

      <div className={`position-absolute ${styles.card}`}>
        <hr style={{ border: "1px solid #ddd" }} />
        <form onSubmit={formik.handleSubmit}>
          <h4 className="d-flex justify-content-between align-items-center flex-wrap">
            Create Pin
            {isUploaded && (
              <span className="d-flex align-items-center gap-3 mt-2 mt-md-0">
                <span className="text-muted">Ready to publish?</span>
                <button type="submit" className="btn btn-danger">
                  Publish
                </button>
              </span>
            )}
          </h4>
          <hr style={{ border: "1px solid #ddd" }} />

          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-12 col-md-5 mb-4">
              <div className={styles.uploadBox}>
                {!imagePreview && (
                  <label htmlFor="image-upload" className={styles.uploadLabel}>
                    <IoArrowUpCircleOutline size={40} />
                    <p className={styles.labelTitle}>Choose a File</p>
                    <p className={styles.labelNote}>
                      We recommend high quality .jpg files under 20MB or .mp4
                      files under 200MB.
                    </p>
                  </label>
                )}

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className={styles.imagePreview}
                  />
                )}

                <input
                  id="image-upload"
                  type="file"
                  name="images"
                  accept=".jpg,.jpeg,.png,.mp4"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setIsUploaded(true);
                      setImagePreview(URL.createObjectURL(file));
                      //URL.createObjectURL(file)  // <- ye file ka temporary local URL banata hai
                      // Browser ke paas image file ka reference hota hai, lekin directly <img src={file}> nahi laga sakte.

                      formik.setFieldValue("images", file); // formik ke form mein image file save kar di
                    }
                  }}
                  style={{ display: "none" }}
                />
                {formik.touched.images && formik.errors.images && (
                  <div className="error">{formik.errors.images}</div>
                )}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-12 col-md-7">
              <fieldset disabled={!isUploaded}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-semibold">
                    Title <span className="text-danger">*</span>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Add a title"
                    className={`form-control ${styles.roundedInput}`}
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.title && formik.errors.title && (
                    <div className="text-danger">{formik.errors.title}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="description"
                    className="form-label fw-semibold"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Add a detailed description"
                    className={`form-control ${styles.roundedTextarea}`}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="link" className="form-label fw-semibold">
                    Link
                  </label>
                  <input
                    id="link"
                    type="text"
                    name="link"
                    placeholder="Link (optional)"
                    className={`form-control ${styles.roundedInput}`}
                    value={formik.values.link}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="boards" className="form-label fw-semibold">
                    Boards <span className="text-danger">*</span>
                  </label>
                  <input
                    id="boards"
                    type="text"
                    name="boards"
                    placeholder="Board Name"
                    className={`form-control ${styles.roundedInput}`}
                    value={formik.values.boards}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.boards && formik.errors.boards && (
                    <div className="text-danger">{formik.errors.boards}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="tags" className="form-label fw-semibold">
                    Tags
                  </label>
                  <input
                    id="tags"
                    type="text"
                    name="tags"
                    placeholder="Tags (optional)"
                    className={`form-control ${styles.roundedInput}`}
                    value={formik.values.tags}
                    onChange={formik.handleChange}
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
