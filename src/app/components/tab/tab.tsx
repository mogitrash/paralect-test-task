import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mantine/core';
import classes from './tab.module.scss';
import './tab.scss';

interface Props {
  children: ReactNode;
  to: string;
}

export default function Tab({ children, to }: Props) {
  return (
    <Button className={classes.tab} to={to} component={NavLink} justify="left" fullWidth>
      {children}
    </Button>
  );
}
