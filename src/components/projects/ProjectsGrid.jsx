import React, { useEffect } from "react";
import { filterProjectByTag, PRJCTS } from "./prjcts";
import { Link, useSearchParams } from "react-router-dom";
import VisuallyHidden from "@reach/visually-hidden";
import ProjectsTagLink from "./ProjectsTagLink";
import LazyLoader from "../../components/LazyLoader";

const ProjectsGrid = ({ setPageLoading }) => {
    let [searchParams] = useSearchParams();
    let tags = searchParams.get("projects");

    const projects = React.useMemo(() => {
        if (!tags) return PRJCTS;
        return filterProjectByTag(tags);
    }, [tags]);

    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 500);
    }, []);

    return (
        <div className="c-archives w-full flex justify-between bg-primary_dark">
            <div className="c-archives__aside h-screen pt-16 pl-8">
                <h2 className="u-white-color m-0">Projects</h2>
                <p className="h5 mt-6 u-light-gray-color">Categories</p>
                <ProjectsTagLink />
            </div>

            <div className="c-archives-cards py-16 pr-16 ">
                <div className="c-cards flex justify-between flex-wrap w-full gap-y-16">
                    {projects.map((project) => {
                        let name = `${project.name}`;

                        return (
                            <div className="c-card" key={project.id}>
                                <Link to={`projects/${project.id}`}>
                                    <div className="c-card__image w-full h-auto max-h-96">
                                        <LazyLoader
                                            src={project.featuredImageUrl}
                                            alt={project.name}
                                            className="c-card__img w-full h-full object-cover rounded-2.5 max-w-full object-center hover:opacity-50 ease-linear	duration-100"
                                        />
                                    </div>

                                    <VisuallyHidden>{name}</VisuallyHidden>
                                </Link>

                                <Link to={`projects/${project.id}`}>
                                    <div className="c-card__title mt-3.5">
                                        <h4 className="w-max u-white-color hover:text-primary_blue ease-linear duration-100">
                                            {project.name}
                                        </h4>
                                    </div>
                                </Link>

                                <div className="c-card__tags">
                                    <ul className="flex">
                                        {project.tags.map((tag, index) => {
                                            return (
                                                <li key={index} className="c-card__tag w-max flex items-center">
                                                    <Link
                                                        className="h5 u-light-gray-color hover:text-primary_white ease-linear duration-100"
                                                        to={"/projects/?projects=" + tag}
                                                    >
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
