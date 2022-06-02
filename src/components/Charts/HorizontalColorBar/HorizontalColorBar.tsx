import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { IHomePart } from "./HorizontalColorBar.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  barData: IHomePart[];
}

const HorizontalColorBar: FC<Props> = ({ barData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  barData = barData.filter((e) => e.value != null);

  useEffect(() => {
    setChartData({
      labels: barData.map((e) => {
        return e.value;
      }),

      datasets: [
        {
          //@ts-ignore
          label: "Статистика по возрасту",
          //@ts-ignore
          data: barData.map((row) => {
            return row.count;
          }),

          //@ts-ignore
          backgroundColor: "#2398AB",
          //@ts-ignore
          borderRadius: 5,
        },
      ],
    });
    setChartOptions({
      indexAxis: "y" as const,
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Custom Chart Subtitle",
        },
        tooltip: {
          enabled: true,
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
};

export default HorizontalColorBar;
