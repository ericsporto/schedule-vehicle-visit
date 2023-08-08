import { Box, Button, Typography } from '@mui/material';
import LocationCityIcon from '@mui/icons-material/LocationCity';

interface CarCardProps {
  src: string;
  name: string;
  place: string;
  redirect: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ src, name, place, redirect }) => {
  return (
    <Box
      width="10rem"
      height="12rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      border="1px solid black"
      padding={2}
      borderRadius={2}
      boxShadow="2px 3px 5px 0px"
    >
      <img className="img" width={150} src={src} alt="carro" />
      <Typography variant="body1">{name}</Typography>
      <Box display="flex" alignItems="center">
        <LocationCityIcon sx={{ width: '15px', paddingRight: '5px' }} />
        <Typography variant="body1">{place}</Typography>
      </Box>
      <Button onClick={redirect} color='error' variant="contained">Ver</Button>
    </Box>
  );
};

export default CarCard;
