import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'

/** firebaseConfig.js
 * contains firebase configuration
 */

export const firebaseConfig = {
   
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
