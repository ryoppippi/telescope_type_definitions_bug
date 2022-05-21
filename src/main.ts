import * as Vosk from "vosk-browser";

const model = await Vosk.createModel("model.tar.gz");

const recognizer = new model.KaldiRecognizer(16000);
recognizer.on("result", (message) => {
  console.log(message);
});
