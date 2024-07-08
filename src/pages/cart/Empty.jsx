import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Empty = ({ url }) => {
  let navigate = useNavigate()
  return (
    <div className="carts">
      <h3 className="carts__empty__title text-center text-3xl font-semibold text-green-600 py-4">
        Savatchangiz hali bo{"'"}sh
      </h3>
      <div className="carts__empty__img mx-auto w-3/4">
        <img
          src={url}
          alt="Empty cart"
          className="w-full object-contain h-auto max-h-[600px]"
        />
      </div>
      <div className=" flex items-center justify-center gap-2">
        <Button onClick={() => navigate('/')} variant="contained" color="success">
          Back to Home
        </Button>
        <Button onClick={() => navigate(-1)} variant="contained" color="success">
          Previous
        </Button>
      </div>
    </div>
  );
};

export default Empty;
