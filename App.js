import React from 'react';
import './App.scss';
import './assets/styles/general.scss';

import Countries from './assets/components/Countries';

import {
  BrowserRouter
} from "react-router-dom";

function App() {
  // calculate stuff
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">

          <Countries />

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
