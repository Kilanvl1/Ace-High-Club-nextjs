import React from "react";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div>
      <p className="text-center text-3xl mb-10">Login</p>
      <LoginForm />
      <p className="text-center mt-3">New here? Click here</p>
    </div>
  );
};
