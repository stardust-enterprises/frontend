import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />

        <ul className="links">
          <li>
            <a
              href="https://github.com/stardust-enterprises"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          &nbsp;-&nbsp;
          <li>
            <a
              href="https://discord.stardustenterprises.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </li>
        </ul>

        <span className="hint">
          this page is a temporary placeholder.
        </span>
      </header>
    </div>
  );
}

export default App;
