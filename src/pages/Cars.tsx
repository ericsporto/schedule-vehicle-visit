import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoBackField from '../components/Global/GoBackField';

function Cars() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };
  return (
    <Container sx={{ display: 'flex-column', justifyContent: 'center' }}>
      <Box marginTop={4}>
        <Typography variant="h4">Nossos Carros</Typography>
      </Box>
      <Box marginTop={4}>
        <Typography variant="h6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi
          officia, reprehenderit perspiciatis deleniti blanditiis repellat et
          voluptas ea ut, odit possimus neque, dolor sapiente maiores autem?
          Alias, incidunt fuga?
        </Typography>
        <Typography marginTop={2} variant="h6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi
          officia, reprehenderit perspiciatis deleniti blanditiis repellat et
          voluptas ea ut, odit possimus neque, dolor sapiente maiores autem?
          Alias, incidunt fuga?
        </Typography>
        <GoBackField goBackFunction={handleNavigate} />
      </Box>
    </Container>
  );
}

export default Cars;
