'use client';
import { MouseEvent } from 'react';
import { Paper, InputBase, IconButton, InputBaseProps, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import './styles.scss';

type SearchProps = InputBaseProps & {
  /** On click event on close icon */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;

  /** On click event on search icon */
  onSearch?: (event: MouseEvent<HTMLButtonElement>) => void;

  /** Disable close icon */
  closeIcon?: boolean;

  /** String value */
  value?: string;
};

export default function Search({
  onClose,
  onSearch,
  closeIcon = true,
  placeholder = 'Поиск...',
  value,
  ...rest
}: SearchProps) {
  return (
    <Paper elevation={0} className="search-input-wrapper">
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <Grid item xs={1.5}>
          <IconButton onClick={onSearch}>
            <SearchIcon color="primary" />
          </IconButton>
        </Grid>
        <Grid item xs>
          <InputBase {...rest} placeholder={placeholder} fullWidth />
        </Grid>
        {value && closeIcon && (
          <Grid item xs={1.5}>
            <IconButton onClick={onClose}>
              <CloseIcon color="warning" />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
