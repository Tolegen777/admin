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
import {
  IHomeAges,
  IHomePart,
} from "../../../pages/Home/HomeSection/HomeSection.types";

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

const HorizontalBar: FC<Props> = ({ barData }) => {
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
          label: "Статистика по Интересам",
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
      indexAxis: "x" as const,
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        tooltip: {
          enabled: true,
        },
      },
    });
  }, []);

  return <Bar options={chartOptions} data={chartData} />;
};

export default HorizontalBar;
