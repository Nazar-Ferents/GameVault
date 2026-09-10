import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Link href={'/games'}>Games List</Link>
            <br/>
            <Link href={'/genres'}>Genres List</Link>
            
        </header>
    );
};

export default Header;