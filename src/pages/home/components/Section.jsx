import Card from './Card';
import component from "./_component.module.scss";
import React from 'react';

export default function Section({ data }) {

    if (!Array.isArray(data)) throw new Error('data must be an array');

    const students = data;



    return (
        <div className={component.ResultSection}>
            {
                (students?.length > 0) ? students.map((student, index) => {
                    return <Card student={student} key={index} style={{ animationDelay: `${(1 / students.length) * index}s` }} />
                })
                    :
                    <span className='Badge Badge_danger animate_bounce' style={{ animationDuration: "2s" }}>
                        Not Results Found...
                    </span>
            }
        </div>
    )
}