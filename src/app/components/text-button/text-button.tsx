import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import classes from './text-button.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
}

export default function TextButton({ children, onClick, to }: Props) {
  if (to) {
    return (
      <Button to={to} component={Link} className={classes['text-button']}>
        {children}
      </Button>
    );
  }
  return (
    <Button onClick={onClick} className={classes['text-button']}>
      {children}
    </Button>
  );
}
