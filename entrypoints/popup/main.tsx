import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style.css';
import { newMockChrome } from '../mock/chrome.ts';

if (import.meta.env.VITE_DEVELOPMENT === "true") {
  console.log('Development mode');
  // @ts-ignore
  window.chrome = newMockChrome();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
