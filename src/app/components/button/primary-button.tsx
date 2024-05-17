import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import classes from './primary-button.module.scss';

interface Props {
  children: ReactNode;
  to?: string;
}

export default function PrimaryButton({ children, to }: Props) {
  if (to) {
    return (
      <Button to={to} component={Link} className={classes['primary-button']}>
        {children}
      </Button>
    );
  }
  return <Button className={classes['primary-button']}>{children}</Button>;
}
