import React from 'react';
import { useForm } from '@mantine/form';
import classes from './filters.module.scss';
import NumInput from '../num-input/numInput';
import CustomMultiSelect from '../custom-multi-select/custom-multi-select';
import TextButton from '../text-button/text-button';

function Filters() {
  const form = useForm<{ from: string; to: string; year: string[]; genre: string[] }>({
    mode: 'uncontrolled',
    initialValues: {
      from: '',
      to: '',
      year: [],
      genre: [],
    },
    onValuesChange: (values) => {
      console.log(values);
    },
  });

  return (
    <form className={classes.filters}>
      <CustomMultiSelect
        {...form.getInputProps('genre')}
        key={form.key('genre')}
        placeholder="Select genre"
        label="Genres"
        data={['Genre1', 'Genre2', 'Genre3']}
      />
      <CustomMultiSelect
        {...form.getInputProps('year')}
        key={form.key('year')}
        placeholder="Select release year"
        label="Release year"
        data={['2024', '2023', '2022']}
      />
      <div>
        <span className={classes.ratings}>Ratings</span>
        <div className={classes['ratings-wrapper']}>
          <NumInput key={form.key('from')} {...form.getInputProps('from')} placeholder="From" />
          <NumInput key={form.key('to')} {...form.getInputProps('to')} placeholder="To" />
        </div>
      </div>
      <TextButton onClick={() => form.reset()} key={form.key('reset')}>
        Reset filters
      </TextButton>
    </form>
  );
}

export default Filters;
