import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import { range } from '../../utils';


function GuessResults({result}) {
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map(num => (
        <Guess key={num} value={result[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
