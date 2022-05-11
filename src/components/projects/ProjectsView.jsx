import React from "react";
import ProjectsNotFound from "./ProjectsNotFound";
import { filterProjectById } from "./prjcts";
import { useParams } from "react-router-dom";

const ProjectsView = () => {
    let { id } = useParams();

    if (!id) {
        return <ProjectsNotFound />;
    }

    let prjct = filterProjectById(id);

    if (!prjct) {
        return <ProjectsNotFound />;
    }

    let name = `${prjct.name} ${prjct.tags}`;

    return (
        <div>
            <h2 className="u-white-color">{name}</h2>

            <br />

            <img
                src={prjct.featuredImageUrl}
                style={{
                    borderRadius: "8px",
                    maxWidth: "100%",
                    aspectRatio: "1 / 1",
                    width: "400px",
                    height: "400px",
                }}
                alt={name}
            />
        </div>
    );
};

export default ProjectsView;
