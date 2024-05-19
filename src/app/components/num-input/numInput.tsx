import React from 'react';
import { NumberInput, NumberInputProps } from '@mantine/core';
import classes from './numInput.module.scss';

export default function NumInput({ placeholder, ...props }: NumberInputProps) {
  return (
    <NumberInput
      {...props}
      variant="unstyled"
      placeholder={placeholder}
      classNames={{
        root: classes.root,
        input: classes.input,
      }}
    />
  );
}
