import component from './component.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Card({ student, rank }) {
    if (!student) return (<></>)
    if (!(typeof student === "object")) throw new Error('student must be an object');



    return (
        <Link to={"/r/" + student.RollNo} className={"G_Card " + component.ResultCard + ((![1, 2, 3].includes(rank)) ? " Badge_positioned" : " ")} data-rank={rank}>

            <div className={"G_Card-body Badge_positioned " + component.CardBody}>
                <span className="Badge Badge_light TopRight">
                    {student.semesters[student.semesters.length - 1].cgpi}
                </span>

                <h5 className={"G_Card-title " + component.Name} title={student.Name}>
                    <span data-rank={rank} className={component.rank}>
                        {"#" + rank + "_"}
                    </span> {student.Name}</h5>
                <div className={component.Info}>
                    <span className="Badge Badge_dark" title={student.RollNo}>
                        {student.RollNo}
                    </span>
                    <span className="Badge " title={student.Branch}>
                        {student.Branch}
                    </span>
                </div>
                <div className={component.minorInfo}>

                    <span className="Badge Badge_info ms-auto me-2" title={student.semesters[student.semesters.length - 1].cgpi_total}>
                        {student.semesters[student.semesters.length - 1].cgpi_total}
                    </span>
                </div>
            </div>
        </Link>
    )
}