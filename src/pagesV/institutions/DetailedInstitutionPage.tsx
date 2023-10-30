'use client';
import { FC } from 'react';

import { Divider, Paper, Typography, Stack } from '@mui/material';

import { InstitutionPreviewLogo, Contact } from '@/shared/ui';
import { InstitutionSchedule } from '@/features';
import { InstitutionMenu } from '@/widgets';

const DetailedInstitutionPage: FC = () => {
  return (
    <Stack direction="column" spacing={10}>
      <InstitutionPreviewLogo />

      <InstitutionSchedule
        schedules={[
          {
            id: 1,
            title: 'Пн-Пт',
            marked: false,
            days: {
              start: '',
              end: '',
            },
            times: {
              start: '',
              end: '',
            },
          },
          {
            id: 2,
            title: 'Сб-Вс',
            marked: true,
            days: {
              start: '',
              end: '',
            },
            times: {
              start: '',
              end: '',
            },
          },
        ]}
      />
      <Stack direction="column" spacing={5} sx={{ pl: 2, pr: 2 }}>
        <Divider />
        <Contact type="telegram" onClick={() => console.log(1)}>
          cafe_grodno
        </Contact>
        <Contact type="phone" onClick={() => console.log(1)}>
          +375 (44) 123-45-67
        </Contact>
      </Stack>
      <Stack direction="column" spacing={4} sx={{ pl: 2, pr: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Вознаграждение за N баллов:
        </Typography>
        <Typography>Reward name</Typography>
      </Stack>
      <Paper elevation={0} sx={{ p: 8 }}>
        <Typography fontWeight={700}>Условия накопления баллов</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur modi eos quaerat minus ipsa eum dolorem
          quasi nulla reprehenderit iste deleniti laboriosam, rem ratione quod corrupti, voluptatibus inventore culpa
          fuga.
        </Typography>
      </Paper>
      <InstitutionMenu />
    </Stack>
  );
};

export default DetailedInstitutionPage;
