import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCiWcAFgumlUpq9LnJJ2RJAnSsrMG9x7Fc",
    authDomain: "bubble-tea-be758.firebaseapp.com",
    databaseURL: "https://bubble-tea-be758.firebaseio.com",
    projectId: "bubble-tea-be758",
    storageBucket: "bubble-tea-be758.appspot.com",
    messagingSenderId: "227175565304",
    appId: "1:227175565304:web:b43fb02ae0618876def80d"
};

firebase.initializeApp(config);
const db = firebase.firestore();

const snapshotToArray = (snapShot) => {
	const arr = [];
    snapShot.forEach((doc) => { arr.push(doc.data()) });
    return arr;  
}

export { db, snapshotToArray }