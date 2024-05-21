import React, { useState } from 'react';
import { Select as MantineSelect, SelectProps } from '@mantine/core';
import { ReactComponent as Down } from '../../../assets/down.svg';
import classes from './select.module.scss';

export default function Select({ data, label, placeholder, ...props }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const rightSection = (
    <Down
      style={{
        width: 24,
        height: 24,
        transition: '0.1s',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
      }}
      stroke={isOpen ? '#9854F6' : '#ACADB9'}
    />
  );

  const onDropdownOpen = () => {
    setIsOpen(true);
  };

  const onDropdownClose = () => {
    setIsOpen(false);
  };

  return (
    <MantineSelect
      {...props}
      className={classes.sort}
      classNames={{
        label: classes.label,
        root: classes.root,
        input: isOpen ? classes['input-active'] : classes.input,
        dropdown: classes.dropdown,
        option: classes.option,
      }}
      onDropdownClose={onDropdownClose}
      onDropdownOpen={onDropdownOpen}
      rightSection={rightSection}
      withCheckIcon={false}
      label={label}
      placeholder={placeholder}
      data={data}
    />
  );
}
