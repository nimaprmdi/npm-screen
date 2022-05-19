import React, { useState, useEffect } from "react";
import Flickity from "react-flickity-component";
import PerformanceItem from "./PerformanceItem";
import { Icon } from "@iconify/react";

const Performance = ({ setPageLoading }) => {
    const [performanceItems, setPerformanceItems] = useState([
        {
            icon: "akar-icons:html-fill",
            projects: [
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
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
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
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
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
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
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
                {
                    url: "#",
                    title: "Cavatina",
                    description: "A minimal WordPress theme.Good choice for publishing projects.",
                    gallery: [process.env.PUBLIC_URL + "/assets/images/projects/cavatina/cavatina-2.jpg"],
                },
            ],
        },
    ]);

    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 500);
    }, []);

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
            </div>
        </div>
    );
};

export default Performance;
