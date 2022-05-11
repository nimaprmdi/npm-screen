import React from "react";
import BrandLink from "./BrandLink";
import { Outlet, Link } from "react-router-dom";
import { brands } from "./snkrs";

const Layout = () => {
    return (
        <div>
            <nav>
                <h3>Filter by brand</h3>
                <ul>
                    <li>
                        <Link to="/filter">All</Link>
                    </li>
                    {brands.map((brand) => (
                        <li key={brand}>
                            <BrandLink brand={brand}>{brand}</BrandLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
};

export default Layout;
