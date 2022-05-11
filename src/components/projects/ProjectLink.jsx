import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProjectsTagLink from "./ProjectsTagLink";
const ProjectLink = ({ tag, children, ...props }) => {
    let [searchPrams] = useSearchParams();
    let isActive = searchPrams.get("projects") === tag;

    return (
        <>
            <Link
                {...props}
                to={`/projects/?projects=${tag}`}
                style={{ ...props.style, color: isActive ? "red" : "blue" }}
            >
                {children}
            </Link>
        </>
    );
};

export default ProjectLink;
