import { cn } from "@/utilities/styles/utils";
import React from "react";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeroElementProps) => {
  return (
    <h1 className="text-4xl lg:text-6xl my-6 lg:my-10 font-medium">
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children }: HeroElementProps) => {
  return <p className="text-lg lg:text-xl mb-4 lg:mb-8">{children}</p>;
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={cn(className)}>{children}</div>;
};
