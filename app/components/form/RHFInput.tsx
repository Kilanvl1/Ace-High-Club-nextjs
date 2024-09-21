import { ReactNode, forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input, InputProps } from "./Input";
import { FormGroup } from "./FormGroup";

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
              {/* {error && <p className="text-destructive">{error.message}</p>} */}
              <Input
                type={type}
                id={id}
                onBlur={onBlur}
                onChange={(val) => {
                  onChange(
                    type === "number"
                      ? Number(val.target.value)
                      : val.target.value
                  );
                }}
                value={value || ""}
                Icon={Icon}
                placeholder={placeholder}
                ref={ref}
                {...other}
                error={error?.message}
              />
            </>
          )}
        />
      </FormGroup>
    );
  }
);

RHFInput.displayName = "RHFInput";
