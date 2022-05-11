import React from "react";
import { Link, Outlet } from "react-router-dom";
import { tags } from "./prjcts";
import ProjectLink from "./ProjectLink";

const ProjectsTagLink = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/projects"}>All</Link>
                    </li>

                    {tags.map((tag, index) => {
                        return (
                            <li key={index}>
                                <ProjectLink tag={tag}>{tag}</ProjectLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
};

export default ProjectsTagLink;
