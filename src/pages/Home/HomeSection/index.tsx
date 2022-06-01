// LibraryAdd
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import { HorizontalBar } from "../../../components/Charts";

// components
import DrawerAdmin from "../../../components/Drawer/DrawerAdmin";
import { useGetHomeQuery } from "../../../redux/store/rtk-api/home-rtk/homeEndpoints";

// style
import { StyledPaper } from "./style";

const HomeSection = () => {
  const Item = (props: any) => <Paper {...props} />;
  const { data, isLoading } = useGetHomeQuery("");

  console.log(data);
  console.log(data);

  return (
    <>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={8}>
          <StyledPaper>Интересы</StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>Посещение</StyledPaper>
        </Grid>
        <Grid item xs={6}>
          <StyledPaper>Статистика по религии</StyledPaper>
        </Grid>
        <Grid item xs={2} container direction={"column"} spacing={2}>
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
              Статистика по полу
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
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <Typography variant="h3">Статистика по городам</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>
            <Typography variant="h3">Недавние жалобы</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>
            <Typography variant="h3">Статистика прибыли</Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={5} sx={{ height: "480px" }}>
          <Box sx={{ height: "100%" }}>
            <StyledPaper>
              <Typography variant="h3">Статистика по возрасту</Typography>
              {data && <HorizontalBar ageData={data.ages} />}
            </StyledPaper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default HomeSection;
