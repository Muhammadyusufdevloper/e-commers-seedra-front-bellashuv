// import "./OurProducts.scss";

// // import { FaHeart, FaRegHeart } from "react-icons/fa";
// // import { useDispatch, useSelector } from "react-redux";

// import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { FiShoppingCart } from "react-icons/fi";
// import { PRODUCT } from "../../../../static";
// import { addWishlist } from "../../../../context/api/slice/wishlistSlice";
// // import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
// // import { NavLink } from "react-router-dom";
// import { add } from "../../../../context/slice/cartSlice";

// // const OurProducts = () => {
// //   const dispatch = useDispatch();
// //   let wishlistData = useSelector((state) => state.wishlistSlice.data);
// //   const star = [
// //     <FaStar key={"1"} />,
// //     <FaStar key={"2"} />,
// //     <FaStar key={"3"} />,
// //     <FaStar key={"4"} />,
// //     <FaStarHalfAlt key={"5"} />,
// //   ];

// //   let productsData = PRODUCT?.map((product, index) => (
// //     <div key={index} className="products__card">
// //       <button
// //         onClick={() => dispatch(addWishlist(product))}
// //         className="products__card__img-like"
// //       >
// //         {wishlistData.some((el) => el.id === product.id) ? (
// //           <FaHeart color="crimson" />
// //         ) : (
// //           <FaRegHeart />
// //         )}
// //       </button>
// //       <div className="products__card__img">
// //         <NavLink to={`single-rout/${product.id}`}>
// //           <img src={product?.urls} alt="" />
// //         </NavLink>
// //       </div>
// //       <div className="products__card__info">
// //         <div className="products__card__stars">
// //           {star.map((el, index) => (
// //             <div key={index} className="products__card__stars-icon">
// //               {el}
// //             </div>
// //           ))}
// //           <p>(123)</p>
// //         </div>
// //         <p className="products__card__text">{product.description}</p>
// //         <div className="products__card__info__bottom">
// //           <h3 className="products__card__title-price">${product.price}</h3>
// //           <button
// //             onClick={() => {
// //               console.log("Adding to cart:", product);
// //               dispatch(add(product));
// //             }}
// //             className="products__card__title-icon"
// //           >
// //             <FiShoppingCart />
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   ));

// //   let categoryData = PRODUCT?.map((el) => (
// //     <li key={el.id} className="products__category__item">
// //       {el.category}
// //     </li>
// //   ));
// //   const { data } = useGetCategoryQuery();
// //   console.log(data);
// //   return (
// //     <div className="products container">
// //       <div className="products__top__info">
// //         <h2>Our products.</h2>
// //         <button>View all (12)</button>
// //       </div>
// //       <ul className="products__category">
// //         <li className="products__category__item">All</li>
// //         <li className="products__category__item">Furucties</li>
// //         {categoryData}
// //       </ul>
// //       <div className="products__cards">{productsData}</div>
// //     </div>
// //   );
// // };
// import defaultImg from "../../../../assets/images/default.png";

// import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
// import { useGetProductsQuery } from "../../../../context/api/productApi";
// import "./OurProducts.scss";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const OurProducts = () => {
//   const { data: products } = useGetProductsQuery({ limit: 6 });
//   const wishlistData = useSelector((state) => state.wishlistSlice.value);

//   const dispatch = useDispatch();

//   const star = [
//     <FaStar key={"1"} />,
//     <FaStar key={"2"} />,
//     <FaStar key={"3"} />,
//     <FaStar key={"4"} />,
//     <FaStarHalfAlt key={"5"} />,
//   ];

//   let productsData = products?.data?.products?.map((product, index) => (
//     <div key={index} className="products__card">
//       <button
//         onClick={() => dispatch(addWishlist(product))}
//         className="products__card__img-like"
//       >
//         {wishlistData.some((el) => el.id === product.id) ? (
//           <FaHeart color="crimson" />
//         ) : (
//           <FaRegHeart />
//         )}
//       </button>
//       <div className="products__card__img">
//         <Link to={`single-rout/${product.id}`}>
//           <img
//             src={product.urls[0] ? product.urls[0] : defaultImg}
//             alt=""
//           />
//         </Link>
//       </div>
//       <div className="products__card__info">
//         <div className="products__card__stars">
//           {star.map((el, index) => (
//             <div key={index} className="products__card__stars-icon">
//               {el}
//             </div>
//           ))}
//           <p>(123)</p>
//         </div>
//         <p className="products__card__text">{product.description}</p>
//         <div className="products__card__info__bottom">
//           <h3 className="products__card__title-price">
//             ${product.price}
//           </h3>
//           <button
//             onClick={() => {
//               console.log("Adding to cart:", product);
//               dispatch(add(product));
//             }}
//             className="products__card__title-icon"
//           >
//             <FiShoppingCart />
//           </button>
//         </div>
//       </div>
//     </div >
//   ));

