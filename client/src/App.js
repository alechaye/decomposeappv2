/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import "./App.css";

import DescompositionsDashboard from "./components/DescompositionsDashboard.react";
import CharacteristicsDashboard from "./components/CharacteristicsDashboard.react";
import Footer from "./components/Footer.react";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import { deepPurple } from "@mui/material/colors";
import Link from "@mui/material/Link";

const primary = deepPurple[900];

function App() {
  const CHARACTER_LIMIT = 9;
  // TODO: localAppData / serverAppData / toggleData
  const [word, setWord] = useState("");
  const [data, setData] = useState("");
  const [language, setLanguage] = useState("");
  const [foundMessage, setFoundMessage] = useState("");
  const [showHeader, setShowHeader] = useState(true);

  const handleClick = (language) => {
    setLanguage(language);
    setData("");
    let word_sorted = [...word];
    word_sorted.sort();
    word_sorted = word_sorted.join("");
    setShowHeader(false);
    fetch(`/api?word=${word_sorted.toLowerCase()}&language=${language}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(async (response) => {
      try {
        const data = await response.json();
        setData(data.message);
        setFoundMessage(data.foundMessage);
      } catch (error) {
        console.log("Error happened here!");
        console.error(error);
      }
    });
  };

  return (
    <div className="App">
      {showHeader && (
        <div className="header">
          <Typography
            align="center"
            variant="h3"
            color={primary}
            sx={{ fontStyle: "italic" }}
          >
            Decompose
          </Typography>
          <div className="p8" />

          <div className="body">
            Know all the valid words that can be made from the letters of the
            original one
          </div>
          <div className="p8" />
          <OutlinedInput
            inputProps={{
              maxlength: CHARACTER_LIMIT,
            }}
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
              setLanguage("");
              setFoundMessage("");
              setData([]);
            }}
            margin="dense"
            variant="outlined"
            placeholder="Start Writing"
            endAdornment={
              <InputAdornment position="end">
                {word.length}/{CHARACTER_LIMIT}
              </InputAdornment>
            }
          />
          <div className="p8" />
          <div>
            <button
              className="buttonLanguage"
              value="english"
              onClick={(e) => handleClick(e.target.value)}
            >
              English
            </button>
          </div>
          <div className="p4" />
          <div>
            <button
              className="buttonLanguage"
              value="spanish"
              onClick={(e) => handleClick(e.target.value)}
            >
              Spanish
            </button>
          </div>
        </div>
      )}
      {!showHeader && (
        <div>
        <div className="p8" />
          <button
            className="buttonTry"
            onClick={() => {
              setShowHeader(true);
              setFoundMessage("");
              setData([]);
              setWord("");
              setLanguage("");
            }}
          >
            TRY ANOTHER WORD
          </button>
        </div>
      )}
      <div className="p8" />
      <CharacteristicsDashboard word={word} />
      <DescompositionsDashboard
        data={data}
        word={word}
        foundMessage={foundMessage}
      />
      <div className="p8" />
      <div className="p8" />
       <Footer />
    </div>
  );
}

export default App;
