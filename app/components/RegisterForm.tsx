import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { RHFInput } from "./form/RHFInput";
import { z } from "zod";
import {
  useEmailSchema,
  usePasswordSchema,
  useUsernameSchema,
} from "./form/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../_services/users";
import { storeToken } from "../_services/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const RegisterForm = () => {
  const router = useRouter();
  const schema = z.object({
    username: useUsernameSchema(),
    email: useEmailSchema(),
    password: usePasswordSchema(),
  });
  type FormData = z.infer<typeof schema>;
  const formMethods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = formMethods;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const {
        tokens: { refresh, access },
      } = await createUser(data);
      storeToken(access, "access");
      storeToken(refresh, "refresh");
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFInput
          label=""
          name="username"
          Icon={UserIcon}
          placeholder="Username"
          autoComplete="name"
          required
        />
        <RHFInput
          label=""
          name="email"
          Icon={EnvelopeIcon}
          placeholder="Email"
          autoComplete="email"
          required
        />
        <RHFInput
          label=""
          name="password"
          Icon={LockClosedIcon}
          placeholder="Password"
          type="password"
          required
        />
        <Button size="lg" disabled={isSubmitting || !isValid}>
          Register
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
