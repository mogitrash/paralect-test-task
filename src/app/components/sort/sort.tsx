import React, { useState } from 'react';
import { Select } from '@mantine/core';
import { useField } from '@mantine/form';
import { ReactComponent as Down } from '../../../assets/down.svg';
import classes from './sort.module.scss';

function Sort() {
  const [isOpen, setIsOpen] = useState(false);

  const field = useField({
    initialValue: '',
    onValueChange: (value) => {
      console.log(value);
    },
  });

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
    <Select
      {...field.getInputProps()}
      className={classes.sort}
      classNames={{
        label: classes.label,
        root: classes.root,
        input: classes.input,
        dropdown: classes.dropdown,
        option: classes.option,
      }}
      onDropdownClose={onDropdownClose}
      onDropdownOpen={onDropdownOpen}
      rightSection={rightSection}
      withCheckIcon={false}
      label="Sort by"
      placeholder="Select sort"
      data={['React', 'Angular', 'Vue']}
    />
  );
}

export default Sort;
