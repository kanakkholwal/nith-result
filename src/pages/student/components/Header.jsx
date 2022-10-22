import component from "./_component.module.scss";
import { Link } from 'react-router-dom';
export default function Header({ data, setGraph, isGraph }) {
    const student = data;

    return (
        <header className={component.Header}>
            <nav className={component.Navbar}>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1={19} y1={12} x2={5} y2={12} /><polyline points="12 19 5 12 12 5" /></svg>
                </Link>


            </nav>
            <div className={component.HeroSection}>
                <h1 className={component.StudentName}>
                    {student.Name}
                </h1>
                <h2 className={component.brief}>
                    <span className="Badge Badge_dark">
                        {student.RollNo}
                    </span>
                    <span className="Badge  ms-2">
                        {student.Branch}
                    </span>
                </h2>
                <div>

                    <span className={"Badge  Badge_success me-3 " + component.points}>
                        {'+ ' + (student.semesters[student.semesters.length - 1].cgpi_total - (student.semesters[student.semesters.length - 2].cgpi_total || 0))}
                    </span>
                    <h3 className={"Badge  Badge_light pilled  animate_ripple  " + component.cgpi}>
                        {student.semesters[student.semesters.length - 1].cgpi}
                    </h3>
                </div>

            </div>
        </header>
    )
}