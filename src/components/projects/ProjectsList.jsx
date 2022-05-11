import React from "react";
import ProjectLink from "./ProjectLink";
import ProjectsTagLink from "./ProjectsTagLink";

const ProjectsList = () => {
    return (
        <div>
            <ProjectsTagLink />

            <ProjectLink />
        </div>
    );
};

export default ProjectsList;
