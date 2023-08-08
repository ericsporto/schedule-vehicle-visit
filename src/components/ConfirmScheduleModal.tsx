import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocationCityIcon from '@mui/icons-material/LocationCity';

interface ConfirmScheduleModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  month: string;
  day: number | undefined;
  hour: string;
  address: string;
}

const ConfirmScheduleModal: React.FC<ConfirmScheduleModalProps> = ({
  open,
  setOpen,
  month,
  day,
  hour,
  address,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/cars');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="xl"
      >
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
          justifyContent="center"
          alignItems="center"
          paddingTop={15}
        >
          <CheckCircleIcon color="success" />
          <Typography variant="h5">Agendamento concluído!</Typography>
        </Box>

        <DialogContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <span className="paragraph">
              {day} de {month} de 2023, às {hour}
            </span>
            <span className="paragraph"> | </span>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={1}
            >
              <LocationCityIcon sx={{ width: '15px', paddingRight: '5px' }} />
              <span className="paragraph">{address}</span>
            </Box>
          </Box>
          <Typography></Typography>
        </DialogContent>
        <DialogActions>
          <Box display="flex" justifyContent="center" width="100%" padding={10}>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleNavigate()}
            >
              Outros veículos
            </Button>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmScheduleModal;
