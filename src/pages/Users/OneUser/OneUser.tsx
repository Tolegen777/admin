import { Box, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ComplaintUserMessages from "../../Complaints/ComplaintsSection/ComplaintUserMessages";
// import ComplaintUsersInfo from "../../Complaints/ComplaintsSection/ComplaintUsersInfo";
import VisitDiagram from "../../Complaints/ComplaintsSection/VisitDiagram";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import UserInfo from "./UserInfo";
import ComplaintUsersInfo from "../../Complaints/ComplaintsSection/ComplaintUsersInfo";
import ComplaintUserMessages from "../../Complaints/ComplaintsSection/ComplaintUserMessages";

const OneUser = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#E4FFF9" }}>
      <Button
        variant="contained"
        color="inherit"
        onClick={() => navigate(-1)}
        startIcon={<ChevronLeftIcon />}
        sx={{ width: "130px", mb: "25px" }}
      >
        Назад
      </Button>
      <UserInfo />
      <Grid container item>
        <ComplaintUserMessages />
      </Grid>
    </Box>
  );
};

export default OneUser;
