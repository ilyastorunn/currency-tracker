import React from "react";
import useAxios from "../hooks/useAxios";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";

const CoinDetail = () => {
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`
  );

  if (!response) {
    return (
      <div className="wrapper-container mt-8">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-72 w-full mb-10" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl bg-[#333340] rounded-xl p-5">
      <div className="my-6 bg-[#333340]">
        <div className="flex gap-2 items-center bg-[#333340]">
          <img className="bg-[#333340]" src={response.image.small} alt={response.name} />
          <h1 className="text-2xl mb-2 capitalize font-bold bg-[#333340]">
            {response.name}
          </h1>
        </div>
        <p
          className="mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline bg-[#333340]"
          dangerouslySetInnerHTML={{ __html: response.description.en }}
        ></p>
      </div>
    </div>
  );
};

export default CoinDetail;
