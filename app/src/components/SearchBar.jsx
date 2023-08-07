import React from 'react'  

const SearchBar = () => {
    return(
        <> 
            <section>
                <h2>Best Match</h2> 
                <h2>Highest Rated</h2> 
                <h2>Most Reviewed</h2>   
            </section>
            <form>
                <input id='search' /> 
                <input id='location' />   
                <button>Lets Go</button>
            </form>
        </>
    )
}  

export default SearchBar 