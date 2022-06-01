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
import { IHomeAges } from "./HorizontalBar.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  ageData: IHomeAges;
}

const HorizontalBar: FC<Props> = ({ ageData }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "— 18-22",
        "— 22-25",
        "— 25-30",
        "— 30-40",
        "— 40-50",
        "— 50-65",
        "— 65+",
      ],

      datasets: [
        {
          //@ts-ignore
          label: "Статистика по возрасту",
          //@ts-ignore
          data: [
            //@ts-ignore
            { y: "— 18-22", x: ageData.range1822 * 100 },
            //@ts-ignore
            { y: "— 22-25", x: ageData.range2225 * 100 },
            //@ts-ignore
            { y: "— 25-30", x: ageData.range2530 * 100 },
            //@ts-ignore
            { y: "— 30-40", x: ageData.range3040 * 100 },
            //@ts-ignore
            { y: "— 40-50", x: ageData.range4050 * 100 },
            //@ts-ignore
            { y: "— 50-65", x: ageData.range5065 * 100 },
            //@ts-ignore
            { y: "— 65+", x: ageData.range65 * 100 },
          ],

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

  return (
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
};

export default HorizontalBar;
