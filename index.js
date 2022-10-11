import { initializeApp, cert } from "firebase-admin/app";
import{getFirestore} from "firebase-admin/firestore"; 

import serviceAccount from './serviceAccount.js';


initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const newMovie = {
    title: 'Spider-Man No Way Home',
    rated: 'PG 13',
    genre: 'Action',
    realeased: 2021,
   
}


db.collection('movie').add(newMovie)
.then(doc => console.log('Movie created:', doc.id))

.catch(console.error)