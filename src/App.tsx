import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />

        <ul className="links">
          <li>
            <a
              href="/github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub}/> GitHub
            </a>
          </li>
          <li>
            <a
              href="/discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDiscord}/> Discord
            </a>
          </li>
        </ul>

        <span className="hint">
          psst! this website is <b>also</b> open-source! you can browse its
          code <a href="/source" target="_blank" rel="noopener noreferrer">here</a>.
        </span>
      </header>
    </div>
  );
}

export default App;
