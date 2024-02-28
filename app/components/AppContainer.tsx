import React, { ElementType } from "react";
import { cn } from "@/utilities/styles/utils";
type ContainerNewProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
};

export const AppContainer = ({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerNewProps) => {
  return (
    <Component
      className={cn(className, "mx-auto md:max-w-[49rem] lg:rounded-3xl")}
      {...props}
    >
      {children}
    </Component>
  );
};
