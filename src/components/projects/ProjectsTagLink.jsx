import React from "react";
import { Link, Outlet, useLocation, matchPath, useSearchParams } from "react-router-dom";

import { tags } from "./prjcts";
import ProjectLink from "./ProjectLink";

const ProjectsTagLink = () => {
    const { pathname } = useLocation();
    const isAdminPath = matchPath("/projects", pathname);
    let [searchPrams] = useSearchParams();

    return (
        <>
            <ul className="list-disc pl-5 pt-4">
                <li
                    className={`w-max mb-2 list-disc items-center ${
                        isAdminPath.pathname === "/projects/"
                            ? " u-light-gray-color"
                            : " u-white-color"
                    }`}
                >
                    <Link to={"/projects"}>All</Link>
                </li>

                {tags.map((tag, index) => {
                    let isActive = searchPrams.get("projects") === tag;

                    return (
                        <li
                            className={`w-max mb-2 list-disc items-center ${
                                isActive ? " u-white-color" : " u-light-gray-color"
                            }`}
                            key={index}
                        >
                            <ProjectLink tag={tag}>{tag}</ProjectLink>
                        </li>
                    );
                })}
            </ul>

            <Outlet />
        </>
    );
};

export default ProjectsTagLink;
