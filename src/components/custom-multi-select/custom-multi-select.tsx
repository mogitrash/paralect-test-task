import React, { useState } from 'react';
import { MultiSelect, MultiSelectProps } from '@mantine/core';
import { ReactComponent as Down } from '../../assets/down.svg';
import './custom-multi-select.scss';
import classes from './custom-multi-select.module.scss';

export default function CustomMultiSelect({
  data,
  label,
  placeholder,
  ...props
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const rightSection = (
    <Down
      style={{
        width: 24,
        height: 24,
        transition: '0.1s',
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
      }}
      stroke={isOpen ? '#9854F6' : '#D5D6DC'}
    />
  );

  const onDropdownOpen = () => {
    setIsOpen(true);
  };

  const onDropdownClose = () => {
    setIsOpen(false);
  };

  const handleChange = (values: string[]) => {
    setSelectedValues(values);
    if (props.onChange) {
      props.onChange(values);
    }
  };

  return (
    <MultiSelect
      {...props}
      className="multi-select"
      classNames={{
        label: classes.label,
        root: classes.root,
        input: classes.input,
        dropdown: classes.dropdown,
        option: classes.option,
        pill: classes.pill,
      }}
      onDropdownClose={onDropdownClose}
      onDropdownOpen={onDropdownOpen}
      rightSection={rightSection}
      withCheckIcon={false}
      label={label}
      data={data}
      placeholder={selectedValues.length ? '' : placeholder}
      value={selectedValues}
      onChange={handleChange}
    />
  );
}
