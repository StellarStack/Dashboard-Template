import { useState } from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '/public/Assets/logo.png'
import Diamond from '/public/Assets/Diamond.png'
import Google from '/public/Assets/Google.png'
import Facebook from '/public/Assets/Facebook.png'

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
    <div className='w-[100%] h-[100%] bg-[#b0d8da] flex'>
      <div className='w-[30%] h-[100%]'>
        <div className='absolute'>
          <Image className='pt-4' src={Logo} width={100} height={80} />
          <div className='text-white text-2xl font-bold pl-8 pt-4'>
            <p>Find 3D Objects, Mockups and <br />
              Illustrations here.</p>
          </div>
          <div className='relative left-8'>
            <Image className='pt-8  w-[550px] h-[400px]  ' src={Diamond} width={500} height={40} />
          </div>
        </div>
      </div>

      <div className='w-[70%] bg-white h-[100%] border rounded-l-3xl'>
        <div className='flex gap-2 text-gray-400 justify-end pr-28 pt-8'>
          <p>English(UK)</p>
          <svg className='mt-1' width="22" height="14" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 19L0.875645 0.25L25.1244 0.25L13 19Z" fill="#C4C4C4" />
          </svg>
        </div>


        <h2 className="text-3xl font-bold max-w-[250px] mx-auto pt-10 pb-8">Create Account</h2>
        <div className='flex gap-14 max-w-[450px] mx-auto'>
          <div className='w-[190px] rounded-xl h-10 border border-[#A6A6A6] flex justify-center gap-3 items-center text-[#9D9D9D]'>
            <Image className='h-6 w-6' src={Google} />
            <p className='text-sm font-medium'>Sign up with google</p>
          </div>
          <div className='w-[200px] rounded-xl h-10 border border-[#A6A6A6] flex justify-center gap-2 items-center text-[#9D9D9D]'>
            <Image className='h-8 w-8' src={Facebook} />
            <p className='text-sm font-medium'>Sign up with Facebook</p>
          </div>
        </div>

        <div className='text-[#A6A6A6] text-xl font-semibold max-w-[70px] mx-auto pt-8 pb-10'>- OR -</div>
        <div className="flex flex-col max-w-[400px] mx-auto">
          
          <form onSubmit={handleSubmit} className="w-64">
            <input
              type="text"
              placeholder="Full name"

              className="border-b border-gray-300 font-semibold p-2 w-96 mb-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-300 font-semibold p-2 w-96 mb-2 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-gray-300 font-semibold p-2 w-96 mb-2  rounded"
            />
            <button type="submit" className="w-96 mt-12 bg-[#b0d8da] hover:bg-blue-400 text-white tracking-wide font-bold py-2 px-4 rounded">
              Create Account
            </button>
          </form>
          <p className="mt-2 text-[#A6A6A6] font-semibold m-0">
            Already have an account?{' '}
            <button
              onClick={toggleForm}
              className="text-[#B0D8DA] hover:underline focus:outline-none"
            >
              Login
            </button>
          </p>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
