import * as React from "react";
import { cn } from "@/utilities/styles/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder?: string;
  type?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, type, Icon, error, ...props }, ref) => (
    <div className="border-mainGold border rounded-lg px-4 py-2">
      <div className={cn("flex w-full items-center  gap-x-4", className)}>
        {Icon && <Icon className="h-6 w-6" />}
        <input
          className={cn(
            "border-none bg-transparent w-full h-10 disabled:cursor-not-allowed"
          )}
          placeholder={placeholder}
          type={type}
          {...props}
          ref={ref}
        />
      </div>
      {error && <p className="text-destructive text-sm">{error}</p>}
    </div>
  )
);

Input.displayName = "Input";
export { Input };
