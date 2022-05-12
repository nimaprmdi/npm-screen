import React from "react";
import { Link, Outlet, useLocation, matchPath, useSearchParams } from "react-router-dom";

import { tags } from "./blgs";
import BlogLink from "./BlogLink";

const BlogTagLink = () => {
    const { pathname } = useLocation();
    const isAdminPath = matchPath("/blog", pathname);
    let [searchPrams] = useSearchParams();

    return (
        <>
            <ul className="list-disc pl-5 pt-4">
                <li
                    className={`w-max mb-2 list-disc items-center ${
                        isAdminPath.pathname === "/blog/" ? " u-light-gray-color" : " u-white-color"
                    }`}
                >
                    <Link to={"/blog"}>All</Link>
                </li>

                {tags.map((tag, index) => {
                    let isActive = searchPrams.get("category") === tag;

                    return (
                        <li
                            className={`w-max mb-2 list-disc items-center ${
                                isActive ? " u-white-color" : " u-light-gray-color"
                            }`}
                            key={index}
                        >
                            <BlogLink tag={tag}>{tag}</BlogLink>
                        </li>
                    );
                })}
            </ul>

            <Outlet />
        </>
    );
};

export default BlogTagLink;
