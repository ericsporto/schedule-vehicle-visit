import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoBackField from '../components/Global/GoBackField';
import { cars } from '../mocks/carsMock';
import CarCard from '../components/CarCard';

function Cars() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  const handleNavigateToCar = (id: number) => {
    navigate(`/cars/${id}`);
  };
  return (
    <Container sx={{ display: 'flex-column', justifyContent: 'center' }}>
      <Box marginTop={4}>
        <Typography variant="h4">Nossos Carros</Typography>
      </Box>
      <Box marginTop={4}>
        <Typography variant="h6">Temos a melhor frota da região!</Typography>
        <Typography variant="body2">
          Escolha o seu modelo abaixo e agende já uma visita.
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          marginY={4}
          gap={1}
          justifyContent="space-between"
        >
          {cars.map((item) => (
            <CarCard
              key={item.id}
              src={item.img}
              name={item.nome}
              place={item.local}
              redirect={() => handleNavigateToCar(item.id)}
            />
          ))}
        </Box>
        <GoBackField goBackFunction={handleNavigate} />
      </Box>
    </Container>
  );
}

export default Cars;
