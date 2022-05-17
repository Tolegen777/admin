import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { StyledInput } from "../../../../components/styled-components/StyledInput";

const RightSideBlock = () => {
  return (
    <Grid item xs={3}>
      <Paper
        sx={{
          paddingTop: "30px",
          paddingLeft: "40px",
          paddingRight: "30px",
          height: "calc(100vh - 220px)",
        }}
      >
        <Typography>Информация</Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid item>
            <Stack>
              <Typography>Личная информация</Typography>
              Имя
              <StyledInput />
              Фамилия
              <StyledInput />
              Отчество
              <StyledInput />
              ИИН
              <StyledInput />
              Дата Рождения
              <StyledInput />
              Номер телефона
              <StyledInput />
              Email
              <StyledInput />
              Пол
              <StyledInput />
            </Stack>
          </Grid>
          <Grid item>
            <Stack>
              <Typography>Место проживания</Typography>
              Страна
              <StyledInput />
              Город
              <StyledInput />
              Улица
              <StyledInput />
              Дом
              <StyledInput />
              Индекс
              <StyledInput />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default RightSideBlock;
