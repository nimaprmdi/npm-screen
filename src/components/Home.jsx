import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="c-home u-container">
            <p className="c-home__title h1 u-white-color u-width-full">Welcome to</p>
            <h1 className="c-home__title text-massive u-white-color u-width-full">
                Introduction Kit
            </h1>
            <h3 className="c-home__title u-white-color u-width-full">
                Here you can see my performance with higher resolution
            </h3>

            <div className="w-full mt-4">
                <Link to="/introduction">Continue</Link>
            </div>
        </div>
    );
};

export default Home;
