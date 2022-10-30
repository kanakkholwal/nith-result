import Header from './components/Header';
import component from './components/_component.module.scss';


export default function Panel({ CurrentUser, App }) {
    document.title = "Admin Panel  | NITH Results";

    console.log(CurrentUser.uid);
    console.log(App);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "Batch": 2021,
        "Branch": "ECE_Dual",
        "BranchCode": "dec",
        "MissingRollNo": [
            27
        ],
        "LastRollNo": 28
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };

    fetch("https://nith-results-api.herokuapp.com/students/get-list/branch-wise", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));



    return (
        <>
            <Header app={App} user={CurrentUser} />
            <main className={component.Main}>
                admin is here

            </main>

        </>
    )
}