import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListHadith = () => {
  const navigate = useNavigate();

  return (
    <Grid container>
      <Grid item>List Hadith</Grid>
      <Button onClick={() => navigate("/app/management/hobby")}>
        To Hobby - /hobby
      </Button>
    </Grid>
  );
};

export default ListHadith;
