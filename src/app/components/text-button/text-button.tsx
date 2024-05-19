import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import classes from './text-button.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
}

export default function TextButton({ children, onClick, to, className }: Props) {
  const classNames = [classes['text-button'], className];

  if (to) {
    return (
      <Button className={classNames.join(' ')} to={to} component={Link}>
        {children}
      </Button>
    );
  }
  return (
    <Button className={classNames.join(' ')} onClick={onClick}>
      {children}
    </Button>
  );
}
