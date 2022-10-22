import component from './_component.module.scss';
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
                <h1 className={component.Title}>Backend of the Site </h1>
            </header>

        </>
    )
}