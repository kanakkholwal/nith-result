import Card from './Card';
import component from "./component.module.scss";
import React from 'react';

export default function Section({ data }) {

    if (!Array.isArray(data)) throw new Error('data must be an array');

    const students = data;

    return (
        <div className={component.ResultSection}>
            {
                (students && students.length > 0) ? students.map((student, index) => {
                    return <Card student={student} key={index} rank={student.Year_Rank} />
                })
                    :
                    <span className='Badge Badge_danger'>
                        Not Results Found...
                    </span>
            }
        </div>
    )
}