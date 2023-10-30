'use client';

import { useState, useCallback, FC } from 'react';

import { useMutation } from '@tanstack/react-query';
import { Modal, Container, Snackbar, Alert, Typography, useTheme } from '@mui/material';

import { useUserStore } from '@/shared/stores';
import useScansStore from '../ScanHistory/store';

import { scanQrCodeRequest } from './api';
import { QRButton, CameraView } from './ui';
import { QRInfo } from '@/shared/models';

const AddPointsViaQR: FC = () => {
  const { activeProfile } = useUserStore();
  const { addScan } = useScansStore();
  const { mutate } = useMutation({ mutationFn: scanQrCodeRequest, onSuccess: addScan });
  const theme = useTheme();
  const [camera, setCamera] = useState<boolean>(false);
  const [alert, setAlert] = useState<boolean>(false);
  const [successAlert, setSuccessAlert] = useState<boolean>(false);

  const handleActivateScan = useCallback(() => setCamera(true), []);

  const handleShowErrorMessage = useCallback(() => setAlert(true), []);

  const handleCloseAlert = useCallback(() => setAlert(false), []);

  const handleCloseScan = useCallback(() => setCamera(false), []);

  const handleCreateScan = useCallback(
    async (data: QRInfo | null) => {
      if (activeProfile && data) {
        try {
          mutate({
            amount: 1,
            object_profile_id: data.profileId,
            subject_profile_id: activeProfile.id,
            loyalty_ticket_id: 4,
          });
          setSuccessAlert(true);
        } catch (error) {
          handleShowErrorMessage();
        }
      } else {
        handleShowErrorMessage();
      }
      handleCloseScan();
    },
    [activeProfile, handleCloseScan, handleShowErrorMessage, mutate]
  );

  return (
    <Container>
      <QRButton onClick={handleActivateScan} />
      <Modal open={camera} onClose={handleCloseScan}>
        <CameraView onClose={handleCloseScan} onError={handleShowErrorMessage} onSuccess={handleCreateScan} />
      </Modal>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={alert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert severity="error" onClose={handleCloseAlert} sx={{ width: '100%', bgcolor: theme.palette.error.light }}>
          <Typography variant="body2">Не удалось отсканировать...</Typography>
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        open={successAlert}
        autoHideDuration={6000}
        onClose={() => setSuccessAlert(false)}
      >
        <Alert
          severity="success"
          onClose={() => setSuccessAlert(false)}
          sx={{ width: '100%', bgcolor: theme.palette.success.light }}
        >
          <Typography variant="body2">Успешно</Typography>
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddPointsViaQR;
