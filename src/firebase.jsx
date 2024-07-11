import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDJUaeURcwRehuCQgyAtjWzx-ttfDo1T0s",
    authDomain: "centric-opium.firebaseapp.com",
    projectId: "centric-opium",
    storageBucket: "centric-opium.appspot.com",
    messagingSenderId: "164550274048",
    appId: "1:164550274048:web:7b82d8809345f1a3073ce5",
    measurementId: "G-7EMG3B8FVZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);