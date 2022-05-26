// LibraryAdd
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import HorizontalBar from "../../../components/Charts/HorizontalBar";

// components
import DrawerAdmin from "../../../components/drawer/DrawerAdmin";
import { useGetHomeQuery } from "../../../redux/store/rtk-api/home-rtk/homeEndpoints";

// style
import { StyledPaper } from "./style";

const HomeSection = () => {
  const Item = (props: any) => <Paper {...props} />;
  const { data, isLoading } = useGetHomeQuery("");

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
              Статистика по статусу
            </StyledPaper>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>Статистика по городам</StyledPaper>
        </Grid>
        <Grid item xs={4}>
          <StyledPaper>Недавние жалобы</StyledPaper>
        </Grid>
        <Grid item xs={3}>
          <StyledPaper>Статистика прибыли</StyledPaper>
        </Grid>
        <Grid item xs={5}>
          <StyledPaper>Статистика по возрасту</StyledPaper>
          <HorizontalBar />
        </Grid>
      </Grid>
    </>
  );
};
export default HomeSection;
