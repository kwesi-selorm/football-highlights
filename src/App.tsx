import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "../styles/Navbar.module.css";
import Matches from "./components/Matches";
import LeagueTable from "./components/LeagueTable";

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

        {/* Pages to be rendered */}
        <Switch>
          <Route path="/" element={<Matches />} />
        </Switch>
        <Switch>
          <Route path="/LeagueTable" element={<LeagueTable />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
