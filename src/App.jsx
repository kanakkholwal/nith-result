import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Student from './pages/student/Student';
import FindMyRd from './pages/FindMyRd/FindMyRd';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/r/:rollNo" element={<Student />} />
          <Route exact path="/FindMyRd" element={<FindMyRd />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
