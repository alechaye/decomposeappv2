import React from 'react'
import { useState, useEffect } from 'react';

import { numberOfPermutations } from "./factorial";

const CharacteristicsDashboard = ({word}) => {
  const [numPerm, setNumPerm] = useState(null);
  useEffect(() => {
    if (word) {
      setNumPerm(numberOfPermutations(word.length));
    }
}, [word]);

  return (
    <div>
    {word
      ? `${
          word[0].toUpperCase() + word.slice(1).toLowerCase()
        } tiene ${word.length} letras y ${numPerm} descomposiciones posibles`
      : ""}
  </div>
  )
}

export default CharacteristicsDashboard;
