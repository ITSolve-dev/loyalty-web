'use client';
import { FC, MouseEvent, useCallback, useState } from 'react';

import { ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';

import { filterConfig } from '../../config';

import './FilterSwitcher.scss';

const FilterSwitcher: FC = () => {
  const [filter, setFilter] = useState<FilterType>('WEEK');

  const handleSwitch = useCallback(
    (event: MouseEvent<HTMLElement>, value: FilterType | null) => setFilter((prev) => (value ? value : prev)),
    [setFilter]
  );
  return (
    <ToggleButtonGroup color="primary" size="small" fullWidth exclusive value={filter} onChange={handleSwitch}>
      {filterConfig.map((filter) => (
        <ToggleButton value={filter.value}>
          <Typography variant="caption" fontWeight={590}>
            {filter.title}
          </Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterSwitcher;
