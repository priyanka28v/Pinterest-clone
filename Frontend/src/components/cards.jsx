import { Card } from "react-bootstrap";

export function Carding({ views, active, leader }) {
  return (
    <Card
      style={{
        margin: "20px",
        height: views ? "220px" : "auto",
        background: "#f2f2f2",
      }}
      className="rounded-5 d-flex justify-content-start px-4"
    >
      <Card.Body className="text-center">
        {views && (
          <>
            <Card.Title
              style={{ fontSize: "30px", fontWeight: 770, paddingTop: "15px" ,width:"14rem"}}
            >
              {views}
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "23px",
                fontWeight: "550",
                paddingBottom: "45px",
                width:"14rem"
              }}
            >
              {active}
            </Card.Text>
          </>
        )}
        {leader && (
          <Card.Img
            src={leader}
            alt="leader"
            style={{
               width: "11rem",
              height: "280px",
              objectFit: "cover",
              borderRadius: "15px",
              
            }}
          />
        )}
      </Card.Body>
    </Card>
  );
}
