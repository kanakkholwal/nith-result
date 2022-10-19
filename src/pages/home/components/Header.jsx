import component from './component.module.scss';
import {
    Link
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
export default function Header({ onSearch }) {

    const [value, SetValue] = useState("");

    const handleSearch = (e) => {
        SetValue(e.target.value);
    }
    useEffect(() => {
        onSearch(value);
    }, [onSearch, value]);

    return (
        <>
            <nav className={component.Navbar}>
                <Link to="/" className={component.navBrand + " Badge_positioned"} >
                    NITH Results
                </Link>
            </nav>
            <header className={component.Header}>
                <h1 className={component.Title}> Search By Name or Roll No. </h1>
                <div className={component.searchSection}>
                    <input type="search" name="name" className={"G_Form-input " + component.SearchBar} placeholder="e.g. 21bph050 " value={value} onChange={(e) => handleSearch(e)} />
                </div>
            </header>

        </>
    )
}