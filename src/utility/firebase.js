import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDGdimXamL16rwE7U9yH5pSVYx6rEglWXA",
    authDomain: "cohi-a1092.firebaseapp.com",
    projectId: "cohi-a1092",
    storageBucket: "cohi-a1092.appspot.com",
    messagingSenderId: "37816977030",
    appId: "1:37816977030:web:10e4cd9497bc4d6c9f3307"
};

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()
export const auth= firebase.auth()

export default firebase