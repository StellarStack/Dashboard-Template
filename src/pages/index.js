import { useEffect, useState } from 'react';
import firebase from '../firebase';
import SignupForm from '@/components/SignupForm'; 
import SigninForm from '@/components/SigninForm';
import HomePage from '@/components/HomePage';

const App = () => {
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
