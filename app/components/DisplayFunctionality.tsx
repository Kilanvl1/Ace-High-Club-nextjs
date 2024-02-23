import React from "react";
import { DisplayFunctionalityData } from "../wagtail/nextjs";
import Image from "next/image";
import { cn } from "@/utilities/styles/utils";

type DisplayFunctionalityProps = {
  functionalityPage: DisplayFunctionalityData;
  even: boolean;
};

export const DisplayFunctionality = ({
  functionalityPage,
  even,
}: DisplayFunctionalityProps) => {
  return (
    <div className="flex flex-col text-center mb-32 md:flex-row items-center md:gap-x-8 lg:justify-center">
      <div className={cn(even ? "" : "md:order-2", " max-w-96 flex-1")}>
        <h1 className={cn("text-3xl mb-6")}>{functionalityPage.title}</h1>
        <p className="mb-12 text-mdm">{functionalityPage.subTitle}</p>
      </div>
      <div className="max-w-96 flex-1">
        <Image alt="" src={functionalityPage.image} />
      </div>
    </div>
  );
};
