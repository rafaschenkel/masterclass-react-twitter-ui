import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User
} from '@phosphor-icons/react';
import twitterLogo from '../../assets/twitter-logo.svg';
import './Sidebar.css';

export function Sidebar() {
  return (
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
  );
}
