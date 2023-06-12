import React from "react";
import Image from "next/image";
import triangle from "/public/Assets/triangle.png";
import homepic from "/public/Assets/home-pic.png";
import { useEffect } from "react";
import { useRouter } from 'next/router';
import firebase from "../firebase";

const Dashboard = () => {

  const router = useRouter();

  useEffect(() => {
    // Check if a user is signed in
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, proceed to dashboard
        router.push('/dashboard');
      } else {
        // User is not signed in, redirect to login
        router.push('/login');
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);
  return (
    <div className="">
      <div className="bg-black">
        <Image className="w-[35px] h-[35px]" src={triangle} />
        <div>
          <Image className="w-[18px] h-[18px]" src={homepic} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
