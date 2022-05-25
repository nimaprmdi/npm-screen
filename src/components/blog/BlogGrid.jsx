import React, { useEffect } from "react";
import { filterBlogByTag, BLGS } from "./blgs";
import { Link, useSearchParams } from "react-router-dom";
import VisuallyHidden from "@reach/visually-hidden";
import BlogTagLink from "./BlogTagLink";
import LazyLoader from "../../components/LazyLoader";

const BlogGrid = ({ setPageLoading }) => {
    let [searchParams] = useSearchParams();
    let tags = searchParams.get("category");

    const posts = React.useMemo(() => {
        if (!tags) return BLGS;
        return filterBlogByTag(tags);
    }, [tags]);

    useEffect(() => {
        setTimeout(() => {
            setPageLoading(false);
        }, 500);
    }, []);

    return (
        <div className="c-archives w-full h-screen overflow-auto flex justify-between bg-primary_dark">
            <div className="c-archives__aside h-scree pt-16 pl-8">
                <h2 className="u-white-color m-0">Blogs</h2>
                <p className="h5 mt-6 u-light-gray-color">Categories</p>

                <BlogTagLink />
            </div>

            <div className="c-archives-cards h-screen overflow-auto pt-16 pr-16 ">
                <div className="c-cards flex justify-between flex-wrap w-full gap-y-16">
                    {posts.map((post) => {
                        let name = `${post.name}`;

                        return (
                            <div className="c-card" key={post.id}>
                                <Link to={`post/${post.id}`}>
                                    <div className="c-card__image w-full h-auto max-h-68.5">
                                        <LazyLoader
                                            src={post.featuredImageUrl}
                                            alt={post.name}
                                            className="w-full h-full object-cover rounded-2.5 max-w-full object-center  hover:opacity-50 ease-linear duration-100"
                                        />
                                    </div>

                                    <VisuallyHidden>{name}</VisuallyHidden>
                                </Link>

                                <Link to={`post/${post.id}`}>
                                    <div className="c-card__title mt-3.5">
                                        <h4 className="w-max u-white-color hover:text-primary_blue ease-linear duration-100">{post.name}</h4>
                                    </div>
                                </Link>

                                <div className="c-card__tags">
                                    <ul className="flex">
                                        {post.tags.map((tag, index) => {
                                            return (
                                                <li key={index} className="c-card__tag w-max flex items-center">
                                                    <Link className="h5 u-light-gray-color hover:text-primary_white ease-linear duration-100" to={"/blog/?category=" + tag}>
                                                        {tag}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BlogGrid;
