import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchString, setSearchString] = useState('');

  const updateSearchString = event => {
    console.log('searchString', searchString);
    setSearchString(event.target.value);
  };
  return (
    <div className="App">
      <h1>HELLO!</h1>
      <div className="form">
        <input value={searchString} onChange={updateSearchString} />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
