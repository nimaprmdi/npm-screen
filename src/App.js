import "./assets/sass/App.scss";
import Home from "./components/Home";
import IntroductionKit from "./components/IntroductionKit";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import ProjectsView from "./components/projects/ProjectsView";
import BlogGrid from "./components/blog/BlogGrid";
import BlogView from "./components/blog/BlogView";
import Performance from "./components/Performance";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/npm-screen/" element={<Home />} />
                    <Route path="/npm-screen/introduction" element={<IntroductionKit />} />
                    <Route path="/npm-screen/about" element={<About />} />
                    <Route path="/npm-screen/performance" element={<Performance />} />

                    <Route path="/npm-screen/blog">
                        <Route index element={<BlogGrid />} />
                        <Route path="/npm-screen/post/:id" element={<BlogView />} />
                    </Route>

                    <Route path="/npm-screen/projects">
                        <Route index element={<ProjectsGrid />} />
                        <Route path="/npm-screen/projects/:id" element={<ProjectsView />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
