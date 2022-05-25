import React, { useState, useEffect } from "react";
import ProjectsNotFound from "./ProjectsNotFound";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import LazyLoader from "../../components/LazyLoader";
import { filterProjectById, PRJCTS } from "./prjcts";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const ProjectsView = ({ setPageLoading }) => {
    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 500);
    }, []);

    const [isImageLoaded, setImageIsLoaded] = useState(false);

    let { id } = useParams();

    if (!id) {
        return <ProjectsNotFound />;
    }

    let prjct = filterProjectById(id);

    if (!prjct) {
        return <ProjectsNotFound />;
    }

    const options = {
        pageDots: false,
    };

    return (
        <div className="c-projects__view w-full max-w-full overflow-x-hidden bg-gradient-to-b from-primary_heavy_dark to-primary_light relative">
            <div className="c-projects__close-btn absolute top-5 right-5 z-40 cursor-pointer">
                <Link to={"/projects"}>
                    <Icon icon="carbon:close-filled" className="text-red-600 w-16 h-16 hover:text-primary_white ease-linear	duration-100" />
                </Link>
            </div>

            <div className="c-projects__carousel w-full h-screen flex items-center">
                <Flickity options={options} className="w-full">
                    {prjct.galleryImagesUrl.map((image, index) => {
                        return (
                            <div key={index} className="w-2/3 max-w-full h-190 max-h-screen py-4 mx-10">
                                <LazyLoader
                                    setImageIsLoaded={setImageIsLoaded}
                                    src={image}
                                    alt={`carousel-${index}`}
                                    className={`w-full h-full max-h-full rounded-2.5 ${isImageLoaded ? "object-cover" : "object-contain"}`}
                                />
                            </div>
                        );
                    })}
                </Flickity>
            </div>

            <div className="c-projects__content w-full flex justify-center pb-36">
                <div className="c-projects__content__container w-2/3">
                    <h1 className="text-huge u-white-color my-0">{prjct.name}</h1>

                    <p className="u-white-color h3 mt-8 max-w-230">{prjct.description}</p>

                    <div className="mt-10">
                        <a href={prjct.projectUrl} className="o-btn mt-10">
                            Visit Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsView;
