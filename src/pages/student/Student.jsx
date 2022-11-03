import { useParams } from "react-router-dom";
import { Students } from "../../api/Students";
import Header from './components/Header';
import SemCard from './components/SemCard';
import component from "./components/_component.module.scss";
import SharePage from "../../components/SharePage";
import ChartResult from './components/Chart.tsx';
import { useState } from "react";

export default function Student() {
    const { rollNo } = useParams();
    document.title = rollNo.toUpperCase() + "  | NITH Results";

    const student = Students().find((student) => student.RollNo === rollNo);
    const [graph, setGraph] = useState(false);




    const mail = {
        email: student.RollNo + '@nith.ac.in',
        subject: "Contacting Through " + window.location.host,
        body: `Good Evening Sir/Ma'am ,\n  I'm ___Your_Name___ . I want to contact to you regrading ___`,
    }

    return (
        <>
            <Header data={student} />
            <div className={component.Switch}>
                <span className="Badge" onClick={() => setGraph(!graph)}>
                    {
                        graph ? <>
                            {"Tabs View "}  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-table"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" /></svg>
                        </> :
                            <>
                                {"Graph View "}     <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1={18} y1={20} x2={18} y2={10} /><line x1={12} y1={20} x2={12} y2={4} /><line x1={6} y1={20} x2={6} y2={14} /></svg>

                            </>
                    }



                </span>
                <a className="Badge Badge_dark  ms-2"
                    href={`mailto:${mail.email}?subject=${mail.subject}&body=${mail.body}`}



                    title={"Mail your R.D. : " + student.Name}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </a>
                <SharePage />
            </div>
            <div className={component.Semesters}>

                {
                    graph ? <ChartResult data={student} />
                        :
                        student.semesters.map((semester, index) => {
                            return <SemCard data={semester} key={index} prevSem={student.semesters[index - 1]} />
                        })

                }


            </div>

        </>)
}