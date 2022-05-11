import React from "react";
import ProjectsNotFound from "./ProjectsNotFound";
import Flickity from "react-flickity-component";
import { filterProjectById, PRJCTS } from "./prjcts";
import { useParams } from "react-router-dom";
import "flickity/css/flickity.css";

const ProjectsView = () => {
    const projects = PRJCTS;

    let { id } = useParams();

    if (!id) {
        return <ProjectsNotFound />;
    }

    let prjct = filterProjectById(id);

    if (!prjct) {
        return <ProjectsNotFound />;
    }

    const flickityOptions = {
        ini: 2,
    };

    return (
        <div className="c-projects__view w-full h-screen max-w-full overflow-x-hidden bg-gradient-to-b from-primary_heavy_dark to-primary_light">
            <div className="c-projects__carousel w-full h-full flex items-center">
                <Flickity options={flickityOptions} className="w-full">
                    {projects.map((project) => {
                        <div className="w-2/3 max-w-full h-190 max-h-screen py-4 mx-10">
                            <img
                                className="w-full h-full rounded-2.5 object-cover"
                                src={project.galleryImagesUrl}
                            />
                        </div>;
                    })}
                </Flickity>
            </div>
        </div>
    );
};

export default ProjectsView;
