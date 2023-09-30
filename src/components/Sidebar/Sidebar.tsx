import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User
} from '@phosphor-icons/react';
import twitterLogo from '../../assets/twitter-logo.svg';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo Twitter" />
      <nav className="sidebar-navigation">
        <NavLink to="/">
          <House weight="fill" size={30} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/explorer">
          <Hash size={30} />
          <span>Explorer</span>
        </NavLink>
        <NavLink to="/notifications">
          <Bell size={30} />
          <span>Notifications</span>
        </NavLink>
        <NavLink to="/messages">
          <Envelope size={30} />
          <span>Messages</span>
        </NavLink>
        <NavLink to="/bookmarks">
          <BookmarkSimple size={30} />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/lists">
          <FileText size={30} />
          <span>Lists</span>
        </NavLink>
        <NavLink to="/profile">
          <User size={30} />
          <span>Profile</span>
        </NavLink>
        <NavLink to="/more">
          <DotsThreeCircle size={30} />
          <span>More</span>
        </NavLink>
      </nav>
      <button className="new-tweet">
        <Pencil size={30} />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
