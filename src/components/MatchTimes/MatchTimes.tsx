import "./MatchTimes.css";
import moment from "moment";

function MatchTimes() {
  let twoDaysAgo = moment().subtract(2, "days").format("MMM Do");
  let yesterday = moment().subtract(1, "day").format("MMM Do");
  let tomorrow = moment().add(1, "day").format("MMM Do");
  let twoDaysFromNow = moment().add(2, "days").format("MMM Do");

  return (
    <div className="timeList">
      <button className="timeButton" style={{ backgroundColor: "#9B0000" }}>
        Live
      </button>
      <button className="timeButton">{twoDaysAgo}</button>
      <button className="timeButton">{yesterday}</button>
      <button className="timeButton">Today</button>
      <button className="timeButton">{tomorrow}</button>
      <button className="timeButton">{twoDaysFromNow}</button>
    </div>
  );
}

export default MatchTimes;
