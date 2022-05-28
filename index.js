const express = require("express");
const path = require("path");
const { getRealWordsSpanish } = require("./spanish.js");
const { getRealWordsEnglish } = require("./english.js");

const PORT = process.env.PORT || 4000;

const app = express();

const languages_in_spanish = {
  spanish: "español",
  english: "inglés",
};

app.use(express.static(path.resolve(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.get("/api", (req, res) => {
  const word = req.query.word;
  const language = req.query.language;
  // const message =
  //   language === "spanish"
  //     ? getRealWordsSpanish(word)
  //     : getRealWordsEnglish(word);
  const message = ["Prueba", "de", "backend"];
  res.json({
    message: [...message],
    foundMessage: !message.size
      ? `Ninguna palabra fue encontrada`
      : `Sus descomposiciones válidas en ${languages_in_spanish[language]} son:`,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
