import { Box, Typography } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { CarsModel } from '../interfaces/cars';
import { numberToReal } from '../utils/numberToReal';

interface CarCardProps {
  car: CarsModel;
}

const CarScheduleCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Box
      width={{sm:"12rem"}}
      height="18rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid black"
      padding={2}
      borderRadius={2}
      boxShadow="2px 3px 5px 0px"
    >
      <img className="img" width={150} src={car.img} alt="carro" />
      <Typography variant="body1">{car.nome}</Typography>
      <Box display="flex" flexDirection="column" gap={1}>
        <p className="paragraph">{car.desc}</p>
        <p className="paragraph">{car.km} Km</p>
        <p className="paragraph">{car.ano}</p>
        <p className="paragraph">{numberToReal(car.preco)}</p>
      </Box>
      <Box display="flex" alignItems="center">
        <LocationCityIcon sx={{ width: '15px', paddingRight: '5px' }} />
        <Typography variant="body1">{car.local}</Typography>
      </Box>
    </Box>
  );
};

export default CarScheduleCard;
