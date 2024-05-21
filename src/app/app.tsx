import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from './app.module.scss';
import Navbar from '../components/navbar/navbar';

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
