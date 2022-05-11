// library
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

//components
import DrawerAdmin from "../drawer/DrawerAdmin";
import { LayoutContainer } from "./style";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <DrawerAdmin />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </Box>
  );
};

export default Layout;
