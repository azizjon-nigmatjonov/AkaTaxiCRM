import { useRef, useState } from "react";
import { PhotoIcon } from "../../IconGenerator/Svg";
import fileService from "../../../services/fileService";
import { CircularProgress } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

interface Props {
  isDelete?: boolean;
  defaultValue?: string;
  name: string;
  setValue?: (val?: any, val2?: any) => void;
}

const CImageUpload = ({
  isDelete = false,
  defaultValue = "",
  name,
  setValue = () => {},
}: Props) => {
  const inputRef: any = useRef(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const inputChangeHandler = (e: any) => {
    setLoading(true);
    const file = e.target.files[0];
        
    const data = new FormData();
    data.append("file", file);

    fileService
      .upload(data)
      .then((res: any) => {
        setValue(name, res?.data?.data?.id);
        setImage(res?.data?.data?.id);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteImage = (e: any) => {
    e.stopPropagation();
    setImage("");
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      className="border relative rounded-full w-[150px] h-[150px] overflow-hidden bg-[var(--lineGray)] flex items-center justify-center cursor-pointer"
    >
      {defaultValue || (image && !loading) ? (
        <img
          className="w-full h-full object-cover"
          src={
            image 
              ? `https://cdn.akataxi.uz/media/get-image/${image}`
              : defaultValue
          }
          alt={defaultValue || "image"}
        />
      ) : (
        ""
      )}

      <div className="z-[2] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        {loading ? <CircularProgress /> : <PhotoIcon />}
      </div>

      {isDelete ? (
        <button onClick={(e) => deleteImage(e)}>
          <CancelIcon />
        </button>
      ) : (
        ""
      )}

      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default CImageUpload;
