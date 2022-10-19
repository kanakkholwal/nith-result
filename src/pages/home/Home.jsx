import Header from './components/Header';
import Section from './components/Section';
import Pagination from './components/Pagination';
import Students from '../../api/Students';
import React, { useState, useEffect } from 'react';

const LIMIT = 20;

export default function Home() {
    const [displayData, setDisplayData] = useState(Students());
    const [pageIndex, setPageIndex] = useState(1);
    const [search, setSearch] = useState("");

    const onPageUpdate = (input) => {
        setPageIndex(input);
    };
    const onSearch = (input) => {
        setSearch(input);
    }

    useEffect(() => {
        if (!(search.length > 0)) {
            setDisplayData(Students());
        }
        setPageIndex(1);
        setDisplayData(Students().filter((stud) => (stud.Name.toLowerCase().includes(search.toLowerCase()) || stud.RollNo.toLowerCase().includes(search.toLowerCase()))));

    }, [search]);

    return (
        <>
            <Header onSearch={onSearch} />
            <Section data={displayData.slice(LIMIT * (pageIndex - 1), LIMIT * (pageIndex))} />
            {
                (displayData.slice(LIMIT * (pageIndex - 1), LIMIT * (pageIndex + 1)).length > LIMIT) ?
                    (<Pagination pageIndex={pageIndex} onPageUpdate={onPageUpdate} maxIndex={Math.ceil(displayData.length / LIMIT)} />)
                    : <>

                    </>
            }

        </>)
}
