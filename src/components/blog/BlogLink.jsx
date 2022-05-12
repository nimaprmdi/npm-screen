import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const BlogLink = ({ tag, children, ...props }) => {
    let [searchPrams] = useSearchParams();
    let isActive = searchPrams.get("category") === tag;

    return (
        <>
            <Link
                {...props}
                to={`/blog/?category=${tag}`}
                style={{ ...props.style }}
                className={`h5  ${isActive ? "u-white-color" : "u-light-gray-color"}`}
            >
                {children}
            </Link>
        </>
    );
};

export default BlogLink;
