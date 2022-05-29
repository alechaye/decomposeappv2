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
    <div className='body'>
    {word
      && `${
          word.toUpperCase()
        } has ${numPerm} decompositions in total`
      }
  </div>
  )
}

export default CharacteristicsDashboard;
