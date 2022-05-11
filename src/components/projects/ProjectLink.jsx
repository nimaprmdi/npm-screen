import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const ProjectLink = ({ tag, children, ...props }) => {
    let [searchPrams] = useSearchParams();
    let isActive = searchPrams.get("projects") === tag;

    return (
        <>
            <Link
                {...props}
                to={`/projects/?projects=${tag}`}
                style={{ ...props.style }}
                className={`h5  ${isActive ? "u-white-color" : "u-light-gray-color"}`}
            >
                {children}
            </Link>
        </>
    );
};

export default ProjectLink;
