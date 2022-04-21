import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

const ProfilePage = () => {
  const Item = (props: any) => <Paper {...props} />;

  return (
    <Grid container spacing={2} columns={12}>
      <Grid item xs={12}>
        <Paper
          sx={{
            height: "calc(100vh - 220px)",
            color: "primary.main",
            borderRadius: "20px",
            fontSize: "24px",
            paddingTop: "25px",
            paddingLeft: "30px",
          }}
        >
          Профиль
          <Typography sx={{ mt: "20px" }}>
            Пока что нет дизайна для Профиля :(
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default ProfilePage;
