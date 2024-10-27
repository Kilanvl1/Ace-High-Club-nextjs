"use client";
import { useState } from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./form/RHFInput";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../_services/auth";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useUsernameSchema, usePasswordSchema } from "./form/schema";

export const LoginForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const schema = z.object({
    username: useUsernameSchema(),
    password: usePasswordSchema(),
  });

  type FormData = z.infer<typeof schema>;
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
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
    const { username, password } = data;

    try {
      await login({ username, password });

      router.push("/dashboard");
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

          <Button size="lg" disabled={isSubmitting || !isValid}>
            Login
          </Button>
        </form>
      </FormProvider>
    </>
  );
};
