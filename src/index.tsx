import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Redirecter from './Redirecter';

const DISCORD_LINK = "https://discord.gg/8ZZ3TXFCZb";
const GITHUB_LINK = "https://github.com/stardust-enterprises";
const SOURCE_LINK = `${GITHUB_LINK}/frontend`;

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/discord" element={<Redirecter to={DISCORD_LINK} />} />
        <Route path="/github" element={<Redirecter to={GITHUB_LINK} />} />
        <Route path="/source" element={<Redirecter to={SOURCE_LINK} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals(/*console.log*/);
