'use client';
import { FC } from 'react';

import { Grid } from '@mui/material';

import { ScheduleCard } from '@/shared/ui';

type TimeGap = {
  start: string;
  end: string;
};

type Schedule = {
  id: number;
  title: string;
  days: TimeGap;
  times: TimeGap;
  marked: boolean;
};

type InstitutionScheduleProps = {
  schedules: Schedule[];
};

const InstitutionSchedule: FC<InstitutionScheduleProps> = ({ schedules }) => {
  return (
    <Grid container rowGap={5}>
      {schedules.map((schedule) => (
        <Grid key={schedule.id} item xs={6}>
          <ScheduleCard title={schedule.title} marked={schedule.marked} />
        </Grid>
      ))}
    </Grid>
  );
};

export default InstitutionSchedule;
