import { useEffect } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { handleInitialData } from "../actions/shared";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return <div>Starter Code</div>;
};

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
