import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

window.socket = new WebSocket("ws://localhost:5225/ws")
window.socket.onerror = () => {
  root.render(
    <React.StrictMode>
      <h1>Was unable to connect</h1>
    </React.StrictMode>
  );
}

