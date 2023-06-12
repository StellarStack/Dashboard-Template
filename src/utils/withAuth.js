import { useRouter } from "next/router";
import { useEffect } from "react";
import firebase from "../firebase";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          // User is not signed in, redirect to login
          router.push("/login");
        }
      });

      return () => unsubscribe();
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
