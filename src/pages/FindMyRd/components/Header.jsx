import component from './_components.module.scss';
import {
    Link
} from "react-router-dom";
import React from 'react';
export default function Header() {



    return (
        <>
            <nav className={component.Navbar}>
                <Link to="/" className={component.navBrand + " Badge_positioned"} >
                    NITH Results
                </Link>
            </nav>
            <header className={component.Header}>
                <h1 className={component.Title}> Find Your R.D. or R.B. </h1>
            </header>

        </>
    )
}