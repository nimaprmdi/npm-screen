import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <p className="">Welcome to</p>
            <h1>Introduction Kit</h1>
            <p>Here you can see my performance with higher resolution</p>

            <Link to="/how-to-use">Continue</Link>
        </>
    );
};

export default Home;
