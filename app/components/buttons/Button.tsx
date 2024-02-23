import React from "react";

import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonClassess> {
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonClassess = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary:
        "bg-mainGold text-black transition ease-in-out duration-500 hover:bg-opacity-30  hover:text-white",
      secondary:
        "border border-solid border-mainGold transition ease-in-out duration-500 hover:text-black hover:bg-mainGold",
    },
    size: {
      small: "text-sm px-5 h-8",
      medium: "text-md px-5 py-2 h-10",
      large: "text-md px-6 py-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Button = ({ children, onClick, variant, size }: ButtonProps) => {
  return (
    <button className={buttonClassess({ variant, size })}>{children}</button>
  );
};
