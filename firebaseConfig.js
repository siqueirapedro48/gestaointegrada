
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_DOMINIO.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_BUCKET.appspot.com",
    messagingSenderId: "SEU_MESSAGING_ID",
    appId: "SEU_APP_ID"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
