import React, { ElementType, forwardRef } from "react";
import { cn } from "../../utilities/styles/utils";

type ContainerNewProps = {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
  as?: ElementType;
  onClick?: () => void;
};

const ContainerNew = forwardRef(
  (
    {
      children,
      as: Component = "div",
      className = "",
      noPadding = false,
      ...props
    }: ContainerNewProps,
    ref
  ) => (
    <Component
      ref={ref}
      className={cn(
        "mx-auto max-w-[1440px] px-6",
        noPadding && "px-0",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
);

export default ContainerNew;
