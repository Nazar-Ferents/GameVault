import React from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <Link href={'/games'}>Games List</Link>
            
        </header>
    );
};

export default Header;