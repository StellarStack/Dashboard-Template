import { useEffect, useState } from 'react';
import firebase from '../firebase';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      // Successful sign out, you can redirect the user to a login page or another page here
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return <p>You are not signed in.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default HomePage;
