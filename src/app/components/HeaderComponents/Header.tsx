import React from 'react';
import Link from "next/link";
import SearchComponent from "@/src/app/components/SearchComponents/SearchComponent";
import './header.css'

const Header = () => {
    return (
        <header className='header'>
            <Link href={'/games'} className='logo'>GAME VAULT</Link>
            <nav className='navigation'>

            <Link href={'/genres'}>Genres List</Link>
            </nav>
            <SearchComponent/>
            
        </header>
    );
};

export default Header;