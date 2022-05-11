import React from "react";
import { filterProjectByTag, PRJCTS } from "./prjcts";
import { Link, useSearchParams } from "react-router-dom";
import VisuallyHidden from "@reach/visually-hidden";
import ProjectsTagLink from "./ProjectsTagLink";

const ProjectsGrid = () => {
    let [searchParams] = useSearchParams();
    let tags = searchParams.get("projects");

    const projects = React.useMemo(() => {
        if (!tags) return PRJCTS;
        return filterProjectByTag(tags);
    }, [tags]);

    return (
        <div className="c-archives w-full h-screen overflow-auto flex justify-between bg-primary_dark">
            <div className="c-archives__aside h-scree pt-16 pl-8">
                <h2 className="u-white-color m-0">Projects</h2>
                <p className="h5 mt-6 u-light-gray-color">Categories</p>
                <ProjectsTagLink />
            </div>

            <div className="c-archives-cards h-screen overflow-auto pt-16 pr-16 ">
                <div className="c-cards flex justify-between flex-wrap w-full gap-y-16">
                    {projects.map((project) => {
                        let name = `${project.name}`;

                        return (
                            <div className="c-card" key={project.id}>
                                <Link to={`projects/${project.id}`}>
                                    <div className="c-card__image w-full h-auto max-h-68.5">
                                        <img
                                            src={project.featuredImageUrl}
                                            className="w-full h-full object-cover rounded-2.5"
                                            alt={project.name}
                                        />
                                    </div>

                                    <VisuallyHidden>{name}</VisuallyHidden>
                                </Link>

                                <Link to={`projects/${project.id}`}>
                                    <div className="c-card__title mt-3.5">
                                        <h4 className="w-max u-white-color">{project.name}</h4>
                                    </div>
                                </Link>

                                <div className="c-card__tags">
                                    <ul className="flex">
                                        {project.tags.map((tag, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="c-card__tag w-max flex items-center"
                                                >
                                                    <Link
                                                        className="h5 u-light-gray-color"
                                                        to={"/projects/?projects=" + tag}
                                                    >
                                                        {" "}
                                                        {tag}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectsGrid;
