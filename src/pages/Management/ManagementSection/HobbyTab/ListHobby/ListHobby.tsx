import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListHobby = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item>List Hobby</Grid>
      <Button onClick={() => navigate("/app/management/city")}>To City - /city</Button>
    </Grid>
  );
};

export default ListHobby;
