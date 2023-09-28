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
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={twitterLogo} alt="Logo Twitter" />
      <nav className="sidebar-navigation">
        <NavLink to="/">
          <House weight="fill" size={30} />
          Home
        </NavLink>
        <NavLink to="/explorer">
          <Hash size={30} />
          Explorer
        </NavLink>
        <NavLink to="/notifications">
          <Bell size={30} />
          Notifications
        </NavLink>
        <NavLink to="/messages">
          <Envelope size={30} />
          Messages
        </NavLink>
        <NavLink to="/bookmarks">
          <BookmarkSimple size={30} />
          Bookmarks
        </NavLink>
        <NavLink to="/lists">
          <FileText size={30} />
          Lists
        </NavLink>
        <NavLink to="/profile">
          <User size={30} />
          Profile
        </NavLink>
        <NavLink to="/more">
          <DotsThreeCircle size={30} />
          More
        </NavLink>
      </nav>
      <button className="new-tweet">Tweet</button>
    </aside>
  );
}
