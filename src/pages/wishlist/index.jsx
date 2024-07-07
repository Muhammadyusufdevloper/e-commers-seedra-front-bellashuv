import "./Wishlist.scss";

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
        <div
          style={{ minHeight: "calc(100vh - 230px)" }}
          className="container wishlist"
        >
          <div style={{ position: "relative" }}>
            <img
              src={noteFoundImages}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="note found images"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Wishlist);
