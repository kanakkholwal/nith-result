import Header from './components/Header';
import component from './components/_component.module.scss';


export default function Panel({ CurrentUser, App }) {
    document.title = "Admin Panel  | NITH Results";

    console.log(CurrentUser.uid);
    console.log(App);
    return (
        <>
            <Header />
            <main className={component.Main}>
                admin is here

            </main>

        </>
    )
}