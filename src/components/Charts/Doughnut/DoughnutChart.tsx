import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { FC, useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { IHomePart } from "../../../pages/Home/HomeSection/HomeSection.types";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  barData: IHomePart[];
}

const DoughnutChart: FC<Props> = ({ barData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: barData.map((e) => {
        return ` ${e.value} ${((e.count * 100) / 30).toFixed(1)}%`;
      }),
      datasets: [
        {
          //@ts-ignore
          label: "Doughnut",
          //@ts-ignore
          data: barData.map((row) => {
            return row.count;
          }),
          backgroundColor: [
            //@ts-ignore
            "#B5B8FF",
            //@ts-ignore
            "rgba(54, 162, 235, 0.2)",
            //@ts-ignore
            "rgba(255, 206, 86, 0.2)",
          ],
          //@ts-ignore
          borderWidth: 1,
          //@ts-ignore
          borderRadius: 8.3,
        },
      ],
    });
    setChartOptions({
      indexAxis: "y" as const,
      responsive: true,
      usePointStyle: true,
      plugins: {
        legend: {
          display: true,
          position: "right",
          padding: 5,
          labels: {
            //@ts-ignore
            boxWidth: 20,
            //@ts-ignore
            boxHeight: 20,
            padding: 10,
          },
        },
        tooltip: {
          enabled: true,
        },
      },
    });
  }, []);

  return <Doughnut data={chartData} options={chartOptions} />;
};

export default DoughnutChart;
