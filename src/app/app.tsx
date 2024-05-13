import React from 'react';
import classes from './app.module.scss';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
    </div>
  );
}

export default App;
