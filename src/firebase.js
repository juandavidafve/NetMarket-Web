import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaWZ1FN-lktCllRe-8ab5NmRN9nZMxKf8",
  authDomain: "netmarket-c3da0.firebaseapp.com",
  projectId: "netmarket-c3da0",
  storageBucket: "netmarket-c3da0.appspot.com",
  messagingSenderId: "569859673751",
  appId: "1:569859673751:web:0fb8cc9e7851909292e3d2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
