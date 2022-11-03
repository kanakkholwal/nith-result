import Header from './components/Header';
import GetRD from './components/GetRD.tsx';
export default function FindMyRd() {
    document.title = "Find Your R.D. & R.B. || NITH Results";

    return (
        <>
            <Header />
            <GetRD />
        </>
    )
}