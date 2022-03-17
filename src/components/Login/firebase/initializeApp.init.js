import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.config"
const initializeAuthentication = () =>{
  const app = initializeApp(firebaseConfig);
   return app;
};
export default initializeAuthentication;