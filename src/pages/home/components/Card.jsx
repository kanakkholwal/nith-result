import component from './_component.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import SharePage from "../../../components/SharePage";

export default function Card({ student, rank, style }) {
    if (!student) return (<></>)
    if (!(typeof student === "object")) throw new Error('student must be an object');



    return (
        <Link to={"/r/" + student.RollNo} className={"G_Card " + component.ResultCard + ((![1, 2, 3].includes(rank)) ? " Badge_positioned" : " ")} data-rank={rank} style={style}>

            <div className={"G_Card-body Badge_positioned " + component.CardBody}>
                <span className="Badge Badge_light TopRight" title={"Overall CGPI : " + student.semesters[student.semesters.length - 1].cgpi}>
                    {student.semesters[student.semesters.length - 1].cgpi}
                </span>
                <h5 className={"G_Card-title " + component.Name} title={student.Name}>
                    <span data-rank={rank} className={component.rank} title={"#" + rank + "_ in Batch of " + student.Batch}>
                        {"#" + rank + "_"}
                    </span> {student.Name}</h5>
                <div className={component.Info}>
                    <span className="Badge Badge_dark" title={"RollNo. : " + student.RollNo}>
                        {student.RollNo}
                    </span><br />
                    <span className="Badge " title={student.Branch + " Branch"}>
                        {student.Branch}
                    </span>
                </div>
                <div className={component.minorInfo}>

                    <span className="Badge Badge_info ms-auto me-2" title={student.semesters[student.semesters.length - 1].cgpi_total + " point gain from last Semester"}>
                        {student.semesters[student.semesters.length - 1].cgpi_total}
                    </span>
                    <SharePage shareData={{ url: "/r/" + student.RollNo, title: "RollNo. : " + student.RollNo, text: "Checkout result of " + student.Name }} />
                </div>
            </div>
        </Link>
    )
}