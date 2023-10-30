'use client';
import { FC } from 'react';

import { Stack, Typography } from '@mui/material';

import { Avatar } from '@/shared/ui';
import { useUserStore } from '@/shared/stores';

const ProfileCard: FC = () => {
  const { user } = useUserStore();

  return (
    <Stack direction="column" spacing={8} alignItems="center" sx={{ pt: 5 }}>
      <Avatar size="large">A</Avatar>
      <Stack direction="column" spacing={1}>
        <Typography textAlign="center" variant="h4" fontWeight={590}>
          {user?.firstName}
        </Typography>
        <Typography textAlign="center" variant="body2" sx={{ opacity: 0.5 }}>
          @{user?.username}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileCard;
