import {
  Bell,
  Envelope,
  Hash,
  House,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Sparkle
} from '@phosphor-icons/react';

import twitterLogo from '../public/twitter-logo.svg';
import { Tweet } from './components/Tweet';

function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={twitterLogo} alt="Logo Twitter" />
        <nav className="sidebar-navigation">
          <a href="" className="active">
            <House weight="fill" size={30} />
            Home
          </a>
          <a href="">
            <Hash size={30} />
            Explorer
          </a>
          <a href="">
            <Bell size={30} />
            Notifications
          </a>
          <a href="">
            <Envelope size={30} />
            Messages
          </a>
          <a href="">
            <BookmarkSimple size={30} />
            Bookmarks
          </a>
          <a href="">
            <FileText size={30} />
            Lists
          </a>
          <a href="">
            <User size={30} />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle size={30} />
            More
          </a>
        </nav>
        <button className="new-tweet">Tweet</button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">
            <span>Home</span>
            <Sparkle size={20} />
          </div>
          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/rafaschenkel.png" alt="Rafael.png" />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>
            <button type="submit">Tweet</button>
          </form>

          <div className="separator" />

          <div className="tweets">
            <Tweet />
            <Tweet />
            <Tweet />
            <Tweet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
