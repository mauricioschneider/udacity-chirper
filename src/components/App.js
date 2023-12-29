import { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div>{props.loading === true ? null : <Dashboard />}</div>;
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
