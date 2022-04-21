import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { StyledText, StyledUsers } from "./StyledUsers";
//@ts-ignore
import { ReactComponent as GrowSvg } from "../../../assets/svg/Vectorgrow.svg";

const UsersPage = () => {
  const Item = (props: any) => <Paper {...props} />;

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs>
          <StyledUsers>
            <StyledText>Всего пользователей</StyledText>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "48px", fontWeight: 600 }}>
                57 462
              </Typography>
              <Stack
                direction={"row"}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <GrowSvg />
                <Typography
                  sx={{ ml: "7px", fontSize: "26px", fontWeight: 600 }}
                >
                  +5%
                </Typography>
              </Stack>
            </Stack>
          </StyledUsers>
        </Grid>
        <Grid item xs>
          <StyledUsers>
            <StyledText>Новые пользователи</StyledText>
          </StyledUsers>
        </Grid>
        <Grid item xs>
          <StyledUsers>
            <StyledText>Активные пользователей</StyledText>
          </StyledUsers>
        </Grid>
        <Grid item xs>
          <StyledUsers>
            <StyledText>Рост пользователей</StyledText>
          </StyledUsers>
        </Grid>
      </Grid>
    </Box>
  );
};
export default UsersPage;
