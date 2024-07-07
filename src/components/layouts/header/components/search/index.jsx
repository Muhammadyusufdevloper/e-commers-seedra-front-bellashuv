import { memo, useEffect, useRef } from "react";
import PropTypes from "prop-types";
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
            className={`relative flex items-center border border-gray-300 rounded-full overflow-hidden transition-all duration-500 ${menu ? "fixed top-0 left-1/4 transform translate-y-20" : "max-w-xs"}`}
        >
            <button type="button" className="p-2">
                <CiSearch className="text-xl" />
            </button>
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                value={search}
                placeholder="Search"
                className="flex-grow px-4 py-2 text-sm text-gray-700 border-none outline-none"
            />
            {products && search ? (
                <div className="absolute top-full left-0 w-full bg-white shadow-md mt-2 rounded-md overflow-hidden z-50" ref={searchRef}>
                    {isError || !products?.data?.products?.length ? (
                        <p className="p-4 text-gray-700">No data</p>
                    ) : (
                        products?.data?.products?.map((product) => (
                            <Link
                                to={`single-rout/${product.id}`}
                                key={product.id}
                                className="flex items-center gap-2 p-4 hover:bg-gray-100"
                            >
                                <img
                                    src={product.urls[0]}
                                    width={50}
                                    height={50}
                                    alt={product.title}
                                    className="w-12 h-12 object-cover"
                                />
                                <p className="text-sm text-gray-700">{product.title}</p>
                            </Link>
                        ))
                    )}
                </div>
            ) : null}
        </form>
    );
};

HeaderSearch.propTypes = {
    menu: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired,
    products: PropTypes.shape({
        data: PropTypes.shape({
            products: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    title: PropTypes.string.isRequired,
                    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
                })
            ).isRequired,
        }).isRequired,
    }),
    setSearch: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
};

export default memo(HeaderSearch);
