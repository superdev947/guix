import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  authDomain: 'xxxxxxxx.firebaseapp.com',
  databaseURL: 'https://xxxxxxxx.firebaseio.com',
  projectId: 'xxxxxxxx',
  storageBucket: 'xxxxxxxx.appspot.com',
  messagingSenderId: '0000000000',
  appId: '1:0000000000:android:000000000000000',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };