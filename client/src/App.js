import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header.react";
import DescompositionsDashboard from "./components/DescompositionsDashboard.react";
import CharacteristicsDashboard from "./components/CharacteristicsDashboard.react";
import SideBar from "./components/SideBar.react";

function App() {

  // TODO: localAppData / serverAppData / toggleData
  const [word, setWord] = useState("");
  const [data, setData] = useState("");
  const [language, setLanguage] = useState("");
  const [foundMessage, setFoundMessage] = useState("");
  const [columns, setColumns] = useState(3);

  const handleClick = (language) => {
    if (word.length <= 10) {
      setLanguage(language);
      setData("");
      let word_sorted = [...word];
      word_sorted.sort();
      word_sorted = word_sorted.join("");
      console.log(word_sorted);
      console.log(`/api?word=${word_sorted.toLowerCase()}&language=${language}`);
      fetch(`/api?word=${word_sorted.toLowerCase()}&language=${language}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }})
         .then(async response => {
          try {
           const data = await response.json()
           console.log('response data?', data)
           setData(data.message);
           setFoundMessage(data.foundMessage)  
         } catch(error) {
           console.log('Error happened here!')
           console.error(error)
         }
        })
    } else {
      alert("La palabra no puede tener más de 9 caracteres");
    }
  };

  
  return (
    <div className="App">
      <SideBar setColumns={setColumns} columns={columns}/>
      <Header />
      <input className="word-input"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
          setLanguage('');
          setFoundMessage('');
          setData([]);
        }}
      />
      <div>
        <button
          className={language === "english" ? "selected" : ""}
          value="english"
          onClick={(e) => handleClick(e.target.value)}
        >
          Inglés
        </button>
        <button
          className={language === "spanish" ? "selected" : ""}
          value="spanish"
          onClick={(e) => handleClick(e.target.value)}
        >
          Español
        </button>
      </div>
      <CharacteristicsDashboard word={word} />
      <DescompositionsDashboard data={data} word={word} foundMessage={foundMessage} columns={columns} />
    </div>
  );
}

export default App;
