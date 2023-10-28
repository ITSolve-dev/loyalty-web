'use client';
import { FC, useMemo } from 'react';

import { CircularProgress, Box, CircularProgressProps, Paper, Grid, Typography, useTheme } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

import './styles.scss';

export type ProgressIndicatorType = 'icon' | 'linear';

type ProgressIndicatorProps = {
  start?: number;
  end: number;
  current: number;
  type?: ProgressIndicatorType;
};

const ProgressIndicator: FC<ProgressIndicatorProps & CircularProgressProps> = ({
  start = 0,
  end,
  current,
  type = 'icon',
  ...rest
}) => {
  const theme = useTheme();
  const progress = useMemo(() => (current / (end - start)) * 100, [start, end, current]);

  return type === 'icon' ? (
    <Box className="progress-indicator-icon">
      <CircularProgress value={progress} variant="determinate" size={28} {...rest} />
      <Box className="progress-indicator-icon__icon">
        <EmojiEventsIcon fontSize="small" />
      </Box>
    </Box>
  ) : (
    // TODO: Remove inline styles
    <Paper elevation={0} sx={{ width: 264, p: 7.5, backgroundColor: '#F2F2F6' }}>
      <Grid container rowGap={5} alignItems="baseline">
        <Grid item container direction="row" xs={12} columnGap={3}>
          {Array.from(Array(current).keys()).map((_, index) => (
            <Grid key={index} item xs>
              <Paper elevation={0} sx={{ bgcolor: theme.palette.primary.main, width: 18, height: 10 }} />
            </Grid>
          ))}
          {Array.from(Array(end - current).keys()).map((_, index) => (
            <Grid key={index} item xs>
              <Paper elevation={0} sx={{ bgcolor: 'white', width: 18, height: 10 }} />
            </Grid>
          ))}
        </Grid>
        <Grid item container xs columnGap={2} alignItems="baseline">
          <Grid item>
            <Typography variant="h5" fontWeight={700}>
              {current}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>баллов</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Typography sx={{ opacity: 0.3 }}>{`${current}/${end}`}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProgressIndicator;
