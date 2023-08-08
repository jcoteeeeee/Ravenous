import React from 'react'    
import styles from '/css-modules/SearchBar.module.css'  

const SearchBar = () => {
    return(
        <div className={styles.searchbarContainer} >   
            <section className={styles.sortingOptions} >
                <h2 className={styles.option} >Best Match</h2> 
                <h2 className={styles.option} >Highest Rated</h2> 
                <h2 className={styles.option} >Most Reviewed</h2>   
            </section>
            <form className={styles.searchForm}> 
                <section>
                    <input className={styles.input} placeholder='Search Business' /> 
                    <input className={styles.input} placeholder='Where?' />    
                </section> 
                <section className={styles.buttonContainer}> 
                    <button className={styles.button}>Lets Go</button>
                </section> 
            </form>
        </div>
    )
}  

export default SearchBar 