import { connect } from "react-redux";
import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add tweet to the store
    console.log("New Tweet: ", text);

    setText("");
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

export default connect()(NewTweet);
