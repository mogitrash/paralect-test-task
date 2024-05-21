import React from 'react';
import { NumberInput as MantineNumberInput, NumberInputProps } from '@mantine/core';
import classes from './number-input.module.scss';

export default function NumberInput({ placeholder, ...props }: NumberInputProps) {
  return (
    <MantineNumberInput
      {...props}
      variant="unstyled"
      placeholder={placeholder}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
        control: classes.control,
      }}
    />
  );
}
