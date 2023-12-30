import { connect } from "react-redux";
import { useState } from "react";
import PropTypes from "prop-types";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";

const NewTweet = ({ dispatch, id }) => {
  const nagivate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddTweet(text, id));

    setText("");

    if (!id) {
      nagivate("/");
    }
  };

  const tweetLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          className="textarea"
          placeholder="What's happening?"
          maxLength={280}
          value={text}
          onChange={handleChange}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text.trim() === ""}>
          Tweet
        </button>
      </form>
    </div>
  );
};

NewTweet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string,
};

export default connect()(NewTweet);
