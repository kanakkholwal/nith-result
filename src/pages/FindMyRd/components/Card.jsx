import component from './_components.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Card({ student, ...props }) {
    if (!student) return (<></>)
    if (!(typeof student === "object")) throw new Error('student must be an object');




    return (
        <div
            className={"G_Card " + component.Card}

            {...props}
        >

            <div className={"G_Card-body  " + component.CardBody}>

                <h5 className={"G_Card-title " + component.Name} title={student.Name}>
                    {student.Name}</h5>
                <h6 className={"G_Card-subtitle " + component.Batch} title={"From the Batch of " + student.Batch}>
                    Batch : <strong>{student.Batch}</strong></h6>
                <p className='G_Card-text d-flex align-items-center mb-0'>
                    <Link to={"/r/" + student.RollNo} className={component.G_CardLink} >
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-down-right"><polyline points="15 10 20 15 15 20" /><path d="M4 4v7a4 4 0 0 0 4 4h12" /></svg>
                        Check Result
                    </Link>

                </p>
            </div>
        </div>
    )
}