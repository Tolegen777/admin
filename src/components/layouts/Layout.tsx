import {Outlet} from "react-router-dom";

import {Box} from "@mui/system";
import DrawerAdmin from "../main/drawer/DrawerAdmin";

const Layout = () => {
    return (
        <Box sx={{display: "flex"}}>
            <DrawerAdmin/>
            <Box width={"100%"}>
                <Outlet/>
            </Box>
        </Box>
    );
};

export default Layout;
