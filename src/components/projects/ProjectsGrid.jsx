import React from "react";
import { filterProjectByTag, PRJCTS } from "./prjcts";
import { Link, useSearchParams } from "react-router-dom";
import VisuallyHidden from "@reach/visually-hidden";

const ProjectsGrid = () => {
    let [searchParams] = useSearchParams();
    let tags = searchParams.get("projects");

    const projects = React.useMemo(() => {
        if (!tags) return PRJCTS;
        return filterProjectByTag(tags);
    }, [tags]);

    return (
        <main>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "12px 24px",
                }}
            >
                {projects.map((project) => {
                    let name = `${project.name}`;

                    return (
                        <div key={project.id}>
                            <Link to={`projects/${project.id}`}>
                                <img
                                    src={project.imageUrl}
                                    style={{
                                        borderRadius: "8px",
                                        width: "100%",
                                        height: "auto",
                                        aspectRatio: "1 / 1",
                                    }}
                                />

                                <VisuallyHidden>{name}</VisuallyHidden>
                            </Link>

                            <div>
                                <p className="u-white-color">{project.name}</p>
                                <p className="u-light-gray-color">{project.tags}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default ProjectsGrid;
