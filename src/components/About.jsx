import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import LazyLoader from "./LazyLoader";
import nima from "../assets/images/nima-pour-mohamadi.jpg";

const About = ({ setPageLoading }) => {
    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 500);
    }, []);

    const [context, setContext] = useState({
        title: "Hey there! I’m Nima.",
        description:
            "I’m Nima Pour Mohamadi and I’m a Front-End & WebGL developer. Educated in Information Technology (IT). Passionate to create create crative web based products in well favored styles.",
        socialTexts: "Let’s be social",

        socialsItems: [
            { name: "telegram", logo: "bxl:telegram", url: "#" },
            { name: "telegram", logo: "carbon:phone", url: "#" },
            { name: "telegram", logo: "bxl:codepen", url: "#" },
            { name: "telegram", logo: "ant-design:mail-outlined", url: "#" },
            { name: "telegram", logo: "ant-design:skype-filled", url: "#" },
        ],
    });

    return (
        <div className="c-about w-full h-screen bg-gradient-to-b from-primary_heavy_dark to-primary_light flex">
            <div className="c-about__context h-screen flex flex-wrap content-center">
                <div className="c-about__about">
                    <h1 className="c-about__title u-white-color">{context.title}</h1>
                    <p className="c-about__desc u-white-color h4 u-gray-color">{context.description}</p>
                </div>

                <div className="c-about__contact w-full mt-20">
                    <h2 className="u-white-color">{context.socialTexts}</h2>

                    <div className="c-about__socials flex justify-start mt-6">
                        {context.socialsItems.map((social, index) => {
                            return (
                                <a key={index} href={social.url}>
                                    <div className="c-about__social-item w-25 h-25 bg-primary mr-8 flex items-center justify-center rounded-2.5">
                                        <Icon className="w-14 h-14 u-white-color" icon={social.logo} />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="c-about__images w-full flex items-center justify-center">
                <div className="c-about__images__cover">
                    <div className="c-about__rectangle-gray"></div>
                    <div className="c-about__rectangle-blue"></div>
                    <div className="c-about__rectangle-aqua"></div>
                    <div className="c-about__npm-mask">
                        <LazyLoader src={nima} alt={"Nima Pourmohamadi"} className="w-full h-full object-cover rounded-2.5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
