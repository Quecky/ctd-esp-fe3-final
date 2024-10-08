import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <BrowserRouter>

      <App />

  </BrowserRouter>
  </ContextProvider>
);


