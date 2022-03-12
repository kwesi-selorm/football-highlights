import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="nav">
        <div className="navbarLink">
          <Link to="/">Scores </Link>
        </div>
        {"|"}
        <div className="navbarLink">
          <Link to="/LeagueTable"> League Table</Link>
        </div>
      </div>
    </nav>
  );
}
