import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerStyles from "../styles/Footer.module.css";
import heartStyles from "../styles/Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={footerStyles.footer}>
        <p>
          Made with{" "}
          <FontAwesomeIcon className={heartStyles.heart} icon={faHeart} /> by
          Jeffery
        </p>
      </footer>
    </>
  );
}

export default Footer;
