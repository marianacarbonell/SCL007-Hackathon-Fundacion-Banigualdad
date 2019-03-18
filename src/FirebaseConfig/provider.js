import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyAYjPfSw_MMzHyU5uSvd0bd3Id_BCudVjI",
    authDomain: "banigualdad-97a6a.firebaseapp.com",
    databaseURL: "https://banigualdad-97a6a.firebaseio.com",
    projectId: "banigualdad-97a6a",
    storageBucket: "banigualdad-97a6a.appspot.com",
    messagingSenderId: "478990811113"
};
firebase.initializeApp(config);

export const database = firebase.database().ref();