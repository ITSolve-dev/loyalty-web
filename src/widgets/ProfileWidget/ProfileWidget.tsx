'use client';
import { FC } from 'react';

import { Stack } from '@mui/material';

import { ProfileCard } from '@/entities';
import { ProfileSelector } from '@/features';

const ProfileWidget: FC = () => {
  return (
    <Stack flexGrow={1} spacing={12}>
      <ProfileCard />
      <ProfileSelector />
    </Stack>
  );
};

export default ProfileWidget;
