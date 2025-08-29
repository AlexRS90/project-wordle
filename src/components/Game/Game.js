import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [result, setResult] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleResult(word) {
    const newResult = [...result, word];
    setResult(newResult);
    if(word === answer){
      setGameStatus('won');
    } else if(newResult.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost');
    }
  }

  return (
    <>
      {gameStatus}
      <GuessResults result={result} answer={answer} />
      <GuessInput handleResult={handleResult} gameStatus={gameStatus} />
      <Banner gameStatus={gameStatus} answer={answer} numOfGuesses={result.length} />
    </>
  );
}

export default Game;
