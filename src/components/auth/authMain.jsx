import { useState } from "react";
import { SignupForm } from "@/components/auth/signupForm";
import { SigninForm } from "@/components/auth/signinForm";

export const AuthMain = () => {
  const [isSignup, setIsSignup] = useState(false);
  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isSignup ? (
        <SignupForm toggleForm={toggleForm} />
      ) : (
        <SigninForm toggleForm={toggleForm} />
      )}
    </div>
  );
};
