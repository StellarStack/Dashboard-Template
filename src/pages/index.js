import { useState } from 'react';
import SignupForm from '@/components/SignupForm';
import SigninForm from '@/components/SigninForm';
import useAuthMiddleware from "../authMiddleware";

const App = () => {
  useAuthMiddleware(); // Use the useAuthMiddleware

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

export default App;
