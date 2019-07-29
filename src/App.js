import React from 'react';
import './App.css';

import Title from './components/Title'
import Results from './components/Results'

const API_KEY = "cc86a25e82d8001abee3b2476144e005"

const App = () => {
  return (
    <div id="root">
      <Title />
      <Results API_KEY={API_KEY} />
    </div>
  );
}

export default App;
