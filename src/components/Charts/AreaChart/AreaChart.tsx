import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { IHomePart } from "../../../pages/Home/HomeSection/HomeSection.types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

interface Props {
  barData: IHomePart[];
  count: number;
}

const AreaChart: FC<Props> = ({ count, barData }) => {
  const current = new Date();
  const cDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  console.log();

  const data = {
    labels: barData.map((e) => {
      return e.value;
    }),

    datasets: [
      {
        fill: true,
        data: barData.map((row) => {
          return row.count;
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default AreaChart;
