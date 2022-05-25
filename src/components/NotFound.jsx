import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = ({ setPageLoading }) => {
    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 500);
    }, []);

    return (
        <div className="w-full h-screen bg-primary_light flex justify-center items-center flex-wrap">
            <div className="text-center ">
                <h1 className="u-white-color">404 Not Found !</h1>
                <br />
                <p className="text-huge u-white-color rotate-90">:|</p>

                <Link to={"/projects"} className="h4 p-8 u-white-color hover:text-primary_blue">
                    <span>Back To Projects</span>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
