import React, { memo } from 'react';
import { useForm } from '@mantine/form';
import classes from './movie-list-filters.module.scss';
import NumInput from '../../../../../components/number-input/number-input';
import MultiSelect from '../../../../../components/multi-select/multi-select';
import Button from '../../../../../components/button/button';
import Select from '../../../../../components/select/select';

function MovieListFilters() {
  const initialValues = {
    from: '',
    to: '',
    year: [],
    genre: [],
    sort: '',
  };

  const form = useForm<{ from: string; to: string; year: string[]; genre: string[]; sort: string }>(
    {
      mode: 'uncontrolled',
      initialValues,

      // onValuesChange: (values) => {
      // },
    },
  );

  const resetForm = () => {
    form.setValues({
      ...initialValues,
      sort: form.getValues().sort,
    });
  };

  return (
    <form className={classes.filters}>
      <MultiSelect
        {...form.getInputProps('genre')}
        key={form.key('genre')}
        placeholder="Select genre"
        label="Genres"
        data={['Genre1', 'Genre2', 'Genre3', 'Genre4', 'Genre5', 'Genre6']}
      />
      <MultiSelect
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
      <Button variant="subtle" onClick={() => resetForm()} key={form.key('reset')}>
        Reset filters
      </Button>
      <Select
        key={form.key('sort')}
        {...form.getInputProps('sort')}
        label="Sort by"
        placeholder="Select sort"
        data={['sort1', 'sort2', 'sort3']}
      />
    </form>
  );
}

export default memo(MovieListFilters);
