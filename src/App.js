import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './Home.css';
import TutorPage from './TutorPage';
import HomePage from "./HomePage";


const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tutor" element={<TutorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
