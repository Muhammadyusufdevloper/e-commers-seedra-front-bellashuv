import { memo } from "react";
import WishlistProduct from "./wishlistProduct";
import { useSelector } from "react-redux";

const Wishlist = () => {
  let data = useSelector((state) => state.wishlistSlice.data);
  console.log(data);
  return (
    <div className="container">
      {data.length ? (
        <WishlistProduct data={data} />
      ) : (
        <div className="w-full max-w-[1142px] px-4 min-h-[calc(100vh-230px)] flex items-center justify-center">
          <div className="flex items-center justify-center ">
            <img
              src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
              className="w-full h-full object-contain"
              alt="note found images"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Wishlist);
