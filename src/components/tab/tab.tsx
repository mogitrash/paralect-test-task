import React, { ReactNode, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@mantine/core';
import classes from './tab.module.scss';

interface Props {
  children: ReactNode;
  to: string;
}

function Tab({ children, to }: Props) {
  return (
    <Button className={classes.tab} to={to} component={NavLink} justify="left" fullWidth>
      {children}
    </Button>
  );
}

export default memo(Tab);
