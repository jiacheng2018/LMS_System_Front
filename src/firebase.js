import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
var firebaseConfig = {
          apiKey: 'AIzaSyDKG6UWW3BuLrv-ADjbUb3IFh_V71KoY0Q',
          authDomain: 'project3-259708.firebaseapp.com',
          databaseURL: 'https://project3-259708.firebaseio.com',
          projectId: 'project3-259708',
          storageBucket: 'project3-259708.appspot.com',
          messagingSenderId: '214420770396',
          appId: '1:214420770396:web:e5cd7dcd715fcaf09ca099',
          measurementId: 'G-87YBLYYSTR'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