//   let categoryData = PRODUCT?.map((el) => (
//     <li key={el.id} className="products__category__item">
//       {el.category}
//     </li>
//   ));
//   return (
//     <div className="products container">
//       <div className="products__top__info">
//         <h2>Our products.</h2>
//         <button>View all (12)</button>
//       </div>
//       <ul className="products__category">
//         <li className="products__category__item">All</li>
//         <li className="products__category__item">Furucties</li>
//         {categoryData}
//       </ul>
//       <div className="products__cards">{productsData}</div>
//     </div>
//   );
// };

// export default OurProducts;
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist } from "../../../../context/api/slice/wishlistSlice";
import { add } from "../../../../context/slice/cartSlice";
import defaultImg from "../../../../assets/images/default.png";
import { useGetCategoryQuery } from "../../../../context/api/categoryApi";
import { useGetProductsQuery } from "../../../../context/api/productApi";
import { useState, useEffect } from "react";
import Modal from "../../../modal";

const OurProducts = () => {
  const { data: productsData } = useGetProductsQuery({ limit: 6 });
  const [searchParams, setSearchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const [modal, setModal] = useState(null);
  let wishlistData = useSelector((state) => state.wishlistSlice.data) || [];
  const dispatch = useDispatch();
  const { data: categoryData } = useGetCategoryQuery();

  const star = [
    <FaStar key={"1"} />,
    <FaStar key={"2"} />,
    <FaStar key={"3"} />,
    <FaStar key={"4"} />,
    <FaStarHalfAlt key={"5"} />,
  ];

  useEffect(() => {
    if (productId) {
      setModal(productId);
    } else {
      setModal(null);
    }
  }, [productId]);

  const openModal = (product) => {
    setSearchParams({ product: product.id });
  };

  const closeModal = () => {
    setSearchParams({});
  };

  const products = productsData?.data?.products?.map((product, index) => (
    <div key={index} className="p-4 border rounded">
      <button
        onClick={() => dispatch(addWishlist(product))}
        className="absolute top-2 right-2 p-2 rounded-full bg-white border products__card__img-like"
      >
        {wishlistData.some((el) => el.id === product.id) ? (
          <FaHeart className="text-crimson" />
        ) : (
          <FaRegHeart />
        )}
      </button>
      <div onClick={() => openModal(product)} className="h-80 cursor-pointer">
        <img
          src={product.urls[0] ? product.urls[0] : defaultImg}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          {star.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
          <p>(123)</p>
        </div>
        <Link
          to={`single-rout/${product.id}`}
          className="block mt-2 text-lg font-medium text-gray-800 hover:text-green-600"
        >
          {product.title}
        </Link>
        <div className="flex justify-between items-center mt-2">
          <h3 className="text-xl font-bold text-green-600">${product.price}</h3>
          <button
            onClick={() => {
              console.log("Adding to cart:", product);
              dispatch(add(product));
            }}
            className="text-green-600"
          >
            <FiShoppingCart className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  ));

  const categories = categoryData?.data?.map((el) => (
    <li
      key={el.id}
      className="p-2 border rounded cursor-pointer hover:bg-green-600 hover:text-white"
    >
      {el.name}
    </li>
  ));

  return (
    <div className="products container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold">Our products.</h2>
        <button className="px-4 py-2 rounded border border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
          View all (12)
        </button>
      </div>
      <ul className="flex gap-4 overflow-x-scroll pb-4">
        <li className="p-2 border rounded cursor-pointer hover:bg-green-600 hover:text-white">
          All
        </li>
        {categories}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products}
      </div>
      {modal && <Modal productId={modal} onClose={closeModal} />}
    </div>
  );
};

export default OurProducts;
