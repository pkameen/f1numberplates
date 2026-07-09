import { initializeApp, getApps, getApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDX42E5BpznvCR_wX57QQ6cDlEZ878w14s",
  authDomain: "f1-number-plates.firebaseapp.com",
  projectId: "f1-number-plates",
  storageBucket: "f1-number-plates.firebasestorage.app",
  messagingSenderId: "638916389595",
  appId: "1:638916389595:web:89e512577ccf64e16d7afe",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;