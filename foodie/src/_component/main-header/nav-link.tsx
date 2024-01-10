'use client'

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import * as React from 'react';
import classes from './nav-link.module.css';

type Props = {href: string, children: React.ReactNode};

export default function NavLink(props:Props): React.JSX.Element {
    console.log(props);
    const path = usePathname();
    return (
        <Link className={path.startsWith(props.href) ? `${classes.link} ${classes.active}` : classes.link} href={props.href}>Browse
            {props.children}</Link>
    );
};