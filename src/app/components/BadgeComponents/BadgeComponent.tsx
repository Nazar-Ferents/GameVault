import React, {FC} from 'react';
import Link from "next/link";
import './badge.css'

type PropsType = {
    link:string;
    name:string;
}
const BadgeComponent:FC<PropsType> = ({link,name}) => {
    return (
        <div className="badge">
            <Link href={link} >{name}</Link>
        </div>
    );
};

export default BadgeComponent;