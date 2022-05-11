import "./assets/sass/App.scss";
import Home from "./components/Home";
import IntroductionKit from "./components/IntroductionKit";
import Projects from "./components/Projects";
import Layout from "./components/filter/Layout";
import SneakGrid from "./components/filter/SneakGrid";
import SneakerView from "./components/filter/SneakerView";
import BrandLink from "./components/filter/BrandLink";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import ProjectsView from "./components/projects/ProjectsView";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="introduction" element={<IntroductionKit />} />
                    {/* <Route path="projects" element={<Projects />} /> */}
                    <Route path="filter" element={<BrandLink />} />

                    <Route path="/filter" element={<Layout />}>
                        <Route index element={<SneakGrid />} />
                        <Route path="sneakers/:id" element={<SneakerView />} />
                    </Route>

                    <Route path="/projects">
                        <Route index element={<ProjectsGrid />} />
                        <Route path="projects/:id" element={<ProjectsView />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
