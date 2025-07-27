import { AboutNav } from "../components/aboutNav";
import NewsImage from "../assets/NewsImage.jpg";

export function News() {
  return (
    <>
      <AboutNav />

      <div className="container mt-5">
        {/* Section Label */}
        <h6 className="fw-bold mb-4 ms-1">Featured news</h6>

        {/* Two-column layout */}
        <div className="d-flex flex-wrap align-items-start gap-4">
          {/* Left: Text block */}
          <div
            className="bg-white p-4 shadow rounded-4"
            style={{
              flex: "1 1 40%",
              minWidth: "300px",
              maxWidth: "500px",
            }}
          >
            <h2 className="fw-bold text-start">
              Pinterest Men's Trend Report: How men are redefining masculinity
              through style, substance and self-care
            </h2>
            <p className="text-muted mt-4 mb-0">July 8, 2025</p>

          {/* Right: Image */}
          <div style={{ flex: "1 1 55%", minWidth: "300px" }}>
            <img
              src={NewsImage}
              alt="News"
              className="img-fluid rounded-4"
              style={{
                objectFit: "cover",
                width: "100%",
                maxHeight: "500px",
              }}
              />
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
