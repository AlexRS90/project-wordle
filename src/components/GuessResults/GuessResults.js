import React from 'react';

function GuessResults({result}) {
  return (
    <div className='guess-results'>
      {result.map((item, index) => (
        <p className="guess" key={index}>{item}</p>
      ))}
    </div>
  );
}

export default GuessResults;
