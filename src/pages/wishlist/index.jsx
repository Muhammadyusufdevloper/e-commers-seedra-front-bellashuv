import { memo } from "react";
import WishlistProduct from "./wishlistProduct";
import noteFoundImages from "../../assets/images/page/note-found/note.avif";
import { useSelector } from "react-redux";

const Wishlist = () => {
  let data = useSelector((state) => state.wishlistSlice.data);
  console.log(data);
  return (
    <div className="container">
      {data.length ? (
        <WishlistProduct data={data} />
      ) : (
        <div className="container min-h-[calc(100vh-230px)] flex items-center justify-center">
          <div className="relative">
            <img
              src={noteFoundImages}
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
