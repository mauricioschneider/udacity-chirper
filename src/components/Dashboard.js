import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tweet from "./Tweet";

const Dashboard = (props) => {
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.tweetIds.map((id) => (
          <li key={id}>
            <Tweet id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tweets }) => ({
  tweetIds: Object.keys(tweets).sort(
    (a, b) => tweets[b].timestamp - tweets[a].timestamp
  ),
});

Dashboard.propTypes = {
  tweetIds: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Dashboard);
