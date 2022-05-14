import React from "react";
import Flickity from "react-flickity-component";
import { Icon } from "@iconify/react";
import "flickity/css/flickity.css";

const PerformanceItem = ({ data, index }) => {
    console.log(index);
    const flickityOptions = {
        pageDots: false,
        wrapAround: true,
        // prevNextButtons: false,
    };

    return (
        <>
            {/* The Card Right */}
            <div className="c-performance__card flex flex-wrap py-52">
                <div className={`${index % 2 === 0 ? "c-performance__right" : "c-performance__left"} mb-10 w-full flex`}>
                    <div className={`c-performance__col c-performance__col--logo w-full flex items-center ${index % 2 === 0 ? "order-1 justify-end" : "order-2 justify-start"}`}>
                        <Icon icon={data.icon} className={`w-36 h-36 u-white-color  ${index % 2 === 0 ? "mr-20" : "ml-20"}`} />
                    </div>

                    <div className={`c-performance__col c-performance__col--content flex relative ${index % 2 === 0 ? "order-2 justify-end" : "order-1 justify-start"}`}>
                        <div className="c-performance__item py-8">
                            <div className="c-performance__carousel">
                                <Flickity options={flickityOptions} className="w-full">
                                    {data.projects.map((project, index) => {
                                        return (
                                            <a key={index} href={project.url}>
                                                <div className="w-190 max-w-full mx-10">
                                                    {project.gallery.map((image, index) => {
                                                        return <img key={index} className="w-full h-full rounded-2.5 object-cover" src={image} />;
                                                    })}

                                                    <div className="c-performance__context mt-9">
                                                        <h3 className="u-white-color">{project.title}</h3>

                                                        <p className="u-white-color">{project.description}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        );
                                    })}
                                </Flickity>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PerformanceItem;
