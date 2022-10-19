import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDgmthXeE_u23V5kKat8EHme4AtRhBEEi4",
    authDomain: "nith-result.firebaseapp.com",
    projectId: "nith-result",
    storageBucket: "nith-result.appspot.com",
    messagingSenderId: "784793998246",
    appId: "1:784793998246:web:eb4c2befca14f59f08b567",
    measurementId: "G-88PP04M8D0"

};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(FirebaseApp);
// const database = getDatabase(FirebaseApp);

export default FirebaseApp;