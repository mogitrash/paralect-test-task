import React, { memo } from 'react';
import { ComboboxData } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './movie-list-filters.module.scss';
import NumInput from '../../../../../components/number-input/number-input';
import MultiSelect from '../../../../../components/multi-select/multi-select';
import Button from '../../../../../components/button/button';
import Select from '../../../../../components/select/select';
import { FilterFormValue } from '../../../../../models/filter-form-value.model';

const sorts: ComboboxData = [
  {
    value: 'original_title.asc',
    label: 'Original Title Ascending',
  },
  {
    value: 'original_title.desc',
    label: 'Original Title Descending',
  },
  {
    value: 'popularity.asc',
    label: 'Least Popular',
  },
  {
    value: 'popularity.desc',
    label: 'Most Popular',
  },
  {
    value: 'revenue.asc',
    label: 'Smallest Revenue',
  },
  {
    value: 'revenue.desc',
    label: 'Biggest Revenue',
  },
  {
    value: 'primary_release_date.asc',
    label: 'Oldest',
  },
  {
    value: 'primary_release_date.desc',
    label: 'Newest',
  },
  {
    value: 'title.asc',
    label: 'Title Ascending',
  },
  {
    value: 'title.desc',
    label: 'Title Descending',
  },

  {
    value: 'vote_average.asc',
    label: 'Least Rated',
  },
  {
    value: 'vote_average.desc',
    label: 'Most Rated',
  },
  {
    value: 'vote_count.asc',
    label: 'Least Voted',
  },
  {
    value: 'vote_count.desc',
    label: 'Most Voted',
  },
];

function MovieListFilters({
  handleFiltersChange,
  genres,
  years,
}: {
  handleFiltersChange: (formValue: FilterFormValue) => void;
  genres: ComboboxData;
  years: string[];
}) {
  const initialValues = {
    from: '',
    to: '',
    year: '',
    genres: [],
    sort: '',
  };

  const form = useForm<{ from: string; to: string; year: string; genres: number[]; sort: string }>({
    mode: 'uncontrolled',
    initialValues,

    onValuesChange: (values) => {
      handleFiltersChange(values);
    },
  });

  const resetForm = () => {
    form.setValues({
      ...initialValues,
      sort: form.getValues().sort,
    });
  };

  return (
    <form className={classes.filters}>
      <MultiSelect
        {...form.getInputProps('genres')}
        key={form.key('genres')}
        placeholder="Select genre"
        label="Genres"
        data={genres}
      />
      <Select
        {...form.getInputProps('year')}
        key={form.key('year')}
        placeholder="Select release year"
        label="Release year"
        data={years}
      />
      <div>
        <span className={classes.ratings}>Ratings</span>
        <div className={classes['ratings-wrapper']}>
          <NumInput key={form.key('from')} {...form.getInputProps('from')} placeholder="From" />
          <NumInput key={form.key('to')} {...form.getInputProps('to')} placeholder="To" />
        </div>
      </div>
      <Button variant="text" onClick={() => resetForm()} key={form.key('reset')}>
        Reset filters
      </Button>
      <Select
        key={form.key('sort')}
        {...form.getInputProps('sort')}
        label="Sort by"
        placeholder="Select sort"
        data={sorts}
      />
    </form>
  );
}

export default memo(MovieListFilters);
