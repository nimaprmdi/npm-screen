import "./assets/sass/App.scss";
import Home from "./components/Home";
import IntroductionKit from "./components/IntroductionKit";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import ProjectsView from "./components/projects/ProjectsView";
import BlogGrid from "./components/blog/BlogGrid";
import BlogView from "./components/blog/BlogView";
import Performance from "./components/Performance";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
    return (
        <HashRouter>
            <div className="root-app.js">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="introduction" element={<IntroductionKit />} />
                    <Route path="about" element={<About />} />
                    <Route path="performance" element={<Performance />} />

                    <Route path="blog">
                        <Route index element={<BlogGrid />} />
                        <Route path="post/:id" element={<BlogView />} />
                    </Route>

                    <Route path="projects">
                        <Route index element={<ProjectsGrid />} />
                        <Route path="projects/:id" element={<ProjectsView />} />
                    </Route>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
