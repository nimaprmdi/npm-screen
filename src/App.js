import { useEffect, useState } from "react";
import Home from "./components/Home";
import IntroductionKit from "./components/IntroductionKit";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import ProjectsView from "./components/projects/ProjectsView";
import BlogGrid from "./components/blog/BlogGrid";
import BlogView from "./components/blog/BlogView";
import Performance from "./components/Performance";
import About from "./components/About";
import Preloader from "./components/Preloader";
import NotFound from "./components/NotFound";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import "./assets/sass/App.scss";

function App() {
    const [pageLoading, setPageLoading] = useState(true);
    const [jsonData, setJsonData] = useState();

    // const getData = () => {
    //     fetch("https://api.jsonbin.io/v3/b/628cf34105f31f68b3a53e80/latest", {
    //         headers: {
    //             "X-Master-Key": "$2b$10$bvY9QBKocZQZ7j.5X1n3ouJw8fqObdDTX9WQFWnXeKY/a7ykQzmwq",
    //         },
    //     })
    //         .then(function (response) {
    //             console.log(response);
    //             return response.json();
    //         })
    //         .then(function (myJson) {
    //             console.log(myJson.record);
    //             setJsonData(myJson.record);
    //         });
    // };

    // useEffect(() => {
    //     console.log("app.js");
    //     getData();
    // }, []);

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
                            <Route index element={<ProjectsGrid jsonData={jsonData} setPageLoading={setPageLoading} />} />
                            <Route path="projects/:id" element={<ProjectsView setPageLoading={setPageLoading} />} />
                        </Route>

                        <Route path="/404" element={<NotFound setPageLoading={setPageLoading} />} />
                        <Route path="*" element={<Navigate replace to="/404" />} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
}

export default App;
