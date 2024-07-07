import "./Cart.scss";

interface EmptyProps {
  url: string;
}

const Empty: React.FC<EmptyProps> = ({ url }) => {
  return (
    <div className="py-5 h-[calc(100vh-220px)]">
      <h3 className="py-5 text-center text-2xl font-extrabold text-green-500">
        Savatchangiz hali bo'sh
      </h3>
      <div className="mx-auto w-4/5 h-[500px]">
        <img
          src={url}
          alt="Empty cart"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Empty;
