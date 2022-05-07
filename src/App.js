import "./assets/sass/App.scss";
import Home from "./components/Home";
import IntroductionKit from "./components/IntroductionKit";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container mt-2" style={{ marginTop: 40 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="introduction" element={<IntroductionKit />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
