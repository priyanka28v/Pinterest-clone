import { FaLink } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import styles from "./shareModal.module.css";
import { Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { Card } from "react-bootstrap";

export function ShareModal({ pinId }) {
  const pinUrl = `http://localhost:5173/PinDetails/${pinId}`;

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    //blank ka mtlb ye user ko nya tab mila
    //   noopener: Prevent karta hai ki new tab original tab ko access na kare (security!)
    // noreferrer: Referrer (kaunsi site se aaye ho) browser ke through pass nahi hoti
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pinUrl);
    alert(" Link copied to clipboard!");
  };
  return (
    <>
      <Card className={styles.container}>
        <h5>share</h5>
        <div className={styles.share}>
          <div className={styles.icons} onClick={handleCopyLink}>
            <FaLink size={27} />
            <h6>Copy link</h6>
          </div>

          <div
            className={styles.icons}
            onClick={() =>
              openInNewTab(
                `https://wa.me/?text=${encodeURIComponent(
                  `Check this pin: ${pinUrl}`
                )}`
              )
            }
            //encodeURIComponent(...)
            // Is function ka kaam hai:
            // Jo bhi string hum WhatsApp URL mein bhej rahe hain, usko URL-safe banana.
            // Jaise spaces ( ), special characters (:, /, &, etc.) ko proper %20, %3A, etc. mein convert karna.
            //https://wa.me/?text=Check%20this%20pin%3A%20https%3A%2F%2Fyourapp.com%2Fpin%2F123   ye ese jayega taki url break na ho ajaye
            //agr mai ye nhi lagti toh datahttps://wa.me/?text=Check this pin: https://yourapp.com/pin/123
            // ese jayega  or bich mai spaces ayege toh url break ho hayag
          >
            <IoLogoWhatsapp size={27} style={{ color: "lightgreen" }} />
            <h6>WhatsApp</h6>
          </div>

          <div
            className={styles.icons}
            onClick={() =>
              openInNewTab(
                `https://www.facebook.com/dialog/send?link=${encodeURIComponent(
                  pinUrl
                )}&app_id=YOUR_FB_APP_ID&redirect_uri=${encodeURIComponent(
                  pinUrl
                )}`
              )
            }
          >
            <FaFacebookMessenger
              size={27}
              style={{
                backgroundImage: "linear-gradient(45deg, #00C6FF, #0072FF)",
                borderRadius: "50%",
                padding: "6px",
                color: "white",
              }}
            />
            <h6>Messenger</h6>
          </div>

          <div
            className={styles.icons}
            onClick={() =>
              openInNewTab(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  pinUrl
                )}`
              )
            }
          >
            <FaFacebook size={27} style={{ color: "blue" }} />
            <h6>Facebook</h6>
          </div>

          <div
            className={styles.icons}
            onClick={() =>
              openInNewTab(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `Check this pin: ${pinUrl}`
                )}`
              )
            }
          >
            <BsTwitterX size={27} style={{ color: "black" }} />
            <h6>X</h6>
          </div>
        </div>
        <hr
          style={{
            width: "500px",
            height: "1px",
            backgroundColor: "black",
            border: "none",
            margin: "20px auto",
          }}
        />

        <div className={styles.searchContainer}>
          <Form className="position-relative">
            <CiSearch
              size={22}
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
              }}
            />

            <Form.Control
              size="sm"
              type="search"
              placeholder="Search by name or email"
              className="ps-5 pe-5"
              aria-label="Search"
              style={{
                width: "400px",
                height: "35px",
                fontSize: "14px",
                background: "#f2f2f2",
                borderRadius: "20px",
              }}
            />
          </Form>
        </div>
      </Card>
    </>
  );
}
