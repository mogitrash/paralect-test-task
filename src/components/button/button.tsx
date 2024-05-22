import React, { ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import { Button as MantineButton } from '@mantine/core';
import classes from './button.module.scss';

interface Props {
  children: ReactNode;
  variant?: 'text';
  to?: string;
  onClick?: () => void;
  className?: string;
}

function Button({ children, to, variant, onClick, className }: Props) {
  const classNames = [className];

  if (variant === 'text') {
    classNames.push(classes['text-button']);
  } else {
    classNames.push(classes['primary-button']);
  }

  if (to) {
    return (
      <MantineButton variant={variant} to={to} component={Link} className={classNames.join(', ')}>
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton variant={variant} onClick={onClick} className={classNames.join(', ')}>
      {children}
    </MantineButton>
  );
}

export default memo(Button);
