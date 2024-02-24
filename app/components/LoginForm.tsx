"use client";

import { Input } from "./form/Input";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./form/RHFInput";

export const LoginForm = () => {
  const formMethods = useForm({});
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
        />
      </form>
    </FormProvider>
  );
};
