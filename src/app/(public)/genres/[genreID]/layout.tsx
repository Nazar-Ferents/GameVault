import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GamesByGenresPage'
}
type Props = { children: React.ReactNode }
const GamesByGenresPageLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default GamesByGenresPageLayout;