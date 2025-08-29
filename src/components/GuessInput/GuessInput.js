import React from 'react';

function GuessInput({handleResult, gameStatus}) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if(guess.length !== 5) {
      window.alert("Please type 5 letters word. =D");
      return;
    }
    handleResult(guess);
    setGuess('');
  }
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={handleSubmit}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        disabled={gameStatus !== 'running'}
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        value={guess}
        onChange={event => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
