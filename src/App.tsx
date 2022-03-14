import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Matches from "./components/Matches/Matches";
import LeagueTable from "./components/LeagueTable/LeagueTable";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
const ball = require("./assets/soccer-ball.png");

function App() {
  return (
    <div className="App">
      {/* Navbar  with links to the matches and league table pages */}
      <Navbar />

      {/* Title */}
      <div className="titleDiv">
        <h1 className="title">Football Highlights</h1>

        <img
          src={ball}
          alt="soccer ball"
          style={{ width: 50 }}
          className="ball"
        />
      </div>

      {/* Pages to be rendered */}
      <Routes>
        <Route path="/News" element={<News />} />
        <Route path="/" element={<Matches />} />
        <Route path="/LeagueTable" element={<LeagueTable />} />
      </Routes>

      {/* Footer on both pages */}
      <Footer />
    </div>
  );
}

export default App;
