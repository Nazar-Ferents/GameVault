import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Search Page'
}
type Props = { children: React.ReactNode }
const SearchPageLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default SearchPageLayout;