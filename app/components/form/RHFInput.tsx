import { ReactNode, forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { FormGroup } from "./FormGroup";
import { cn } from "@/utilities/styles/utils";

export type RHFInputProps = InputProps & {
  id?: string;
  label: ReactNode;
  name: string;
};

export const RHFInput = forwardRef<HTMLInputElement, RHFInputProps>(
  (
    { label, name, id = "", type = "text", Icon, placeholder, ...other },
    ref
  ) => {
    const { control } = useFormContext();
    if (!id) {
      id = name;
    }
    return (
      <FormGroup>
        <Controller
          name={name}
          control={control}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <>
              <Input
                type={type}
                id={id}
                onBlur={onBlur}
                onChange={(val) =>
                  onChange(
                    type === "number"
                      ? Number(val.target.value)
                      : val.target.value
                  )
                }
                value={value || ""}
                className={cn({ "border-red-600": error })}
                Icon={Icon}
                placeholder={placeholder}
                ref={ref}
                {...other}
              />
            </>
          )}
        />
      </FormGroup>
    );
  }
);

RHFInput.displayName = "RHFInput";
