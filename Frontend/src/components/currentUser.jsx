import styles from "./currentUser.module.css";
import { Card } from "react-bootstrap";

export function CurrentUser(props) {
  return (
    <>
      <Card className={styles.Card}>
        <p>Currently in</p>
        <h5>{props.user.email.replace("/[0-9]/", "")}</h5>
        <p>personal</p>
        <p>{props.user.email}</p>
        <div>
          <h5>Convert to Bussiness</h5>
        </div>
        <div>
          <p>Your Accounts</p>
          <h5>Add Pinterest Account</h5>
          <h5>Log out</h5>
        </div>
      </Card>
    </>
  );
}
