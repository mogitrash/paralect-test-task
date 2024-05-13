import React, { ReactNode } from 'react';
import { Button } from '@mantine/core';
import classes from './tab.module.scss';

interface Props {
  children: ReactNode;
  active: boolean;
}

export default function Tab({ children, active }: Props) {
  const className = classes.tab + (active ? ` ${classes['tab-active']}` : '');

  return (
    <Button className={className} component="a" justify="left" fullWidth>
      {children}
    </Button>
  );
}
