import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Matches from "./components/Matches/Matches";
import LeagueTable from "./components/LeagueTable/LeagueTable";
import { FaFutbol } from "react-icons/fa";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar  with links to the matches and league table pages */}
        <Navbar />

        {/* Title */}
        <h1 className="title">
          <FaFutbol />
          <br />
          Football Highlights
        </h1>

        {/* Pages to be rendered */}
        <Routes>
          <Route path="/" element={<Matches />} />
          <Route path="/LeagueTable" element={<LeagueTable />} />
        </Routes>
      </Router>

      {/* Footer on both pages */}
      <Footer />
    </div>
  );
}

export default App;
