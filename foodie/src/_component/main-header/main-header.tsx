'use client'

import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import logoImg from "../../../assets/logo.png";
import MainHeaderBackground from './main-header-background';
import {usePathname} from 'next/navigation';
import NavLink from './nav-link';

type Props = {};
export default function MainHeader(props: Props): React.JSX.Element {
    const path = usePathname();
    return (
        <>
            <MainHeaderBackground/>
            <header className={classes.header}>
                <Link className={classes.logo} href={"/"}>
                    <Image src={logoImg} alt={"Logo.png"} priority/>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/community"}>Foodies
                                Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};