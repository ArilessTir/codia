import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

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
const storage = getStorage(app);

export default storage;
