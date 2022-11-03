import component from './_component.module.scss';
import {
    Link
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Branches } from '../../../api/Students';
const options = []
Branches.forEach((element) => {
    options.push(
        { value: element.toString(), label: element.toString() }

    )
});
export default function Header({ onSearch, onBranch }) {

    const [value, SetValue] = useState("");

    const handleSearch = (e) => {
        SetValue(e.target.value);
    }
    // const handleFilter = (e) => {
    //     SetBranch(e.target.value);
    // }
    useEffect(() => {
        onSearch(value);

    }, [onSearch, value]);
    // useEffect(() => {
    //     onBranch(branch);
    // }, [onBranch, branch]);

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

                {/* <select onChange={(e) => handleFilter(e)}>
                    {Branches.map((branch, i) => {
                        return <option value={branch} key={i}>{branch}</option>
                    })}
                </select> */}




            </header>

        </>
    )
}