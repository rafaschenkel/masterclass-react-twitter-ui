import { ArrowsClockwise, ChatCircle, Heart } from '@phosphor-icons/react';
import './Tweet.css';
import { Link } from 'react-router-dom';

interface ITweet {
  content: string;
}

export function Tweet({ content }: ITweet) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/rafaschenkel.png" alt="rafaschenkel.png" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong className="tweet-username">Rafael</strong>
          <span className="tweet-user">@rafaschenkel</span>
        </div>
        <p>{content}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle size={20} />
            20
          </button>
          <button type="button">
            <ArrowsClockwise size={20} /> 20
          </button>
          <button type="button">
            <Heart size={20} />
            20
          </button>
        </div>
      </div>
    </Link>
  );
}
