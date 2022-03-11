import timeStyles from "../styles/MatchTimes.module.css";
import moment from "moment";

function MatchTimes() {
  let twoDaysAgo = moment().subtract(2, "days").format("MMM Do");
  let yesterday = moment().subtract(1, "day").format("MMM Do");
  let tomorrow = moment().add(1, "day").format("MMM Do");
  let twoDaysFromNow = moment().add(2, "days").format("MMM Do");

  return (
    <div className={timeStyles.timeList}>
      <button
        className={timeStyles.timeButton}
        style={{ backgroundColor: "#9B0000" }}
      >
        Live
      </button>
      <button className={timeStyles.timeButton}>{twoDaysAgo}</button>
      <button className={timeStyles.timeButton}>{yesterday}</button>
      <button className={timeStyles.timeButton}>Today</button>
      <button className={timeStyles.timeButton}>{tomorrow}</button>
      <button className={timeStyles.timeButton}>{twoDaysFromNow}</button>
    </div>
  );
}

export default MatchTimes;
