const Empty = ({ url }) => {
  return (
    <div className="carts">
      <h3 className="carts__empty__title text-center text-3xl font-semibold text-green-600 py-4">Savatchangiz hali bo'sh</h3>
      <div className="carts__empty__img mx-auto w-3/4">
        <img src={url} alt="Empty cart" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Empty;
