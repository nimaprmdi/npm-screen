import React, { useState, useEffect } from "react";
import BlogNotFound from "./BlogNotFound";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import LazyLoader from "../../components/LazyLoader";
import { filterBlogById } from "./blgs";
import { useParams, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const BlogView = ({ setPageLoading }) => {
    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 500);
    }, []);

    const [isImageLoaded, setImageIsLoaded] = useState(false);

    let { id } = useParams();

    if (!id) {
        return <BlogNotFound />;
    }

    let blgs = filterBlogById(id);

    if (!blgs) {
        return <BlogNotFound />;
    }

    const options = {
        pageDots: false,
    };

    return (
        <div className="c-projects__view w-full h-screen max-w-full overflow-x-hidden bg-gradient-to-b from-primary_heavy_dark to-primary_light relative">
            <div className="c-projects__close-btn absolute top-5 right-5 z-40 cursor-pointer">
                <Link to={"/blog"}>
                    <Icon icon="carbon:close-filled" className="text-red-600 w-16 h-16 hover:text-primary_white ease-linear	duration-100" />
                </Link>
            </div>

            <div className="c-projects__carousel w-full h-full flex items-center">
                <Flickity options={options} className="w-full">
                    {blgs.galleryImagesUrl.map((image, index) => {
                        return (
                            <div key={index} className="w-2/3 max-w-full h-190 max-h-screen py-4 mx-10">
                                <LazyLoader
                                    setImageIsLoaded={setImageIsLoaded}
                                    src={image}
                                    alt={`carousel-${index}`}
                                    className={`w-full h-full rounded-2.5 ${isImageLoaded ? "object-cover" : "object-contain"}`}
                                />
                            </div>
                        );
                    })}
                </Flickity>
            </div>

            <div className="c-projects__content w-full flex justify-center pb-36">
                <div className="c-projects__content__container w-2/3">
                    <h1 className=" u-white-color my-0">{blgs.name}</h1>

                    <p className="u-white-color h3 mt-8 max-w-230">{blgs.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogView;
