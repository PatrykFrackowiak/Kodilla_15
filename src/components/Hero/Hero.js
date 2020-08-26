import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>ToDo List</h2>
        <img className={styles.image} src="src/assets/space.png" />
    </header>
);

export default Hero;
