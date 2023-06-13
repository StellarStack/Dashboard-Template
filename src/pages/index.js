import { useState } from "react";
import SignupForm from "@/components/auth/SignupForm";
import SigninForm from "@/components/auth/SigninForm";

export default function App() {
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
}
