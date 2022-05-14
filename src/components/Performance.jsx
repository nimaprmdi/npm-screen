import React, { useState } from "react";
import Flickity from "react-flickity-component";
import PerformanceItem from "./PerformanceItem";
import { Icon } from "@iconify/react";

const Performance = () => {
    const [performanceItems, setPerformanceItems] = useState([
        {
            icon: "akar-icons:html-fill",
            projects: [
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
            ],
        },
        {
            icon: "akar-icons:html-fill",
            projects: [
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
            ],
        },
        {
            icon: "akar-icons:html-fill",
            projects: [
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
            ],
        },
        {
            icon: "akar-icons:html-fill",
            projects: [
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: ["/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
            ],
        },
    ]);

    return (
        <div className="c-performance w-full h-max">
            <div className="c-performance__hero w-full h-screen flex relative justify-center items-center bg-gradient-to-b from-primary_heavy_dark to-primary_light">
                <div className="c-performance__hero__context text-center">
                    <h2 className="h1 u-white-color">Welcome to</h2>
                    <h1 className="u-white-color">Nima’s Performance Lab</h1>
                </div>

                <div className="c-performance__scroll-down absolute bottom-0">
                    <div className="c-performance__scroll-down__arrows">
                        <div className="mb-3">
                            <span className="c-performance__scroll-down__title text-tiny u-white-color">Scroll Down</span>
                        </div>

                        <div className="c-performance__arros__continer">
                            <div className="c-performance__arrows">
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="c-performance__cards w-full relative">
                <div className="c-performance__lines">
                    <span className="c-performance__line"></span>
                    <span className="c-performance__line c-performance__line--2"></span>

                    <span className="c-performance__circle"></span>
                    <span className="c-performance__circle c-performance__circle--2"></span>
                </div>

                {performanceItems.map((performanceItem, index) => {
                    return <PerformanceItem key={index} index={index} data={performanceItem} />;
                })}
                {/* The Card Left */}
                {/* <div className="c-performance__card flex flex-wrap py-52">
                    <div className="c-performance__left mb-10 w-full flex">
                        <div className="c-performance__col c-performance__col--content flex justify-start relative">
                            <div className="c-performance__item py-8">
                                <div className="c-performance__carousel">
                                    <Flickity options={flickityOptions} className="w-full">
                                        <a href="#">
                                            <div className="w-190 max-w-full mx-10">
                                                <img
                                                    className="w-full h-full rounded-2.5 object-cover"
                                                    src="/assets/images/projects/cavatina/cavatina-2.jpg"
                                                />

                                                <div className="c-performance__context mt-9">
                                                    <h3 className="u-white-color">Cavatina</h3>

                                                    <p className="u-white-color">
                                                        A minimal WordPress theme.Good choice for
                                                        publishing projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>

                                        <a href="#">
                                            <div className="w-190 max-w-full mx-10">
                                                <img
                                                    className="w-full h-full rounded-2.5 object-cover"
                                                    src="/assets/images/projects/cavatina/cavatina-2.jpg"
                                                />

                                                <div className="c-performance__context mt-9">
                                                    <h3 className="u-white-color">Cavatina</h3>

                                                    <p className="u-white-color">
                                                        A minimal WordPress theme.Good choice for
                                                        publishing projects.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </Flickity>
                                </div>
                            </div>
                        </div>

                        <div className="c-performance__col c-performance__col--logo w-full flex items-center justify-start">
                            <Icon
                                icon="akar-icons:html-fill"
                                className="w-36 h-36 u-white-color ml-20"
                            />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Performance;
