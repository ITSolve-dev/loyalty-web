'use client';
import { useTheme } from '@mui/material';
import { FC, ReactNode, MouseEvent } from 'react';

import { Paper, Grid } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type LinkedButtonProps = {
  children: ReactNode | string;
  startAddon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
};

const LinkedButton: FC<LinkedButtonProps> = ({ children, startAddon, onClick }) => {
  const theme = useTheme();
  console.log(theme);
  return (
    // TODO: Remove inline styles
    <Paper onClick={onClick} sx={{ backgroundColor: '#F5F5F5', p: 4 }} className="linked-btn" elevation={0}>
      <Grid container columnGap={4} alignItems="center" justifyContent="center">
        {startAddon && (
          <Grid item xs="auto" container alignItems="baseline">
            {startAddon}
          </Grid>
        )}
        <Grid item xs container alignItems="baseline" sx={{ pt: 1 }}>
          {children}
        </Grid>
        <Grid item xs="auto" container alignItems="baseline">
          <NavigateNextIcon />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LinkedButton;
