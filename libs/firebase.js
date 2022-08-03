import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD3ngm2O5pszWQMY-eU6YqgLNXoLPlVWCE",
    authDomain: "dinner-bca8e.firebaseapp.com",
    databaseURL: "https://dinner-bca8e-default-rtdb.firebaseio.com",
    projectId: "dinner-bca8e",
    storageBucket: "dinner-bca8e.appspot.com",
    messagingSenderId: "46450860407",
    appId: "1:46450860407:web:26203625b029dddc88c172"
  };    

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
 export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();