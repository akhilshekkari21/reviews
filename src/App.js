import React from 'react';
import './App.css';
import Accorditionslist from './components/Accorditionslist';
import { data } from './components/data';
function App() {
  return (
    <div className="App">
        <Accorditionslist data = {data}/>
    </div>
  );
}

export default App;
