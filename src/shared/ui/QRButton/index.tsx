'use client';
import { useCallback, useState, MouseEvent } from 'react';
import Image from 'next/image';

import { Paper, Icon, Modal, Stack, Button, Typography, Box } from '@mui/material';

import QR from '../QR';
import { QrExampleIcon } from '@/assets/icons';

import './styles.scss';

export default function QRButton() {
  const [open, setOpen] = useState<boolean>(false);

  const handleCloseModal = useCallback((event: MouseEvent<HTMLDivElement | HTMLButtonElement>, reason?: string) => {
    if (reason && reason === 'backdropClick') {
      return;
    }
    setOpen(false);
  }, []);

  const handleShowModal = useCallback(() => setOpen(true), []);

  return (
    <>
      <Paper className="qr-code-fixed" elevation={0} onClick={handleShowModal}>
        <Icon className="qr-code-fixed__icon">
          <Image className="qr-code-fixed__icon__image" src={QrExampleIcon} alt="qr-icon" />
        </Icon>
      </Paper>
      <Modal open={open} onClose={handleCloseModal}>
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
          <Stack direction="column" spacing={16}>
            <QR />
            <Button color="primary" variant="contained" sx={{ p: 10 }} onClick={handleCloseModal}>
              <Typography variant="body2" fontWeight={590}>
                Закрыть
              </Typography>
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
