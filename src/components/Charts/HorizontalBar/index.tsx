import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FC, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement);

const HorizontalBar = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {

    setChartData({
      labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
      datasets: [
        {
          // @ts-ignore
          label: "Whom'st let the dogs out",
          // @ts-ignore
          data: [12, 55, 34, 120],
          // @ts-ignore
          boderColor: "rgb(53, 162, 235)",
          // @ts-ignore
          backgroundColor: "rgba(53, 162, 235, 0.4",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Some Text",
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
