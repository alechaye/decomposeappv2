const { readFileSync } = require("fs");

const path = "./data/usa2.txt";
const text = readFileSync(path, "utf-8");
const wordDictionary = new Set(text.split("\n"));

const hasWordEnglish = (text) => wordDictionary.has(text);

function getCombinations(A, comb = [], result = [comb]) {
  for (var i = 0; i < A.length; i++)
    result = result.concat(
      getCombinations(A.slice(0, i).concat(A.slice(i + 1)), comb.concat(A[i]))
    );
  return result;
}

const getRealWordsEnglish = (word) =>
  new Set(
    getCombinations(word)
      .map((arr) => arr.join(""))
      .filter((word) => word.length >= 2 && wordDictionary.has(word))
  );

module.exports = {hasWordEnglish, getRealWordsEnglish}