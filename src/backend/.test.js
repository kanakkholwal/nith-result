const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const functions = require('firebase-functions');

const firebaseConfig = {
    apiKey: "AIzaSyDgmthXeE_u23V5kKat8EHme4AtRhBEEi4",
    authDomain: "nith-result.firebaseapp.com",
    projectId: "nith-result",
    storageBucket: "nith-result.appspot.com",
    messagingSenderId: "784793998246",
    appId: "1:784793998246:web:eb4c2befca14f59f08b567",
    measurementId: "G-88PP04M8D0"
};

admin.initializeApp(firebaseConfig);
const app = express();
app.use(cors({ origin: true }));

app.post('/', async (req, res) => {
    const user = req.body;
    await admin.firestore().collection('students').add(user);
    res.status(201).send();
});

app.get("/:id", async (req, res) => {
    const snapshot = await admin.firestore().collection('users').doc(req.params.id).get();
    const userId = snapshot.id;
    const userData = snapshot.data();
    res.status(200).send(JSON.stringify({ id: userId, ...userData }));
})
app.get('/', async (req, res) => {
    const snapshot = await admin.firestore().collection('users').get();
    let users = [];
    snapshot.forEach(doc => {
        let id = doc.id;
        let data = doc.data();
        users.push({ id, ...data });
    });
    res.status(200).send(JSON.stringify(users));
});
app.put("/:id", async (req, res) => {
    const body = req.body;
    await
        admin.firestore().collection('users').doc(req.params.id).update(body);
    res.status(200).send()
});
app.delete("/:id", async (req, res) => {
    await
        admin.firestore().collection("users").doc(req.params.id).delete();

    res.status(200).send();
})
exports.user = functions.https.onRequest(app);
