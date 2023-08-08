import { ArrowLeft } from '@mui/icons-material';
import { Box, Button } from '@mui/material';

interface GoBackFieldProps {
  goBackFunction: () => void;
}

const GoBackField: React.FC<GoBackFieldProps> = ({ goBackFunction }) => {
  return (
    <Box marginY={4}>
      <Button
        onClick={goBackFunction}
        startIcon={<ArrowLeft />}
        variant="outlined"
        sx={{ color: '#212121', border: '1px solid #212121' }}
      >
        Voltar
      </Button>
    </Box>
  );
};

export default GoBackField;
