import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import classes from "./main-header.module.css";
import logoImg from "../../../assets/logo.png";
import MainHeaderBackground from './main-header-background';
type Props = {

};
export default function MainHeader(props:Props): React.JSX.Element {
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
                        <Link href={"/meals"}>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href={"/community"}>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
};