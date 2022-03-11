import homeStyles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

function Title() {
  return (
    <>
      <h1 className={homeStyles.title}>
        <FontAwesomeIcon icon={faFutbol} /> Football Highlights
      </h1>
    </>
  );
}

export default Title;
