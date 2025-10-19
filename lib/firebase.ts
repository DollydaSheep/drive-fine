import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, 
        //@ts-ignore
        getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBaQGfeYA6vk7_9CBk_dNk3P_Pa13UD1TY",
  authDomain: "drive-fine.firebaseapp.com",
  projectId: "drive-fine",
  storageBucket: "drive-fine.firebasestorage.app",
  messagingSenderId: "707445301495",
  appId: "1:707445301495:web:9f1f58820204fa841b73f2",
  measurementId: "G-CNFX92HVFX"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth with React Native persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;