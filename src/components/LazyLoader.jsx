import React, { useEffect, useState } from "react";
import LazyLoad from "vanilla-lazyload";
import lazyloadConfig from "../config/lazyload";
import spinner from "../assets/images/spinner.svg";

const LazyLoader = ({ alt, src, className, setImageIsLoaded = () => {} }) => {
    if (!document.lazyLoadInstance) {
        document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
    }

    useEffect(() => {
        document.lazyLoadInstance.update();
    }, []);

    const handleLoad = (event) => {
        setImageIsLoaded !== null && event.target.getAttribute("data-ll-status") !== "loading" ? setImageIsLoaded(false) : setImageIsLoaded(true);
    };

    return <img onLoad={(event) => handleLoad(event)} alt={alt} data-src={src} src={spinner} className={`lazy ${className}`} />;
};

export default LazyLoader;
