import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'All Games'
}
type Props = { children: React.ReactNode }
const GamePage_Layout = ({children}: Props) => {
    return (
        <>

            {children}

        </>
    );
};

export default GamePage_Layout;