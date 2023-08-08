import { Container , Box, Typography} from "@mui/material";
import { UserModel } from "../interfaces/user";

interface loggedUserProps{
  user: UserModel
}

const Home:React.FC<loggedUserProps> = ({user}) => {
  return (
    <Container sx={{ display: 'flex-column', justifyContent: 'center' }}>
      <Box marginTop={4}>
        <Typography variant="h4">Bem vindo {`${user.name}`},</Typography>
      </Box>
      <Box marginTop={4}>
        <Typography variant="h6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi
          officia, reprehenderit perspiciatis deleniti blanditiis repellat et
          voluptas ea ut, odit possimus neque, dolor sapiente maiores autem?
          Alias, incidunt fuga?
        </Typography>
        <Box marginY={4}>

        </Box>
      </Box>
    </Container>
  );
}

export default Home;
