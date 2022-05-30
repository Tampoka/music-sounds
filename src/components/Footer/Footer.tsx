import styles from './Footer.module.css'

import React from 'react';

export const Footer = () => {
    const currentYear=new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <a href="https://github.com/Tampoka">My Github</a>
            <br />
            {currentYear}
        </footer>
    );
};

