import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <p className={styles.subtitle}>H3ll0 World!</p>
        <List/>
      </main>
    )
  }
}

export default App;
