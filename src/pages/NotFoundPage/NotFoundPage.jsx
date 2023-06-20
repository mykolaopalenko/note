import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Not Found Page😉</h1>
      <Link to="/">To Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
