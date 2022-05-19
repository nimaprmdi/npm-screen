import { useEffect, useState } from "react";
import "./assets/sass/App.scss";
import Home from "./components/Home";
import IntroductionKit from "./components/IntroductionKit";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import ProjectsView from "./components/projects/ProjectsView";
import BlogGrid from "./components/blog/BlogGrid";
import BlogView from "./components/blog/BlogView";
import Performance from "./components/Performance";
import About from "./components/About";
import Preloader from "./components/Preloader";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
    const [pageLoading, setPageLoading] = useState(true);

    return (
        <>
            <Preloader pageLoading={pageLoading} />
            <HashRouter>
                <div className="root-app.js">
                    <Routes>
                        <Route path="/" element={<Home setPageLoading={setPageLoading} />} />
                        <Route path="introduction" element={<IntroductionKit setPageLoading={setPageLoading} />} />
                        <Route path="about" element={<About setPageLoading={setPageLoading} />} />
                        <Route path="performance" element={<Performance setPageLoading={setPageLoading} />} />

                        <Route path="blog">
                            setPageLoadingsetPageLoading
                            <Route index element={<BlogGrid setPageLoading={setPageLoading} />} />
                            <Route path="post/:id" element={<BlogView setPageLoading={setPageLoading} />} />
                        </Route>

                        <Route path="projects">
                            <Route index element={<ProjectsGrid setPageLoading={setPageLoading} />} />
                            <Route path="projects/:id" element={<ProjectsView setPageLoading={setPageLoading} />} />
                        </Route>
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
}

export default App;
