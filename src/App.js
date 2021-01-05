import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => setMessage(data.message));
  });

  return (
    <p>Message from server: {message}</p>
  );
}

export default App;
