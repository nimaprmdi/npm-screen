import React from "react";
import BlogLink from "./BlogLink";
import BlogTagLink from "./BlogTagLink";

const PostsList = () => {
    return (
        <div>
            <BlogTagLink />

            <BlogLink />
        </div>
    );
};

export default PostsList;
