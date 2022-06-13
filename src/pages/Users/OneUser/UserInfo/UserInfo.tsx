import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetOneProfileQuery } from "../../../../redux/store/rtk-api/user-rtk/userEndpoints";

const UserInfo = () => {
  const params = useParams();
  const { userId } = params;

  const { data, isLoading } = useGetOneProfileQuery(userId ? userId : "");

  return (
    <Grid
      container
      columns={2}
      sx={{
        height: "200px",
        borderRadius: "10px",
        p: "20px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: "row",
        gap: "20px",
      }}
    >
      <Grid
        item
        xs
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#E2E2E2",
            width: "160px",
            height: "160px",
            mr: "30px",
          }}
        />
        <Stack justifyContent={"space-between"}>
          <Typography variant="h20r" color={"secondary.light"}>
            Имя пользователя
          </Typography>
          <Typography variant="h28b">{data?.firstName}</Typography>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ flex: 1, fontSize: "18px" }}
            >
              Перейти в чат
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{ flex: 1.3, fontSize: "18px" }}
            >
              Информация о жалобе
            </Button>
          </Box>
        </Stack>
      </Grid>

      <Grid container item xs spacing={1}>
        <Grid container item xs direction={"column"}>
          <Grid item xs sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
            >
              Номер телефона
            </Typography>
            <Typography variant="h20b">
              8777 777 77 77 - НОМЕР НУЖНО ДОБАВИТЬ в GetOne
            </Typography>
          </Grid>
          <Grid
            item
            xs
            spacing="10px"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
            >
              Статус
            </Typography>
            <Typography variant="h20b">{data?.block} StatusData</Typography>
          </Grid>
        </Grid>

        <Grid container item xs>
          <Grid item xs sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
            >
              Дата рождения
            </Typography>
            <Typography variant="h20b">{data?.age}</Typography>
          </Grid>
          <Grid item xs spacing="10px">
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
            >
              Дети
            </Typography>
            <Typography variant="h20b">{data?.kids}</Typography>
          </Grid>
        </Grid>

        <Grid container item xs>
          <Grid item xs sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
            >
              Пол
            </Typography>
            <Typography variant="h20b">{data?.gender.value}</Typography>
          </Grid>
          <Grid
            item
            xs
            spacing={1}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="h16r"
              color="secondary.light"
              textTransform="uppercase"
            >
              Религия
            </Typography>
            <Typography variant="h20b">Need to Add Religion</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserInfo;
