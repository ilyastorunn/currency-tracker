import React from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
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
import moment from "moment";

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
import Skeleton from "./Skeleton";
import Header from "./Header";
import Converter from "./Converter";
import TrendingWidget from "./TrendingWidget";

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=7`
  );

  if (!response) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );
  }
  const coinChartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    responsive: true,
  };
  const data = {
    labels: coinChartData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData.map((val) => val.y),
        borderColor: "rgb(248, 208, 208)",
        backgroundColor: "rgba(199, 59, 59, 1)",
      },
    ],
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="flex w-[27.66218rem] h-[31rem] flex-col justify-center items-center shrink-0 bg-[#333340] rounded-xl">
        <Line options={options} data={data} />
      </div>
      <div className="flex">
        <Converter />
        <TrendingWidget />
      </div>
    </div>
  );
};

export default HistoryChart;
