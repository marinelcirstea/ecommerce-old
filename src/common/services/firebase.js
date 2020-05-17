import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyARs5JqSpBdoE31zam5MfzMGVfG4cZ5uYg',
  authDomain: 'marinel-cirstea.firebaseapp.com',
  databaseURL: 'https://marinel-cirstea.firebaseio.com',
  projectId: 'marinel-cirstea',
  storageBucket: 'marinel-cirstea.appspot.com',
  messagingSenderId: '634668380712',
  appId: '1:634668380712:web:25ab4d7176a4ea5feefb1d',
  measurementId: 'G-FTMSTR3EHN',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
