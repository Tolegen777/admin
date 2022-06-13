// library
import { useState } from "react";
import { Button, Grid, InputAdornment, Paper } from "@mui/material";
import { Box } from "@mui/system";

// components
import { StyledInput } from "../../../../components/styled-components/StyledInput";

// icons
import SearchIcon from "@mui/icons-material/Search";
//@ts-ignore
import { ReactComponent as ArrowSvg } from "../../../../assets/svg/Vectorarrowright.svg";
import UserTable from "../UserTable";

export const UserFilter = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Paper
        elevation={0}
        sx={{ height: "90px", p: "20px", boxSizing: "border-box", mb: "30px" }}
      >
        <Grid container columns={12} spacing={2}>
          <Grid item xs={10}>
            <StyledInput
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: "primary.light",
              }}
              placeholder={"Поиск по имени, фамилии, телефону"}
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "primary.main" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              paddingTop: "10px",
              paddingLeft: "40px",
              paddingRight: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/*<Button*/}
            {/*  sx={{*/}
            {/*    height: "50px",*/}
            {/*    width: "100%",*/}
            {/*    backgroundColor: "primary.light",*/}
            {/*    color: "primary.main",*/}
            {/*    "&:hover": {*/}
            {/*      backgroundColor: "primary.main",*/}
            {/*      color: "primary.light",*/}
            {/*    },*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Фильтры*/}
            {/*  <Box*/}
            {/*    sx={{*/}
            {/*      background: "#fff",*/}
            {/*      width: "30px",*/}
            {/*      height: "30px",*/}
            {/*      borderRadius: "5px",*/}
            {/*      ml: "40px",*/}
            {/*      display: "flex",*/}
            {/*      justifyContent: "center",*/}
            {/*      alignItems: "center",*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <ArrowSvg />*/}
            {/*  </Box>*/}
            {/*</Button>*/}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
