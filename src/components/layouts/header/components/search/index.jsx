import React, { memo, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const HeaderSearch = ({ menu, search, products, setSearch, isError }) => {
    const searchRef = useRef(null);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearch("");
        }
    };

    useEffect(() => {
        if (search) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [search]);
    return (
        <form
            className={`header__search-initial-state ${menu ? "header__search-initial-state-show" : ""
                }`}
        >
            <button type="button">
                <div>
                    <CiSearch />
                </div>
            </button>
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
            />
            {products && search ? (
                <div className="header__search__result" ref={searchRef}>
                    {isError || !products?.data?.products?.length ? (
                        <p>no data</p>
                    ) : (
                        products?.data?.products?.map((product) => (
                            <Link
                                to={`single-rout/${product.id}`}
                                key={product.id}
                            >
                                <img
                                    src={product.urls[0]}
                                    width={50}
                                    height={50}
                                    alt=""
                                />
                                <p>{product.title}</p>
                            </Link>
                        ))
                    )}
                </div>
            ) : null}
        </form>
    );
};

export default memo(HeaderSearch)
