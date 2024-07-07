import "./Cart.scss";

const Empty = ({ url }) => {
  return (
    <div className="carts">
      <h3 className="carts__empty__title">Savatchangiz hali bo'sh</h3>
      <div className="carts__empty__img">
        <img src={url} alt="" />
      </div>
    </div>
  );
};

export default Empty;
