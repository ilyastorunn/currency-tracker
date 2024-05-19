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
import CoinDetail from "./CoinDetail";

const HistoryChart = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=1`
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
        borderColor: "rgb(50, 147, 224)",
        backgroundColor: "rgba(12, 75, 136, 1)",
      },
    ],
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-full h-full flex flex-col justify-center items-center bg-[#333340] rounded-xl p-5">
        <div className="w-full h-full flex justify-center items-center">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default HistoryChart;
