import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/firebase/initializeApp.init";
initializeAuthentication();
const useFirebase = () => {
          const [user,setUser] = useState({});
           const auth = getAuth()
            //  login use in google   

             const signInGoogle = () =>{
               const googleProvider = new GoogleAuthProvider();
               signInWithPopup(auth,googleProvider)
               .then((result)=>{
                    const user = result.user;
                    setUser(user);
               })
              .catch((err)=>{
                  const error = error.message;
              })
            }

            // sign out using google sign out proft 

            const signOutUsingGoogle = () =>{
                signOut(auth).then(()=>{

                }).catch((error) => {
               
                  });
            }
//   onstate change code is here state is not changing 

useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
           
            setUser(user);
           
        } else {
            setUser({})
        }
     
    });
    return () => unsubscribed;
}, [auth]);
            return{
                user,
                signInGoogle,
                signOutUsingGoogle
            }
};

export default useFirebase;