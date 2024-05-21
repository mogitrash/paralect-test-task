import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '../tab/tab';
import classes from './navbar.module.scss';
import logo from '../../assets/arrowFlicks-logo.svg';

export default function Navbar() {
  return (
    <aside>
      <nav className={classes.navbar}>
        <Link to="/" className={classes.logo}>
          <img alt="ArrowFlick logo" src={logo} />
        </Link>
        <div className={classes.buttons}>
          <Tab to="/">Movies</Tab>
          <Tab to="rated">Rated movies</Tab>
        </div>
      </nav>
    </aside>
  );
}
