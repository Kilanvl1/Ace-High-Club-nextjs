import { cn } from "@/utilities/styles/utils";
import React from "react";
import ContainerNew from "./ContainerNew";
import groups from "../../public/Groups.svg";
import splitser from "../../public/splitser.svg";
import history from "../../public/History.svg";
import leaderboard from "../../public/Leaderboard.svg";
import { DisplayFunctionality } from "./DisplayFunctionality";

const displayFunctionalityData = [
  {
    id: 1,
    title: "Create groups with your friends!",
    subTitle:
      "Track, settle, and organise your cash games among different groups of players.",
    image: groups,
  },
  {
    id: 2,
    title: "Calculate payouts",
    subTitle:
      "Use our payout calculator to easily determine who owes who money. Factors in any excess or leakage!",
    image: splitser,
  },
  {
    id: 3,
    title: "Save your cash games!",
    subTitle: "Create a catalogue of all the games ever played within a group.",
    image: history,
  },
  {
    id: 4,
    title: "Prove that you're the best!",
    subTitle:
      "Include games from the catalogue to count towards a leaderboard that tracks earnings.",
    image: leaderboard,
  },
];

export const FunctionalityContainer = () => {
  return (
    <>
      {displayFunctionalityData.map((functionality, index) => (
        <DisplayFunctionality
          key={functionality.id}
          functionalityPage={functionality}
          even={index % 2 === 0}
        />
      ))}
    </>
  );
};
