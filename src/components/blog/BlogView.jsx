import React, { useState, useEffect } from "react";
import BlogNotFound from "./BlogNotFound";
import Flickity from "react-flickity-component";
import { filterBlogById } from "./blgs";
import { useParams } from "react-router-dom";
import "flickity/css/flickity.css";
import LazyLoader from "../../components/LazyLoader";

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

    return (
        <div className="c-projects__view w-full h-screen max-w-full overflow-x-hidden bg-gradient-to-b from-primary_heavy_dark to-primary_light">
            <div className="c-projects__carousel w-full h-full flex items-center">
                <Flickity className="w-full">
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
        </div>
    );
};

export default BlogView;
