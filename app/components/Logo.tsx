import Image from "next/image";
import React from "react";

import logo from "../../public/Logo.svg";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({
  width = 32,
  height = 32,
  className = "",
}: LogoProps) => {
  let src = logo;
  return (
    <div className="flex items-center gap-2">
      <Image
        src={src}
        alt="Ace High Club"
        width={width}
        height={height}
        className={className}
      />
      <h1 className="font-semibold text-xl">Ace High Club</h1>
    </div>
  );
};
