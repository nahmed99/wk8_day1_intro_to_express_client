import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [message, setMessage] = useState({});

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => setMessage(data));
  }, []);

  return (
    <>
      <h3>Message from server:</h3> 
      <ul>
        <li>{message.message}</li>
      </ul>
    </>
  );
}

export default App;
