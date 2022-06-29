import React, { FC, useEffect, useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { useGetVisitMutation } from "../../../../redux/store/rtk-api/home-rtk/homeEndpoints";

import { Styled } from "./VisitBlock.styled";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { IGetVisit } from "../../../../redux/store/rtk-api/home-rtk/home.type";
import { getMonth } from "date-fns";
import { IVisitChart } from "./VisitBlock.types";

interface Props {
  count: number;
}

const VisitBlock: FC<Props> = ({ count }) => {
  const [getInfo, { isLoading }] = useGetVisitMutation();

  const [userId, setUserId] = React.useState<number>(0);
  const [counter, setCounter] = React.useState<number>(0);
  const [year, setYear] = React.useState<number>(new Date().getFullYear());
  const [month, setMonth] = React.useState<number>(new Date().getMonth() + 2);
  const [chartData, setChartData] = React.useState<IVisitChart[]>([]);

  useEffect(() => {
    setYear(year);
  }, [year]);
  useEffect(() => {}, [month]);
  useEffect(() => {
    setChartData(chartData);
  }, [chartData]);

  const gMonth = () => {
    let month1 = month;
    month1 = month1 - 1;

    if (month1 === 0 || month1 - 1 === 0) {
      month1 = 13;
      setMonth(month1);
      setYear(year - 1);
    }
    setMonth(month1);
  };
  const setData = () => {
    gMonth();

    let newDay = new Date(year, month - 1, 0).getDate();

    getInfo({
      dateFrom: `${year}/${month - 1}/01`,
      dateTo: `${year}/${month - 1}/${newDay}`,
      userId: 0,
    } as IGetVisit).then((res) => {
      let obj = {
        dateFrom: `${year}/${month - 1}/01`,
        dateTo: `${year}/${month - 1}/${newDay}`,
        // @ts-ignore
        count: res.data,
      };

      setChartData((chartData) => [...chartData, obj]);
      setCounter(counter + 1);
    });
  };

  React.useEffect(() => {
    if (counter === 6) {
      return;
    } else {
      setData();
    }
  }, [counter]);

  return (
    <Styled.Wrapper>
      <Grid item sx={{ marginTop: "20px", width: "100%" }}>
        <Box sx={{ height: "100%" }}>
          <Typography variant="h3" sx={{ ml: "25px" }}>
            Статистика по Посещениям
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack
              direction={"row"}
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: "10px" }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ width: "100%", maxWidth: "150px" }}
              >
                Применить
              </Button>
            </Stack>
          </LocalizationProvider>
          <Styled.Block>
            <Styled.ChartContainer>
              {/* {barData && <AreaChart count={count} barData={barData} />} */}
              Графика
              <Stack>
                <Typography>
                  {chartData.map((row) => (
                    <>{row.count === null ? "Null" : row.count}</>
                  ))}
                </Typography>
              </Stack>
            </Styled.ChartContainer>
          </Styled.Block>
        </Box>
      </Grid>
    </Styled.Wrapper>
  );
};

export default VisitBlock;
