import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import DrawerAdmin from "../drawer/DrawerAdmin";

const Layout = () => {

  return (
    <Box sx={{ display: "flex" }}>
      <DrawerAdmin />
      <Box width={"100%"} sx={{ padding: "50px 50px 50px 50px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
