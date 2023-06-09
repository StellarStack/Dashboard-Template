import { useState } from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/router';

const SigninForm = ({ toggleForm }) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSignIn = async () => {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        // Successful login
        router.push('/home'); // Redirect to the home page
      } catch (error) {
        setError(error.message);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        // Successful login
        router.push('/home'); // Redirect to the home page
      } catch (error) {
        setError(error.message);
      }
    };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="w-64">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 mb-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-2 rounded"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
        {/* Sign in with Google button */}
        <button onClick={handleSignIn}>Sign In with Google</button>
      </form>
      <p className="mt-2">
        Don't have an account?{' '}
        <button
          onClick={toggleForm}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Sign up
        </button>
      </p>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SigninForm;
