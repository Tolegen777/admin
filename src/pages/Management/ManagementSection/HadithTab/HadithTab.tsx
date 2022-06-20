import { Box, Button, Stack, Typography } from "@mui/material";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CreateHadith from "./CreateHadith";
import ListHadith from "./ListHadith";
import OneHadith from "./OneHadith";

const HadithTab = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Typography sx={{ fontSize: "25px", mb: "15px" }}>
          {location.pathname === "/app/management/hadith/create"
            ? "Добавление Хадисов"
            : "Хадисы"}
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/app/management/hadith/list")}
          sx={{ width: "160px", height: "45px", fontSize: "12px" }}
        >
          Список Хадисов
        </Button>
      </Stack>

      <Routes>
        <Route index element={<Navigate to="list" />} />
        <Route path={"list"} element={<ListHadith />} />
        <Route path={"one/:hadithId"} element={<OneHadith />} />
        <Route path={"create"} element={<CreateHadith />} />
      </Routes>
    </Box>
  );
};

export default HadithTab;
