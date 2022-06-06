// LibraryAdd
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

// components
import { HorizontalBar } from "../../../components/Charts";
import { DoughnutChart } from "../../../components/Charts/Doughnut";
import { HorizontalColorBar } from "../../../components/Charts/HorizontalColorBar";

import { useGetHomeQuery } from "../../../redux/store/rtk-api/home-rtk/homeEndpoints";

import CityBlock from "./CityBlock";
import HobbyBlock from "./HobbyBlock";
import ReligionBlock from "./ReligionBlock";

// style
import { StyledPaper } from "./style";

const HomeSection = () => {
  const { data, isLoading } = useGetHomeQuery("");

  const religionData = data?.religions.filter((e) => e.value != null);
  const genderData = data?.genders.filter((e) => e.value != null);
  const hobbyData = data?.hobbies.filter((e) => e.value != null);
  const statusData = data?.status.filter((e) => e.value != null);
  const cityData = data?.cities.filter((e) => e.value != null);

  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={8}>
          <StyledPaper>
            {data && hobbyData && (
              <HobbyBlock count={data.count} hobbyData={hobbyData} />
            )}
          </StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <Typography variant="h3">Посещение</Typography>
            {data && statusData && (
              <HorizontalColorBar count={data.count} barData={statusData} />
            )}
          </StyledPaper>
        </Grid>

        <Grid item xs={6}>
          <StyledPaper>
            {religionData && <ReligionBlock religionData={religionData} />}
          </StyledPaper>
        </Grid>

        <Grid item xs={2} container direction={"row"} spacing={2}>
          <Grid item xs>
            <StyledPaper
              sx={{
                height: "calc(100% - 25px)",
                width: "calc(100% - 25px)",
                color: "primary.main",
                borderRadius: "20px",
                fontSize: "24px",
                paddingTop: "25px",
                paddingLeft: "30px",
              }}
            >
              <Typography variant="h3">Статистика по полу</Typography>
              {data && genderData && (
                <HorizontalColorBar count={data.count} barData={genderData} />
              )}
            </StyledPaper>
          </Grid>
          <Grid item xs>
            <StyledPaper
              sx={{
                height: "calc(100% - 25px)",
                width: "calc(100% - 30px)",
                color: "primary.main",
                borderRadius: "20px",
                fontSize: "24px",
                paddingTop: "25px",
                paddingLeft: "30px",
              }}
            >
              <Typography variant="h3">Статистика по статусу</Typography>
              {data && statusData && (
                <HorizontalColorBar count={data.count} barData={statusData} />
              )}
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            {data && cityData && (
              <CityBlock count={data.count} cityData={cityData} />
            )}
          </StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <Typography variant="h3">Недавние жалобы</Typography>
            {data && statusData && (
              <HorizontalColorBar count={data.count} barData={statusData} />
            )}
          </StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>
            <Typography variant="h3">Статистика прибыли</Typography>
            {religionData && <DoughnutChart barData={religionData} />}
          </StyledPaper>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ height: "100%" }}>
            <StyledPaper>
              <Typography variant="h3">Статистика по возрасту</Typography>
              {data && <HorizontalBar barData={data.ages} />}
            </StyledPaper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeSection;
