import component from './_component.module.scss';
import {
    Link
} from "react-router-dom";
import { useState } from 'react';
import { getAuth, signOut } from "firebase/auth";
import SnackBar from "../../../components/SnackBar";

export default function Header({ app, user }) {
    const [info, setInfo] = useState(false)

    const auth = getAuth(app);

    function SignOutUser() {
        signOut(auth).then(() => {
            // Sign-out successful.
            SnackBar("Sign-out successfully", 1500, "OK");

        }).catch((error) => {
            // An error happened.
            SnackBar(error, 1500, "OK");

        });
        localStorage.removeItem("user");
        window.history.push("/admin")
    };
    return (
        <>
            <nav className={component.Navbar}>
                <Link to="/" className={component.navBrand + " Badge_positioned"} >
                    NITH Results
                </Link>
                <div className={component.userArea}>
                    <div className={component.userProfile + " Badge"} title={"user Profile"} onClick={() => setInfo(!info)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                    </div>
                    <div className={component.userProfileCard + (info ? (" " + component.isOpen) : "")}>
                        <ul>
                            <li>
                                {user.email}
                            </li>
                            <Link to={"/admin"} onClick={() => SignOutUser()}>
                                LogOut
                            </Link>
                        </ul>
                    </div>

                </div>
            </nav>
            <header className={component.Header}>
                <h1 className={component.Title}>Backend of the Site </h1>
            </header>

        </>
    )
}