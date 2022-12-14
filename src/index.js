import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import Imagens from './Imagens';
import Interface from './Interface';
import tabelas from './tabelas';
import reportWebVitals from './reportWebVitals';
import Tabelass from './tabelas.jsx';
import Imagenss from './Imagens.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
