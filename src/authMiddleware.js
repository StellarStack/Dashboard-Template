import { useRouter } from "next/router";
import { useEffect } from "react";
import firebase from "./firebase";

const useAuthMiddleware = () => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // User is not authenticated, redirect to the login page
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);
};

export default useAuthMiddleware;
