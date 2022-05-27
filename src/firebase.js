// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: 'AIzaSyCV8SYPjWLwiIahVgcqn5U4GXLvXvqEUOM',

    authDomain: 'codia-d9b14.firebaseapp.com',

    projectId: 'codia-d9b14',

    storageBucket: 'codia-d9b14.appspot.com',

    messagingSenderId: '427574092726',

    appId: '1:427574092726:web:395e1214e088ddb3711717',

    measurementId: 'G-QDSQD287B7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
