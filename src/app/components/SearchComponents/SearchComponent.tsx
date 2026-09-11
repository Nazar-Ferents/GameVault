import React from 'react';

const SearchComponent = () => {
    return (
        <div>
            <form action="/search">
                <input type="text" name='title' placeholder='Enter Game Title' />
                <button type='submit'>Submit</button>
            </form>
            
            </div>
    );
};

export default SearchComponent;