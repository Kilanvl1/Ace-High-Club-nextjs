import Image from "next/image";
import React from "react";

import logo from "../../public/Logo.svg";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
};

export const Logo = ({
  width = 50,
  height = 50,
  className = "",
}: LogoProps) => {
  let src = logo;
  return (
    <Image
      src={src}
      alt="Ace High Club"
      width={width}
      height={height}
      className={className}
    />
  );
};
