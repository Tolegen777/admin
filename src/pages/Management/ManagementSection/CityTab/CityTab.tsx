import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import CreateCity from "./CreateCity";
import ListCity from "./ListCity";
import OneCity from "./OneCity";

const CityTab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "25px", mb: "15px" }}>
          {location.pathname === "/app/management/city/create"
            ? "Добавление Города"
            : "Города"}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/app/management/city/list")}
          sx={{ width: "160px", height: "45px", fontSize: "12px" }}
        >
          Список Хобби
        </Button>
      </Stack>

      <Routes>
        <Route index element={<Navigate to="list" />} />
        <Route path={"list"} element={<ListCity />} />
        <Route path={"one/:cityId"} element={<OneCity />} />
        <Route path={"create"} element={<CreateCity />} />
      </Routes>
    </Box>
  );
};

export default CityTab;
