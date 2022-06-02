import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FC, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

import { IHomePart } from "./DoughnutChart.types";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  religionData: IHomePart[];
}

const DoughnutChart: FC<Props> = ({ religionData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  religionData = religionData.filter((e) => e.value != null);

  useEffect(() => {
    setChartData({
      labels: religionData.map((e) => {
        return e.value;
      }),
      datasets: [
        {
          //@ts-ignore
          label: "Doughnut",
          //@ts-ignore
          data: religionData.map((row) => {
            return row.count;
          }),
          backgroundColor: [
            //@ts-ignore
            "rgba(255, 99, 132, 0.2)",
            //@ts-ignore
            "rgba(54, 162, 235, 0.2)",
            //@ts-ignore
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            //@ts-ignore
            "rgba(255, 99, 132, 1)",
            //@ts-ignore
            "rgba(54, 162, 235, 1)",
            //@ts-ignore
            "rgba(255, 206, 86, 1)",
          ],
          //@ts-ignore

          borderWidth: 1,
        },
      ],
    });
  }, []);

  return <Doughnut data={chartData} />;
};

export default DoughnutChart;
