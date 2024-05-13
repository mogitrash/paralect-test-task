import React from 'react';
import Tab from '../tab/tab';
import classes from './navbar.module.scss';
import logo from '../../../assets/arrowFlicks-logo.svg';

export default function Navbar() {
  return (
    <aside className={classes.navbar}>
      <a href="https://mantine.dev/core/button/" className={classes.logo}>
        <img alt="ArrowFlick logo" src={logo} />
      </a>
      <div className={classes.buttons}>
        <Tab active>Movies</Tab>
        <Tab active={false}>Rated movies</Tab>
      </div>
    </aside>
  );
}
