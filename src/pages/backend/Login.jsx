
import React, { useEffect, useState } from 'react';
import FirebaseApp from "../../firebase/FirebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import SnackBar from "../../components/SnackBar";
import AdminPanel from './AdminPanel';
import component from './components/_component.module.scss';
import {
    Link
} from "react-router-dom";
import {
    FormatString
} from "../../scripts/customFunctions";
export default function Login() {

    document.title = "Login  | NITH Results Backend";

    const auth = getAuth(FirebaseApp);

    const [Email, SetEmail] = useState("");
    const [Password, SetPassword] = useState("");
    const [user, setUser] = useState(null);

    // If User is Logged in
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
        else {
            setUser(null);
        }


    }, []);

    // SignInUser 
    function SignInUser(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                // store the user in localStorage
                user && (() => {
                    SnackBar("User Logged In", 1500, "OK");
                    setUser(user);
                    localStorage.setItem("user", JSON.stringify(user));
                })();
            })
            .catch((error) => {
                console.log(error);

                SnackBar(FormatString(error.code), 1500, "OK");

            });
    }
    function handleSubmit(e) {
        e.preventDefault();
        SignInUser(Email, Password);

    }
    // Sign Out User
    // function SignOutUser() {
    //     signOut(auth).then(() => {
    // Sign-out successful.
    //         SnackBar("Sign-out successfully", 1500, "OK");

    //     }).catch((error) => {
    // An error happened.
    //         SnackBar(error, 1500, "OK");

    //     });
    //     localStorage.clear();
    //     setUser(null);

    // };

    return (
        <>

            {user ?
                <AdminPanel CurrentUser={user} App={FirebaseApp} />
                :
                <>
                    <nav className={component.Navbar}>
                        <Link to="/" className={component.navBrand + " Badge_positioned"} >
                            NITH Results
                        </Link>
                    </nav>
                    <header className={component.Header}>
                        <h1 className={component.Title}> AdminPanel </h1>

                    </header>
                    <main className={component.FormContainer}>

                        <form onSubmit={(e) => handleSubmit(e)}>
                            <h1 className={component.FormTitle}> {"Login"}</h1>
                            <div className="G_Form-element Form_Floating ">
                                <input
                                    type="email"
                                    className="G_Form-input"
                                    id="email"
                                    name="email"
                                    value={Email} onChange={(e) => SetEmail(e.target.value)}
                                    placeholder="Enter email address"
                                />
                                <label htmlFor="email" className="G_Form-label">Email address</label>

                            </div>
                            <div className="G_Form-element Form_Floating">
                                <input
                                    type="password"
                                    className="G_Form-input"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete={"true"}
                                    value={Password} onChange={(e) => SetPassword(e.target.value)}
                                />
                                <label htmlFor="password" className="G_Form-label" >Password</label>
                            </div>
                            <button type="submit" className={component.FormSubmit}>
                                Login To AdminPanel
                            </button>


                        </form>

                    </main>
                </>}
        </>);

}

