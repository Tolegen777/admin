// library
import { Box, Grid, Paper } from "@mui/material";

// modules
import { UserFilter } from "../modules/Filter";
import UserTable from "../modules/UserTable";
import { StyledUsers } from "./style";

const UsersPage = () => {
  const Item = (props: any) => <Paper {...props} />;

  return (
    <Box>
      <Grid container spacing={3} sx={{ mb: "30px" }}>
        <Grid item xs>
          <StyledUsers text={"Всего пользователей"} price={"5"} />
        </Grid>
        <Grid item xs>
          <StyledUsers text={"Новые пользователи"} price={"+2"} />
        </Grid>
        <Grid item xs>
          <StyledUsers text={"Активные пользователей"} price={"3"} />
        </Grid>
        <Grid item xs>
          <StyledUsers text={"Рост пользователей"} price={"+2"} />
        </Grid>
      </Grid>
      <UserFilter />
      <UserTable />
    </Box>
  );
};
export default UsersPage;
