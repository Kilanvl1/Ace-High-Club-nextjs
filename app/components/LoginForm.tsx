"use client";
import { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./form/RHFInput";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { login, storeToken } from "../_services/auth";

export const LoginForm = () => {
  const [error, setError] = useState("");
  const schema = z.object({
    username: z.string({ required_error: "Username is required" }),
    password: z.string({ required_error: "Password is required" }),
  });
  type FormData = z.infer<typeof schema>;
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = formMethods;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await login(data.username, data.password);
      console.log(response);
      const { access, refresh } = response as {
        access: string;
        refresh: string;
      };
      storeToken(access, "access");
      storeToken(refresh, "refresh");
    } catch (e: any) {
      if (e.status === 401) {
        setError(e.data.detail);
      } else {
        setError("An error occurred");
      }
    }
  };
  return (
    <>
      {error && <p>{error}</p>}
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RHFInput
            label=""
            name="username"
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
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </>
  );
};
