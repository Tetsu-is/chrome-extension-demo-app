import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    chrome.runtime.sendMessage({ message: 'Hello from popup!' }, (response) => {
      console.log("callback using response is called!!, response: ", response);
      const message = document.getElementById('message');
      if (message) {
        message.textContent = 'message from bg: ' + response.message;
      }
    }
  );

  }

  return (
    <>
      <h1>Demo-App</h1>
      <button onClick={handleClickButton}>Send message to service worker</button>
      <p id='message'>message from bg: </p>
    </>
  );
}

export default App;
