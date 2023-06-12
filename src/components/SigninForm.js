import { useState } from "react";
import firebase from "../firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "/public/Assets/logo.png";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const SigninForm = ({ toggleForm }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        router.push("/Dashboard");
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  const handleSignInWithFacebook = async () => {
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        router.push("/Dashboard");
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      await user.updateProfile({
        displayName: name,
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error.message);
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
    <div className="bg-[#b0d8da] w-[100%] h-[100%] flex justify-between">
      <div>
        <Image className="pt-6" src={Logo} width={120} height={80} />
      </div>

      <div className="w-[940px] bg-white h-[100%] ">
        <div className="flex gap-2 text-gray-400 justify-end pr-32 pt-12 ">
          <p>English(UK)</p>
          <svg
            className="mt-1"
            width="26"
            height="19"
            viewBox="0 0 26 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13 19L0.875645 0.25L25.1244 0.25L13 19Z" fill="#C4C4C4" />
          </svg>
        </div>

        <div className="flex flex-col items-center mt-10">
          <h2 className="text-3xl font-bold mb-10">Login</h2>
          <form onSubmit={handleSubmit} className="w-64">
            <input
              type="name"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b border-gray-300 p-2 w-[350px] mb-2"
            />
            <input
              type="Email Address"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-gray-300 p-2 w-[350px] mb-2 rounded"
            />{" "}
            <input
              type="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-gray-300 p-2 w-[350px] mb-2  rounded"
            />
            <div className="pt-12">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700  text-white w-[350px] font-bold py-2 px-4 rounded "
              >
                Sign In
              </button>
            </div>
            <button onClick={handleSignInWithGoogle}>
              Sign In with Google
            </button>
            <button onClick={handleSignInWithFacebook}>
              Sign In with Facebook
            </button>
          </form>
          <p className="mt-2 pt-4  text-gray-400">
            Don't have an account?{" "}
            <button
              onClick={toggleForm}
              className="text-blue-500  hover:underline focus:outline-none"
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

export default SigninForm;
