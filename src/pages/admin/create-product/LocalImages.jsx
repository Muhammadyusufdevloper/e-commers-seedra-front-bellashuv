import{ memo } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const LocalImages = ({ files, setFiles }) => {
  const handleRemoveImage = index => {
    setFiles((prev)=> ([...prev].filter((_, inx) => inx !== index )))
  }
  return (
    <div className="local__images">
      {Object.values(files).map((el, inx) => (
        <div className="local__image" key={inx}>
          <img src={URL.createObjectURL(el)}  alt="" />
          <IoMdCloseCircle onClick={()=> handleRemoveImage(inx)}/>
        </div>
      ))}
    </div>
  );
};

export default memo(LocalImages);
