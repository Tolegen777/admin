import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CreateHobby from "./CreateHobby";
import ListHobby from "./ListHobby";
import { OneHobby } from "./OneHobby";

const HobbyTab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "25px", mb: "15px" }}>
          {location.pathname === "/app/management/hobby/create"
            ? "Добавление Хобби"
            : "Хобби"}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/app/management/hobby/list")}
          sx={{ width: "160px", height: "45px", fontSize: "12px" }}
        >
          Список Хобби
        </Button>
      </Stack>

      <Routes>
        <Route index element={<Navigate to="list" />} />
        <Route path={"list"} element={<ListHobby />} />
        <Route path={"one/:hobbyId"} element={<OneHobby />} />
        <Route path={"create"} element={<CreateHobby />} />
      </Routes>
    </Box>
  );
};

export default HobbyTab;
