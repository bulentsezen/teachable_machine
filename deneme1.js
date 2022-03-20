// JavaScript source code
const TeachableMachine = require("@sashido/teachablemachine-node");

const model = new TeachableMachine({
    modelUrl: "https://teachablemachine.withgoogle.com/models/r6BBk-hiN/"
});

model.classify({
    imageUrl: "https://i4.hurimg.com/i/hurriyet/75/750x422/5e5771550f254405d052eb10.jpg",
}).then((predictions) => {
    console.log("Predictions:", predictions);
}).catch((e) => {
    console.log("ERROR", e);
});