import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <div>
      <p className="text-center text-3xl mb-10">Login</p>
      <LoginForm />
    </div>
  );
};

Login.displayName = "Login";
