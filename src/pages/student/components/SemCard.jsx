import component from "./component.module.scss";
import { htmlDecode } from "../../../scripts/customFunctions";
export default function SemCard({ data, index = 1 }) {
    const semester = data;
    if (!(typeof semester === 'object')) throw new Error('Semester is not a valid object');



    return (
        <>
            <div className={"G_Card " + component.SemCard} style={{ "animationDelay": (0.25 * index).toString() + "s" }}
                data-index={semester.semester.toString().split("")[0] === "0" ? 'S' + semester.semester.toString().split("")[1] : semester.semester.toString()}
            >
                <div className={"G_Card-header " + component.SemCardHeader}>

                    <div className="ms-auto">
                        <span className={"Badge Badge_success " + component.points}>
                            {'+' + semester.sgpi_total}
                        </span>
                        <h3 className={"Badge Badge_info " + component.cgpi}>
                            {semester.sgpi}
                        </h3>
                    </div>
                </div>
                <div className="G_Card-body p-0 pt-3">
                    <ul className={component.subjectList}>
                        {
                            semester.subjects.map((subject, index) => {
                                return (
                                    <li className={component.Subject} key={index}>
                                        <h5>
                                            {htmlDecode(subject.name)}
                                        </h5>
                                        <span className="Badge Badge Badge_primary pilled">
                                            {subject.cgpi}
                                        </span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}