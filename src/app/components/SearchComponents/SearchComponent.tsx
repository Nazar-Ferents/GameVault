import React from 'react';
import './search.css'

const SearchComponent = () => {
    return (
        <div className='search'>
            <form action="/search" className='search-form'>
                <input type="text" name='title' placeholder='Enter Game Title' />
                <button type='submit'>Search</button>
            </form>
            
            </div>
    );
};

export default SearchComponent;