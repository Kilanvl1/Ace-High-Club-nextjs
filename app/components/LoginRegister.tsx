import { Login } from "./Login";
import Register from "./Register";
import { useState, forwardRef, Dispatch, SetStateAction } from "react";

const LoginRegister = forwardRef<HTMLDivElement>((props, ref) => {
  const [isOnLoginPage, setIsOnLoginPage] = useState(true); //Variable to show either login or registration form
  return (
    <div ref={ref} className="max-w-96 mx-auto mb-10">
      {isOnLoginPage ? <Login /> : <Register />}
      <PromptMessage
        isOnLoginPage={isOnLoginPage}
        setIsOnLoginPage={setIsOnLoginPage}
      />
    </div>
  );
});

type PromptMessageProps = {
  isOnLoginPage: boolean;
  setIsOnLoginPage: Dispatch<SetStateAction<boolean>>;
};

const PromptMessage = ({
  isOnLoginPage,
  setIsOnLoginPage,
}: PromptMessageProps) => {
  return (
    <div className="mt-4">
      {isOnLoginPage ? (
        <div>
          New here? &nbsp;
          <p
            className="inline font-semibold underline hover:cursor-pointer"
            onClick={() => setIsOnLoginPage(false)}
          >
            Make an account here
          </p>
        </div>
      ) : (
        <div>
          Already have an account? &nbsp;
          <p
            className="inline font-semibold underline hover:cursor-pointer"
            onClick={() => setIsOnLoginPage(true)}
          >
            Login here
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
