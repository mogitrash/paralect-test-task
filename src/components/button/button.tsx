import React, { ReactNode, memo } from 'react';
import { Link } from 'react-router-dom';
import { Button as MantineButton, ButtonVariant } from '@mantine/core';
import classes from './button.module.scss';

interface Props {
  children: ReactNode;
  variant?: ButtonVariant;
  to?: string;
  onClick?: () => void;
  className?: string;
}

function Button({ children, to, variant, onClick, className }: Props) {
  const classNames = [className];

  if (variant === 'subtle') {
    classNames.push(classes['text-button']);
  } else {
    classNames.push(classes['primary-button']);
  }

  if (to) {
    return (
      <MantineButton to={to} component={Link} className={classNames.join(', ')}>
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton onClick={onClick} className={classNames.join(', ')}>
      {children}
    </MantineButton>
  );
}

export default memo(Button);
