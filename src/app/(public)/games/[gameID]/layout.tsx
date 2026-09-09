import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GamePage'
}
type Props = { children: React.ReactNode }
const GamePageLayout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default GamePageLayout;