import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import GoBackField from '../components/Global/GoBackField';
import { useNavigate, useParams } from 'react-router-dom';
import { cars } from '../mocks/carsMock';
import { CarsModel } from '../interfaces/cars';
import CarScheduleCard from '../components/CarScheduleCard';
import ScheduleField from '../components/ScheduleField';
import { schedule } from '../mocks/scheduleMock';
import { UserModel } from '../interfaces/user';

interface loggedUserProps{
  user: UserModel
}

const CarsPage:React.FC<loggedUserProps> = ({user}) => {
  const [carData, setCarData] = useState<CarsModel>();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/cars');
  };

  // Aqui eu faria uma requisição ao carregar a página passando o id para trazer os dados
  // do carro do back usando axios.
  // Como não tenho uma integração, estou percorrendo o meu array de carros e comparando
  // o id que veio na url. Se for igual, eu guardo os dados no meu carData e exponho.
  useEffect(() => {
    cars.map((item) => {
      if (id && +id === item.id) {
        setCarData(item);
      }
    });
  }, [id]);

  return (
    <Container sx={{ display: 'flex-column', justifyContent: 'center' }}>
      <Box marginTop={4}>
        <Typography variant="h4">{`${carData?.nome}`}</Typography>
      </Box>
      <Box marginTop={4}>
        <Box display="flex" justifyContent="space-around">
          {carData && <CarScheduleCard car={carData} />}
          {carData && <ScheduleField data={schedule} user={user} car={carData} />}
        </Box>
        <GoBackField goBackFunction={handleNavigate} />
      </Box>
    </Container>
  );
}

export default CarsPage;
