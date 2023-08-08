import { ArrowLeft } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

interface GoBackFieldProps {
  goBackFunction: () => void;
}

const GoBackField: React.FC<GoBackFieldProps> = ({ goBackFunction }) => {
  return (
    <Box marginY={2}>
      <Button
        onClick={goBackFunction}
        startIcon={<ArrowLeft />}
        color='inherit'
        variant="contained"
        sx={{ color: '#212121', border: '1px solid #212121' }}
      >
        Voltar
      </Button>
    </Box>
  );
};

export default GoBackField;
