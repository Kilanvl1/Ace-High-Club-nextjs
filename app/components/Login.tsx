import { forwardRef, LegacyRef } from "react";
import { LoginForm } from "./LoginForm";

export const Login = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="max-w-96 mx-auto" ref={ref}>
      <p className="text-center text-3xl mb-10">Login</p>
      <LoginForm />
      <p className="mt-3">New here? Click here</p>
    </div>
  );
});

Login.displayName = "Login";
