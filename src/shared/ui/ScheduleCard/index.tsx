import { FC } from 'react';
import classNames from 'classnames';

import { Paper, Grid, Typography } from '@mui/material';

import './styles.scss';

type ScheduleCardProps = {
  title?: string;
  marked?: boolean;
};

const ScheduleCard: FC<ScheduleCardProps> = ({ title, marked = false }) => {
  return (
    <Grid container className="schedule-card">
      <Grid
        container
        alignItems="start"
        justifyContent="start"
        className={classNames('schedule-card__title-wrapper', { marked })}
      >
        <Typography variant="body2" fontWeight={590}>
          {title}
        </Typography>
      </Grid>
      <Grid container className="schedule-card__card-wrapper">
        <Paper elevation={0} className="schedule-card__card-wrapper__card">
          <Typography variant="body2">7:00–22:00</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ScheduleCard;
