import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Matches from "./components/Matches/Matches";
import LeagueTable from "./components/LeagueTable/LeagueTable";
import { FaFutbol } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar  with links to the matches and league table pages */}
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

        {/* Title */}
        <h1 className="title">
          <FaFutbol /> Football Highlights
        </h1>

        {/* Pages to be rendered */}
        <Routes>
          <Route path="/" element={<Matches />} />
          <Route path="/LeagueTable" element={<LeagueTable />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
