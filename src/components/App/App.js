import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <p className={styles.subtitle}>H3ll0 World!</p>
        <List title={['Things to do ', <sup key='1'>soon!</sup>]} imageSrc='src/assets/space.png'/>
      </main>
    )
  }
}

export default App;
