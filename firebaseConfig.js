
const firebaseConfig = {
    apiKey: "AIzaSyACaj45saNlxXxrL6UXxtWKafdS7u61-GU",
    authDomain: "sistema-de-gestao-integr-fd413.firebaseapp.com",
    projectId: "sistema-de-gestao-integr-fd413",
    storageBucket: "sistema-de-gestao-integr-fd413.firebasestorage.app",
    messagingSenderId: "829476186439",
    appId: "1:829476186439:web:4081e81db3de6c1aaf0462"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
