import { useState } from 'react';
import firebase from '../../firebase';

const SignupForm = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Successful signup, you can redirect the user to the home page or another page here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
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
          Sign Up
        </button>
      </form>
      <p className="mt-2">
        Already have an account?{' '}
        <button
          onClick={toggleForm}
          className="text-blue-500 hover:underline focus:outline-none"
        >
          Sign in
        </button>
      </p>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default SignupForm;
