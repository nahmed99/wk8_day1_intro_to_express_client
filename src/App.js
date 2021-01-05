import './App.css';
import React, {useEffect} from 'react';

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => console.log(data));
  });

  return (
    <h1>Intro to Express</h1>
  );
}

export default App;
