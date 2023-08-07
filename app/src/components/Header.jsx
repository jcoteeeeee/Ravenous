import React from 'react' 
import styles from '/css-modules/Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>ravenous</h1>
        </header>
    )
}  

export default Header 