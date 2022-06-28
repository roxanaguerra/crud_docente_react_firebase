import * as firebase from 'firebase/app';
import "firebase/database";
import 'firebase/firestore';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCs_dygFTwz4lCUHeuYv5xTwIuhvvcu1Ic",
    authDomain: "crud-react-docente.firebaseapp.com",
    databaseURL: "https://crud-react-docente-default-rtdb.firebaseio.com",
    projectId: "crud-react-docente",
    storageBucket: "crud-react-docente.appspot.com",
    messagingSenderId: "342818337009",
    appId: "1:342818337009:web:dff9238fe66619976f3950"
  };

// Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig);

export const db = getFirestore(fb);