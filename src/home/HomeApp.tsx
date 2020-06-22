import React from 'react';
import {
  Link,
} from 'react-router-dom';

import logo from './logo.svg';
import styles from './HomeApp.module.css';

function HomeApp(): JSX.Element {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          <code>Hello, React Micro Frontend @ 2020</code>
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/app-example">App Example</Link>
          </li>
          <li>
            <Link to="/app-example/sub">{'App Example\'s Sub'}</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default HomeApp;
