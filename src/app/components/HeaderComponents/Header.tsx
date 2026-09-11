import React from 'react';
import Link from "next/link";
import SearchComponent from "@/src/app/components/SearchComponents/SearchComponent";

const Header = () => {
    return (
        <header>
            <Link href={'/games'}>Games List</Link>
            <br/>
            <Link href={'/genres'}>Genres List</Link>
            <SearchComponent/>
            
        </header>
    );
};

export default Header;