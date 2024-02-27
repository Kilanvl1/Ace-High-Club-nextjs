"use client";

import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./form/RHFInput";
import { z } from "zod";
import { useEmailSchema } from "./form/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {
  const schema = z.object({
    email: useEmailSchema(),
    password: z.string({ required_error: "Password is required" }),
  });
  type FormData = z.infer<typeof schema>;
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = formMethods;

  const onSubmit: SubmitHandler<any> = () => {};
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFInput
          label=""
          name="email"
          Icon={EnvelopeIcon}
          placeholder="Email"
          autoComplete="email"
        />
        <RHFInput
          label=""
          name="password"
          Icon={LockClosedIcon}
          placeholder="Password"
          type="password"
        />
      </form>
    </FormProvider>
  );
};
