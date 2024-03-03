"use client";

import apiCalls from "@/graphql";
import { RocketsQuery, Rocket } from "@/util/types/graphql";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import RocketModal from './components/RocketModal';

export default function RocketsPage() {
  const { data } = useQuery<RocketsQuery>(apiCalls.queries.rockets, {
    fetchPolicy: "cache-and-network",
  });

  const [selectedRocket, setSelectedRocket] = useState<Rocket | null>(null);

  const handleRocketClick = (rocket: Rocket | null) => {
    setSelectedRocket(rocket);
  }

  const handleCloseModal = () => {
    setSelectedRocket(null);
  }

  return (
    <main className="flex justify-center p-14">
      <div className="w-full max-w-7xl justify-between flex flex-col gap-2">
        {data?.rockets?.map((rocket, index) => {
          return (
            <div key={index} className="flex px-4 cursor-pointer" onClick={() => handleRocketClick(rocket)}>
              {rocket?.name}
            </div>
          );
        })}
      </div>
      <RocketModal isOpen={!!selectedRocket} onClose={handleCloseModal} rocket={selectedRocket}/>
    </main>
  );
}
