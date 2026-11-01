import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initAos } from './hooks/useAos';
// AOS 2.3.4 — byte-identical to the stylesheet the live Perez demo serves at
// wp-content/themes/perez/assets/css/plugins/aos.css
import 'aos/dist/aos.css';
import './styles/react-enhancements.css';

// Before the first render, so AOS's own initial scan finds no elements.
initAos();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
