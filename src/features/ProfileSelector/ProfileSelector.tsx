'use client';
import { FC, useCallback, useState } from 'react';

import { Stack, Typography, Button, Modal, Box } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

import { LinkedButton } from '@/shared/ui';

import AddInstitutionCard from './AddInstitutionCard';

type Profile = {
  id: number;
  institution: string;
  role: string;
};

const config1: Profile[] = [
  {
    id: 1,
    institution: 'Cafe name 1',
    role: 'владелец',
  },
  {
    id: 2,
    institution: 'Cafe name 2',
    role: 'сотрудник',
  },
];

const config2: Profile[] = [];

const config3: Profile[] = [
  {
    id: 1,
    institution: 'Cafe name 1',
    role: 'владелец',
  },
  {
    id: 2,
    institution: 'Cafe name 2',
    role: 'сотрудник',
  },
  {
    id: 3,
    institution: 'Cafe name 3',
    role: 'владелец',
  },
  {
    id: 4,
    institution: 'Cafe name 4',
    role: 'сотрудник',
  },
  {
    id: 5,
    institution: 'Cafe name 5',
    role: 'владелец',
  },
  {
    id: 6,
    institution: 'Cafe name 6',
    role: 'сотрудник',
  },
];

const ProfileSelector: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const accounts = config1;

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <Stack spacing={8} flexGrow={1}>
      <Stack spacing={4}>
        {accounts.length > 0 && (
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            Аккаунты
          </Typography>
        )}
        {/* TODO: Remove inline styles */}
        <Stack direction="column" spacing={4} maxHeight={150} sx={{ overflow: 'scroll' }}>
          {accounts.map((config) => (
            <LinkedButton key={config.id} startAddon={<StorefrontOutlinedIcon />}>
              <Stack direction="row" spacing={4}>
                <Typography variant="body2" fontWeight={590}>
                  {config.institution}
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.5 }}>
                  • {config.role}
                </Typography>
              </Stack>
            </LinkedButton>
          ))}
        </Stack>
      </Stack>
      <Button color="primary" variant="contained" startIcon={<AddOutlinedIcon />} sx={{ p: 10 }} onClick={handleOpen}>
        <Typography variant="body2" fontWeight={590}>
          {accounts.length > 0 ? 'Добавить новое заведение' : 'Подключить свое заведение'}
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
