import React, { useState } from "react";

const Projects = () => {
    const [cards, setCards] = useState({
        projects: [
            {
                title: "How to implement shaders in webGL.",
                tags: ["WebGl", "Three.js", "React", "3D"],
                imageUrl: "/assets/images/projects/project-(1).jpg",
                projectUrl: "#",
            },

            {
                title: "How to implement shaders in webGL.",
                tags: ["WebGl", "Three.js", "React", "3D"],
                imageUrl: "/assets/images/projects/project-(1).jpg",
                projectUrl: "#",
            },

            {
                title: "How to implement shaders in webGL.",
                tags: ["WebGl", "Three.js", "React", "3D"],
                imageUrl: "/assets/images/projects/project-(1).jpg",
                projectUrl: "#",
            },

            {
                title: "How to implement shaders in webGL.",
                tags: ["WebGl", "Three.js", "React", "3D"],
                imageUrl: "/assets/images/projects/project-(1).jpg",
                projectUrl: "#",
            },
        ],
    });
    return (
        <div className="c-archives w-full h-screen overflow-auto flex justify-between bg-primary_dark">
            <div className="c-archives__aside h-scree pt-16 pl-8">
                <h2 className="u-white-color m-0">Projects</h2>

                <p className="h5 mt-6 u-light-gray-color">Categories</p>
                <ul className="list-disc pl-5 pt-4">
                    <li className="w-max mb-2 list-disc items-center u-light-gray-color">
                        <a href="#" className="h5 u-light-gray-color">
                            WebGl
                        </a>
                    </li>

                    <li className="w-max mb-2 list-disc  items-center u-light-gray-color">
                        <a href="#" className="h5 u-light-gray-color">
                            Three.js
                        </a>
                    </li>

                    <li className="w-max mb-2 list-disc  items-center u-light-gray-color">
                        <a href="#" className="h5 u-light-gray-color">
                            React
                        </a>
                    </li>

                    <li className="w-max mb-2 list-disc  items-center u-light-gray-color">
                        <a href="#" className="h5 u-light-gray-color">
                            3D
                        </a>
                    </li>
                </ul>
            </div>

            <div className="c-archives-cards h-screen overflow-auto pt-16 pr-16 ">
                <div className="c-cards flex justify-between flex-wrap w-full gap-y-16">
                    {cards.projects.map((project, index) => {
                        return (
                            <div className="c-card" key={index}>
                                <div className="c-card__image w-full h-auto max-h-68.5">
                                    <a href={project.projectUrl}>
                                        <img
                                            alt="image-project"
                                            src={project.imageUrl}
                                            className="w-full h-full object-cover rounded-2.5"
                                        />
                                    </a>
                                </div>

                                <div className="c-card__title mt-3.5">
                                    <a href={project.projectUrl}>
                                        <h4 className="w-max u-white-color">{project.title}</h4>
                                    </a>
                                </div>

                                <div className="c-card__tags ">
                                    <ul className="flex">
                                        {project.tags.map((tag, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="c-card__tag w-max flex items-center"
                                                >
                                                    <a
                                                        href={"/tags-" + tag}
                                                        className="h5 u-light-gray-color"
                                                    >
                                                        {tag}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="c-pagination w-full mt-20 mb-16 flex justify-center">
                    <div className="c-pagination__item mx-2 w-10 h-10 bg-primary rounded-1.25 text-primary_white flex justify-center items-center">
                        1
                    </div>

                    <div className="c-pagination__item mx-2 w-10 h-10 bg-primary rounded-1.25 text-primary_white flex justify-center items-center">
                        2
                    </div>

                    <div className="c-pagination__item mx-2 w-10 h-10 bg-primary rounded-1.25 text-primary_white flex justify-center items-center">
                        3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
