import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import DrawerAdmin from "../drawer/DrawerAdmin";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerAdmin />
      <Box width={"100%"}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
