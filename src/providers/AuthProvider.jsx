import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext=createContext(null);
const auth=getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleprovider = new GoogleAuthProvider();
  const axiosPublic=useAxiosPublic();



  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn=()=>{

            setLoading(true);
            return signInWithPopup(auth,googleprovider)


  }

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

 


  const updateuserprofile=(name,photo)=>{

   return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })



  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      setUser(currentUser);
      setLoading(true); // Set loading to true before performing network request
      if (currentUser) {
        try {
          // Get JWT token and store client
          const userinfo = { email: currentUser.email };
          const res = await axiosPublic.post('/jwt', userinfo);
          if (res.data.token) {
            localStorage.setItem('access-token', res.data.token);
            setLoading(false);

          }
        } catch (error) {
          console.error("Error fetching JWT token:", error);
          // Handle error gracefully, e.g., display a message to the user
        } finally {
          setLoading(false); // Set loading to false after network request completes
        }
      } else {
        localStorage.removeItem('access-token');
        setLoading(false); // Set loading to false when there's no current user
      }
    });

    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    updateuserprofile,
    googleSignIn
    
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;