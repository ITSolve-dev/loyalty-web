'use client';
import { FC, useCallback, useState } from 'react';

import { Stack, Typography, Button, Modal, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

import { LinkedButton } from '@/shared/ui';
import { useUserStore } from '@/shared/stores';

import AddInstitutionCard from './AddInstitutionCard';

const ProfileSelector: FC = () => {
  const { profiles } = useUserStore();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Stack spacing={8} flexGrow={1}>
      <Stack spacing={4}>
        {profiles && profiles.length > 0 && (
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Аккаунты
          </Typography>
        )}
        {/* TODO: Remove inline styles */}
        <Stack direction="column" spacing={4} maxHeight={150} sx={{ overflow: 'scroll' }}>
          {profiles &&
            profiles.map((profile) => (
              <LinkedButton key={profile.id} startAddon={<StorefrontOutlinedIcon />}>
                <Stack direction="row" spacing={4}>
                  <Typography variant="body2" fontWeight={590}>
                    {profile.user.username}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.5 }}>
                    • {profile.role}
                  </Typography>
                </Stack>
              </LinkedButton>
            ))}
        </Stack>
      </Stack>
      <Button color="primary" variant="contained" startIcon={<AddOutlinedIcon />} sx={{ p: 10 }} onClick={handleOpen}>
        <Typography variant="body2" fontWeight={590}>
          {profiles && profiles.length > 0 ? 'Добавить новое заведение' : 'Подключить свое заведение'}
        </Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        {/* TODO: Make shared component */}
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'transparent',
            width: '100%',
            pl: 8,
            pr: 8,
          }}
        >
          <Stack spacing={8} flexGrow={1}>
            <AddInstitutionCard />
            <Button color="secondary" variant="contained" onClick={handleClose} sx={{ p: 10 }}>
              <Typography variant="body2" fontWeight={590}>
                Отмена
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

export default ProfileSelector;
