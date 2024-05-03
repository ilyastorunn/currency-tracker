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
    <div className="inline-flex items-start">
      <div className="flex w-[27.66218rem] h-[31rem] flex-col justify-center items-center shrink-0 bg-[#333340] rounded-xl">
        <Line options={options} data={data} />
      </div>
      <div className="flex flex-col items-start rounded-xl  gap-9">
        <div className="flex flex-col items-center gap-4 bg-[#333340]">
          <h3 className="bg-[#333340] text-[#D4DBCD] text-2xl">
            Currency Converter
          </h3>
          <div className="flex flex-col items-start px-1.5 py-3 rounded-[10px] bg-[#333340]">
            <div className="flex items-start border-[#1E1E1E] rounded-[10px] justify-between gap-64 bg-[#333340]">
              <p className="text-[#D4DBCD] text-left bg-[#333340]">BTC</p>
              <p className="text-[#D4DBCD] text-right bg-[#333340]">1</p>
            </div>
            <div className="bg-[#333340] flex">
              <svg
                className="bg-[#333340] arrowUp"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
              >
                <g clip-path="url(#clip0_57_101)">
                  <path
                    d="M8.88281 1.61719C8.39453 1.12891 7.60156 1.12891 7.11328 1.61719L0.863281 7.86719C0.375 8.35547 0.375 9.14844 0.863281 9.63672C1.35156 10.125 2.14453 10.125 2.63281 9.63672L6.75 5.51562V17.5C6.75 18.1914 7.30859 18.75 8 18.75C8.69141 18.75 9.25 18.1914 9.25 17.5V5.51562L13.3672 9.63281C13.8555 10.1211 14.6484 10.1211 15.1367 9.63281C15.625 9.14453 15.625 8.35156 15.1367 7.86328L8.88672 1.61328L8.88281 1.61719Z"
                    fill="#1E1E1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_101">
                    <rect
                      width="15"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="arrowDown bg-[#333340]"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
              >
                <g clip-path="url(#clip0_57_99)">
                  <path
                    d="M7.11719 18.3828C7.60547 18.8711 8.39844 18.8711 8.88672 18.3828L15.1367 12.1328C15.625 11.6445 15.625 10.8516 15.1367 10.3633C14.6484 9.875 13.8555 9.875 13.3672 10.3633L9.25 14.4844V2.5C9.25 1.80859 8.69141 1.25 8 1.25C7.30859 1.25 6.75 1.80859 6.75 2.5V14.4805L2.63281 10.3672C2.14453 9.87891 1.35156 9.87891 0.863281 10.3672C0.375 10.8555 0.375 11.6484 0.863281 12.1367L7.11328 18.3867L7.11719 18.3828Z"
                    fill="#1E1E1E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_57_99">
                    <rect
                      width="15"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-start rounded-[10px] border-[#1E1E1E] justify-between gap-64 bg-[#333340]">
              <p className="text-[#D4DBCD] text-left bg-[#333340]">USD</p>
              <p className="text-[#D4DBCD] text-right bg-[#333340]">
                63.506,59
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start bg-[#333340] rounded-xl gap-2.5 py-4 px-10">
          <h3 className="text-[#D4DBCD] text-2xl bg-[#333340]">Trending</h3>
          <div className="flex items-center gap-48 bg-[#333340]">
            <div className="flex items-center gap-6 bg-[#333340]">
              <h3 className="text-[#D4DBCD] text-lg bg-[#333340]">APU</h3>
              <p className="text-[#848E9C] text-xs bg-[#333340]">Apu Apustaja</p>
            </div>
            <p className="text-[#0ECB81] text-xs bg-[#333340]">+9.46%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryChart;
