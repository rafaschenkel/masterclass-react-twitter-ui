import {
  Bell,
  Envelope,
  Hash,
  House,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle
} from '@phosphor-icons/react';

import twitterLogo from '../public/twitter-logo.svg';

function App() {
  return (
    <div className="layout">
      <aside className="sideBar">
        <header className="sideBar-header">
          <img src={twitterLogo} alt="" />
        </header>
        <div className="sideBar-links">
          <a href="" className="sideBar-link active">
            <House weight="fill" size={30} />
            Home
          </a>
          <a href="" className="sideBar-link">
            <Hash size={30} />
            Explorer
          </a>
          <a href="" className="sideBar-link">
            <Bell size={30} />
            Notifications
          </a>
          <a href="" className="sideBar-link">
            <Envelope size={30} />
            Messages
          </a>
          <a href="" className="sideBar-link">
            <BookmarkSimple size={30} />
            Bookmarks
          </a>
          <a href="" className="sideBar-link">
            <FileText size={30} />
            Lists
          </a>
          <a href="" className="sideBar-link">
            <User size={30} />
            Profile
          </a>
          <a href="" className="sideBar-link">
            <DotsThreeCircle size={30} />
            More
          </a>
        </div>
        <button>Tweet</button>
      </aside>
      <div className="content">k</div>
    </div>
  );
}

export default App;
