import component from './component.module.scss';
import {
    Link
} from "react-router-dom";

export default function Header() {





    return (
        <>
            <nav className={component.Navbar}>
                <Link to="/" className={component.navBrand + " Badge_positioned"} >
                    NITH Results
                </Link>
            </nav>
            <header className={component.Header}>
                <h1 className={component.Title}> Search By Name or Roll No. </h1>

            </header>

        </>
    )
}