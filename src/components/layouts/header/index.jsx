// import { Link, NavLink } from "react-router-dom";
// import siteLogo from "../../../assets/images/components/header/logo.svg";
// import { RiInstagramFill } from "react-icons/ri";
// import { CiSearch } from "react-icons/ci";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { GoHeart } from "react-icons/go";
// import "./Header.scss";
// import { BsFacebook } from "react-icons/bs";
// import { CgMenuRight } from "react-icons/cg";
// import { useEffect, useRef, useState } from "react";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { useGetProductsQuery } from "../../../context/api/productApi";
// import { useSelector } from "react-redux";
// const Header = () => {
//   const [menu, setMenu] = useState(false);
//   const [search, setSearch] = useState();
//   const { data: products, isError } = useGetProductsQuery({ search: search });
//   const searchRef = useRef(null);
//   let wishlistData = useSelector((state) => state.wishlistSlice.data);
//   let cartData = useSelector((state) => state.cart.value);
//   const handleClickOutside = (event) => {
//     if (searchRef.current && !searchRef.current.contains(event.target)) {
//       setSearch("");
//     }
//   };

//   useEffect(() => {
//     if (search) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [search]);
//   let isLogin = localStorage.getItem("x-auth-token")
//   return (
//     <>
//       <header className="header">
//         <nav className="container header__navbar">
//           <Link to={"/"} className="header__logo">
//             <img src={siteLogo} alt="site logo" />
//           </Link>
//           {menu ? (
//             <div
//               onClick={() => setMenu(false)}
//               className="header__overlay"
//             ></div>
//           ) : (
//             <></>
//           )}
//           <ul
//             className={`header__list ${menu ? "header__list-show" : ""
//               }`}
//           >
//             <li className="header__item">
//               <button
//                 onClick={() => setMenu(false)}
//                 className="header__menu-btn"
//               >
//                 <IoMdCloseCircleOutline />
//               </button>
//             </li>
//             <li className="header__item">
//               <NavLink className={"header__link"}>ALL PRODUCTS</NavLink>
//             </li>
//             <li className="header__item">
//               <NavLink to={"/about-seedra"} className={"header__link"}>ABOUT SEEDRA</NavLink>
//             </li>
//             <li className="header__item">
//               <NavLink to={"our-blog"} className={"header__link"}>OUR BLOG</NavLink>
//             </li>
//             <li className="header__item">
//               <NavLink to={"contact"} className={"header__link"}>
//                 CONTACTS
//               </NavLink>
//             </li>
//             <li className="header__item">
//               <NavLink to={isLogin ? "/admin/manage-product" : "/login"} className={"header__link"}>{isLogin ? "ADMIN" : "LOGIN"}</NavLink>
//             </li>
//           </ul>
//           <div className="header__right">
//             <div className="header__networking">
//               <a href="https://www.instagram.com/muhammadyusufdevloper/">
//                 <RiInstagramFill />
//               </a>
//               <a href="https://www.instagram.com/muhammadyusufdevloper/">
//                 <BsFacebook />
//               </a>
//               <p></p>
//             </div>
//             <form
//               className={`header__search-initial-state ${menu ? "header__search-initial-state-show" : ""
//                 }`}
//             >
//               <button type="button">
//                 <div>
//                   <CiSearch />
//                 </div>
//               </button>
//               <input
//                 onChange={(e) => setSearch(e.target.value)}
//                 type="search"
//                 placeholder="Search"
//               />
//               {products && search ? (
//                 <div
//                   className="header__search__result"
//                   ref={searchRef}
//                 >
//                   {isError ||
//                     !products?.data?.products?.length ? (
//                     <p>no data</p>
//                   ) : (
//                     products?.data?.products?.map(
//                       (product) => (
//                         <Link
//                           to={`single-rout/${product.id}`}
//                           key={product.id}
//                         >
//                           <img
//                             src={product.urls[0]}
//                             width={50}
//                             height={50}
//                             alt=""
//                           />
//                           <p>{product.title}</p>
//                         </Link>
//                       )
//                     )
//                   )}
//                 </div>
//               ) : null}
//             </form>
//             <div className="header__cart-wishlist-wrapper">
//               <Link to={"/wishlist"} className="header__wishlist-link">
//                 <GoHeart />
//                 {wishlistData.length ? <sup>{wishlistData.length}</sup> : <></>}
//               </Link>
//               <Link to={"/cart"} className="header__cart-link">
//                 <MdOutlineShoppingCart />
//                 {cartData.length ? <sup>{cartData.length}</sup> : <></>}
//               </Link>
//             </div>
//             <button
//               onClick={() => setMenu(true)}
//               className="header__menu-btn"
//             >
//               {<CgMenuRight />}
//             </button>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Header;
import { Link, NavLink } from "react-router-dom";
import siteLogo from "../../../assets/images/components/header/logo.svg";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoHeart } from "react-icons/go";
import "./Header.scss";
import { BsFacebook } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import { memo, useEffect, useRef, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useGetProductsQuery } from "../../../context/api/productApi";
import HeaderSearch from "./components/search";
import { useSelector } from "react-redux";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState();
  const { data: products, isError } = useGetProductsQuery({ search: search });
  let wishlistData = useSelector((state) => state.wishlistSlice.data);
  let cartData = useSelector((state) => state.cart.value);
  let isLogin = localStorage.getItem("x-auth-token")
  return (
    <>
      <header className="header">
        <nav className="container header__navbar">
          <Link to={"/"} className="header__logo">
            <img src={siteLogo} alt="site logo" />
          </Link>
          {menu ? (
            <div
              onClick={() => setMenu(false)}
              className="header__overlay"
            ></div>
          ) : (
            <></>
          )}
          <ul
            className={`header__list ${menu ? "header__list-show" : ""
              }`}
          >
            <li className="header__item">
              <button
                onClick={() => setMenu(false)}
                className="header__menu-btn"
              >
                <IoMdCloseCircleOutline />
              </button>
            </li>
            <div className="header__search__two">
              <HeaderSearch
                menu={menu}
                search={search}
                setSearch={setSearch}
                products={products}
                isError={isError}
              />
            </div>
            <li className="header__item">
              <NavLink to={'/all-product'} className={"header__link"}>ALL PRODUCTS</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"/about-seedra"} className={"header__link"}>ABOUT SEEDRA</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"our-blog"} className={"header__link"}>OUR BLOG</NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"contact"} className={"header__link"}>
                CONTACTS
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to={isLogin ? "/admin/admin-home" : "/login"} className={"header__link"}>{isLogin ? "ADMIN" : "LOGIN"}</NavLink>
            </li>
          </ul>
          <div className="header__right">
            <div className="header__networking">
              <a href="https://www.instagram.com/muhammadyusufdevloper/">
                <RiInstagramFill />
              </a>
              <a href="https://www.instagram.com/muhammadyusufdevloper/">
                <BsFacebook />
              </a>
              <p></p>
            </div>
            <div className="header__search__one">
              <HeaderSearch
                menu={menu}
                search={search}
                setSearch={setSearch}
                products={products}
                isError={isError}
              />
            </div>
            <div className="header__cart-wishlist-wrapper">
              <Link to={"/wishlist"} className="header__wishlist-link">
                <GoHeart />
                {wishlistData.length ? <sup>{wishlistData.length}</sup> : <></>}
              </Link>
              <Link to={"/cart"} className="header__cart-link">
                <MdOutlineShoppingCart />
                {cartData.length ? <sup>{cartData.length}</sup> : <></>}
              </Link>
            </div>
            <button
              onClick={() => setMenu(true)}
              className="header__menu-btn"
            >
              {<CgMenuRight />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default memo(Header);
