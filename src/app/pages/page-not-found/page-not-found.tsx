import React from 'react';
import { Link } from 'react-router-dom';

import classes from './page-not-found.module.scss';
import notFound from '../../../assets/not-found.svg';
import logo from '../../../assets/arrowFlicks-logo.svg';
import PrimaryButton from '../../components/primary-button/primary-button';

function PageNotFound() {
  return (
    <main className={classes['page-not-found']}>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="arrowFlicks" />
      </Link>
      <div className={classes.wrapper}>
        <img src={notFound} alt="Page not found" />
        <div className={classes.info}>
          <span className={classes.text}>We can’t find the page you are looking for</span>
          <PrimaryButton to="/">go home</PrimaryButton>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
