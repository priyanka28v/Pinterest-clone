import { Card } from "react-bootstrap";
import styles from "./moreActions.module.css";

export function Actions() {

  const options=[
    "Download Image",
    "Hide Pin",
    "Report Pin",
    "Get Pin embed code"
  ]
  return (
    <>
      <Card
        style={{
          height: "200px",
          width: "200px",
          paddingRight: "10px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"flex-start",
          paddingTop:"17px"
        }}
      >
        <div className={styles.cardContainer}>
          {
            options.map((option,id)=>{
             return <p key={id} className={styles.pTag}>{option}</p>
            })
          }
        </div>
      </Card>
    </>
  );
}
