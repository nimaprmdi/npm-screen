import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";

const BrandLink = ({ brand, children, ...props }) => {
    let [searchParams] = useSearchParams();
    let isActive = searchParams.get("brand") === brand;

    return (
        <Link
            to={`/filter/?brand=${brand}`}
            {...props}
            style={{
                ...props.style,
                color: isActive ? "red" : "black",
            }}
        >
            {children}
        </Link>
    );
};

export default BrandLink;
