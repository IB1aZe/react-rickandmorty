import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Locations from "./pages/Locations";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/locations" element={<Locations />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
