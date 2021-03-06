const express = require("express");
const path = require("path");
const { getRealWordsSpanish } = require("./spanish.js");
const { getRealWordsEnglish } = require("./english.js");

const PORT = process.env.PORT || 4000;

const app = express();

const languages_in_spanish = {
  spanish: "SPANISH",
  english: "ENGLISH",
};

app.use(express.static(path.resolve(__dirname, "client/build")));

app.get("/api", (req, res) => {
  const word = req.query.word;
  const language = req.query.language;
  const message =
    language === "spanish"
      ? getRealWordsSpanish(word)
      : getRealWordsEnglish(word);
  res.json({
    message: [...message],
    foundMessage: !message.size
      ? `Any word was found`
      : `Its valid in ${languages_in_spanish[language]} are:`,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
