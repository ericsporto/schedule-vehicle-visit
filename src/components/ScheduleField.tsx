import { Box, Button, Typography } from '@mui/material';
import { Schedule, ScheduleModel } from '../interfaces/schedule';
import { useEffect, useState } from 'react';
import ConfirmScheduleModal from './ConfirmScheduleModal';
import axios from 'axios';
import Spinner from './Global/Spinner';
import { UserModel } from '../interfaces/user';
import { CarsModel } from '../interfaces/cars';

interface ScheduleFieldProps {
  data: ScheduleModel[];
  user: UserModel;
  car: CarsModel;
}

const ScheduleField: React.FC<ScheduleFieldProps> = ({ data, user, car }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [howMonth, setHowMonth] = useState('');
  const [howSchedule, setHowSchedule] = useState<ScheduleModel[]>();
  const [howDay, setHowDay] = useState<number>();
  const [howScheduleDay, setHowScheduleDay] = useState<Schedule[]>();
  const [howHour, setHowHour] = useState('');
  const [confirm, setConfirm] = useState(false);
  const disabled = howSchedule && howHour ? false : true;

  useEffect(() => {
    const choice: ScheduleModel[] = [];
    data.map((item) => {
      if (item.month === howMonth) {
        choice.push(item);
        setHowSchedule(choice);
      }
    });
  }, [data, howMonth]);

  useEffect(() => {
    const choiceDay: Schedule[] = [];
    data.map((item) => {
      if (item.month === howMonth) {
        howSchedule?.map((days) => {
          days.days.map((day) => {
            if (day.day === howDay) {
              day.schedules.map((hour) => {
                choiceDay.push(hour);
                setHowScheduleDay(choiceDay);
              });
            }
          });
        });
      }
    });
  }, [data, howDay, howMonth, howSchedule]);

  const handleMonth = (value: string) => {
    setHowMonth(value);
  };

  const handleDay = (value: number) => {
    setHowDay(value);
  };

  const handleChoiceHour = (value: string) => {
    setHowHour(value);
  };

  const handleChoiceConfirm = () => {
    setConfirm(true);
  };

  //Aqui eu faria a requisição passando os dados de agendamento para o back
  // Como não tenho integração, simulei o envio que pode ser consultado com o log no erro
  const submit = () => {
    setIsLoading(true);

    const baseApi = 'https://alguma-api';

    const payload = {
      month: howMonth,
      day: howDay,
      hour: howHour,
    };

    axios
      .post(`${baseApi}/schedule`, payload, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response) {
          //Aqui seguiria o fluxo de abertura do modal de confirmação do agendamento
          //Seguindo o raciocínio, vou deixar o modal abrir no erro conforme catch
          setIsLoading(false);
          setOpen(true);
        }
      })
      .catch((error) => {
        if (error) {
          //Como esta requisição retornará erro, passarei o payload no log aqui
          //para fins de entender o que estava sendo enviado e dei sequencia no fluxo de
          //abertura do modal de confirmação
          setIsLoading(false);
          setOpen(true);
          console.log('Payload:', payload);
        }
      });
  };

  return (
    <>
      <ConfirmScheduleModal
        open={open}
        setOpen={setOpen}
        month={howMonth}
        day={howDay}
        hour={howHour}
        address={car.local}
      />
      <Box
        width={{ sm: '30rem' }}
        height="20rem"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid black"
        borderRadius={2}
        boxShadow="2px 3px 5px 0px"
        overflow="hidden"
        marginTop={{ xs: '10px', sm: '0px' }}
      >
        <Box
          display="flex"
          justifyContent="center"
          width="95%"
          bgcolor="#212121"
          color="white"
          padding={2}
        >
          {!confirm
            ? 'Agende o dia e o horário da sua visita'
            : 'Concluir agendamento'}
        </Box>
        {!confirm && (
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            padding={{ sm: 2 }}
            width={{ sm: '80%' }}
            alignItems="flex-start"
          >
            <Box display="flex" width="100%" justifyContent="space-evenly">
              {data.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => handleMonth(item.month)}
                  sx={{ color: '#212121' }}
                >
                  {item.month} / {item.year}
                </Button>
              ))}
            </Box>
            {howMonth === 'Agosto' && (
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="center"
                marginTop={1}
              >
                <p className="paragraph">Dias disponíveis</p>
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  marginTop={2}
                >
                  {howSchedule?.map((item) => {
                    return item.days.map((day, index) => (
                      <Box display="flex" key={index}>
                        <button
                          className="btn"
                          onClick={() => handleDay(day.day)}
                        >
                          {day.day}
                        </button>
                      </Box>
                    ));
                  })}
                </Box>
                {howScheduleDay && (
                  <Box marginTop={2}>
                    <p className="paragraph">Horários disponíveis</p>
                  </Box>
                )}
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  marginTop={2}
                >
                  {howScheduleDay?.map((item, index) => (
                    <Box display="flex" key={index}>
                      <button
                        className="btn"
                        onClick={() => handleChoiceHour(item.hour)}
                      >
                        {item.hour}
                      </button>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
            {howMonth === 'Setembro' && (
              <Box
                display="flex"
                flexDirection="column"
                width="100%"
                alignItems="center"
                marginTop={1}
              >
                <p className="paragraph">Dias disponíveis</p>
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  marginTop={2}
                >
                  {howSchedule?.map((item) => {
                    return item.days.map((day, index) => (
                      <Box display="flex" key={index}>
                        <button
                          className="btn"
                          onClick={() => handleDay(day.day)}
                        >
                          {day.day}
                        </button>
                      </Box>
                    ));
                  })}
                </Box>
                {howScheduleDay && (
                  <Box marginTop={2}>
                    <p className="paragraph">Horários disponíveis</p>
                  </Box>
                )}
                <Box
                  display="flex"
                  width="100%"
                  justifyContent="space-between"
                  marginTop={2}
                >
                  {howScheduleDay?.map((item, index) => (
                    <Box display="flex" key={index}>
                      <button
                        className="btn"
                        onClick={() => handleChoiceHour(item.hour)}
                      >
                        {item.hour}
                      </button>
                    </Box>
                  ))}
                </Box>
              </Box>
            )}
          </Box>
        )}
        {confirm && (
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            padding={{sm:3}}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box>
              <Typography variant="h6">
                {howDay} de {howMonth}, {howHour} horas.
              </Typography>
            </Box>
            <Box border="1px solid gray" padding={1} borderRadius={1}>
              <p className="paragraph">Nome: {user.name} </p>
            </Box>
            <Box
              display="flex"
              width="100%"
              justifyContent="space-evenly"
              gap={1}
            >
              <Box border="1px solid gray" padding={1} borderRadius={1}>
                <p className="paragraph">E-mail: {user.email} </p>
              </Box>
              <Box border="1px solid gray" padding={1} borderRadius={1}>
                <p className="paragraph">Telefone: {user.phone} </p>
              </Box>
            </Box>
          </Box>
        )}
        <Box paddingBottom={2}>
          {!confirm && (
            <Button
              onClick={confirm ? () => submit() : () => handleChoiceConfirm()}
              disabled={disabled}
              color="error"
              variant="contained"
            >
              {isLoading ? <Spinner /> : 'Agendar visita'}
            </Button>
          )}
          {confirm && (
            <Box display="flex" gap={{xs:1, sm:5}} paddingX={{xs:1, sm:0}}>
              <Button
                onClick={() => setConfirm(false)}
                disabled={disabled}
                variant="outlined"
              >
                Novo agendamento
              </Button>
              <Button
                onClick={confirm ? () => submit() : () => handleChoiceConfirm()}
                disabled={disabled}
                color="error"
                variant="contained"
              >
                {isLoading ? <Spinner /> : 'Concluir'}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ScheduleField;
