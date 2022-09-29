import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAmzEWjnmezxJU2FXioXoWZwi_YB3vFB2U',
  authDomain: 'catch-of-the-day-tb-6881b.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-tb-6881b-default-rtdb.firebaseio.com',
  projectId: 'catch-of-the-day-tb-6881b',
  //   storageBucket: 'catch-of-the-day-tb-6881b.appspot.com',
  //   messagingSenderId: '410956356283',
  //   appId: '1:410956356283:web:daadb950abc0b0b708e79e',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
