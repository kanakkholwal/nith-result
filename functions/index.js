const functions = require("firebase-functions");
const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    res.json({ title: "home" });
});
app.get("/rest-api/", (req, res) => {
    res.json({ title: "NITH Results Rest API" });
});
app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`)
});

exports.app = functions.https.onRequest(app);
