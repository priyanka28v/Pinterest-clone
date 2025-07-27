import pintrestImage from "../assets/pintrestImage.png";

export function AboutFooter() {
  return (
    <div className="px-5 py-4 ">
      {/* Main Footer Row */}
      <div className="row align-items-start">
        {/* Left Side: Logo + Language */}
        <div className="col-md-4 mb-4">
          <img
            src={pintrestImage}
            alt="Pinterest Logo"
            height="100vh"
            className="mb-3"
          />
          <br />
          <button
            className="btn btn-outline-secondary rounded-pill px-3 py-1 d-flex align-items-center"
            style={{ fontSize: "14px", gap: "8px" }}
          >
            🌐 English (US)
            <span style={{ fontSize: "12px" }}>▼</span>
          </button>
        </div>

        {/* Right Side: Footer Links */}
        <div className="col-md-8" style={{marginBottom:"70px"}}>
          <div className="row">
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold">Quick links</h6>
              <p className="mb-1">Press assets</p>
              <p className="mb-1">Subscribe via RSS</p>
              <p className="mb-1">Contact us</p>
            </div>
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold">Company</h6>
              <p className="mb-1">About Pinterest</p>
              <p className="mb-1">Careers</p>
              <p className="mb-1">Investors</p>
            </div>
            <div className="col-md-4 mb-3">
              <h6 className="fw-bold">More from Pinterest</h6>
              <p className="mb-1">Help Center</p>
              <p className="mb-1">Businesses</p>
              <p className="mb-1">Creators</p>
              <p className="mb-1">Developers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <hr />
      <div className="d-flex flex-wrap justify-content-between small text-muted">
        <div>© 2025 Pinterest</div>
        <div className="d-flex flex-wrap gap-3">
          <span>Copyright & Trademark</span>
          <span>Terms of service</span>
          <span>Privacy & Cookies</span>
          <span>Cookie preferences</span>
           <span>Personalized ads</span>
            <span>Pinterest status</span>
        </div>
      </div>
    </div>
  );
}
