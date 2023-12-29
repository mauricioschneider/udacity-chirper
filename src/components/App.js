import { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <Dashboard />;
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
