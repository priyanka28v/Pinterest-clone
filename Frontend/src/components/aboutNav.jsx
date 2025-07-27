import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaPinterest } from "react-icons/fa6";
import styles from "./AboutNav.module.css";

export function AboutNav() {
  const CompanyList = ["About us", "Leadership"];
  const ImpactList = [
    "Impact overview",
    "Prioritizing our people",
    "Building a more positive platform",
    "Protecting our planet",
    "Governance framework",
  ];

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        fixed="top"
        className={`shadow-sm px-5 py-3 ${styles.navbar}`}
      >
        <Nav className="w-100 justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <FaPinterest size={32} className="me-2" />
            <h5 className="mb-0" style={{ cursor: "pointer" }}>
              Newsroom
            </h5>
          </div>

          <div className="d-flex align-items-center gap-4">
            {/* Company Dropdown */}
            <Nav.Item className={`position-relative ${styles.navItem}`}>
              <span className={styles.navLink}>Company</span>
              <div className={styles.dropdownMenu}>
                {CompanyList.map((item, index) => (
                  <div key={index} className="dropdown-item">
                    {item}
                  </div>
                ))}
              </div>
            </Nav.Item>

            {/* Impact Dropdown */}
            <Nav.Item className={`position-relative ${styles.navItem}`}>
              <span className={styles.navLink}>Impact</span>
              <div className={styles.dropdownMenu}>
                {ImpactList.map((item, index) => (
                  <div key={index} className="dropdown-item">
                    {item}
                  </div>
                ))}
              </div>
            </Nav.Item>

            <Nav.Item>
              <span className={styles.navLink}>Press assets</span>
            </Nav.Item>

            <Nav.Item>
              <span className={styles.navLink}>Contact</span>
            </Nav.Item>
          </div>
        </Nav>
      </Navbar>
    </>
  );
}
