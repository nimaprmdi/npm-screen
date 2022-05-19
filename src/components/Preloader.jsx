import React from "react";
import spinner from "../assets/images/spinner.svg";

const Preloader = ({ pageLoading }) => {
    return (
        <div className={`w-full h-screen flex justify-center items-center bg-primary_light absolute top-0 left-0 z-50 ${pageLoading ? "block" : "hidden"}`}>
            <img src={spinner} className="w-32 h-32" />
        </div>
    );
};

export default Preloader;
