import { useRef, useState } from "react";
import { ImageFrame } from "../../IconGenerator/Svg";
import fileService from "../../../services/fileService";
import CancelIcon from "@mui/icons-material/Cancel";

interface Props {
  isDelete?: boolean;
}

const ImageUploadBtn = ({ isDelete = false }: Props) => {
  const inputRef: any = useRef(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: any) => {
    const reader: any = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const inputChangeHandler = (e: any) => {
    setLoading(true);
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);

    fileService
      .upload(data)
      .then((res: any) => {
        console.log("res", res);
        handleFileChange(res);
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
      className="cursor-pointer flex items-center justify-between px-[14px] text-[var(--gray)] font-medium border border-[var(--lineGray)] rounded-[10px] h-[48px]"
    >
      <span>Marka rasmi</span>
      <ImageFrame />

      <input
        type="file"
        className="hidden"
        ref={inputRef}
        onChange={inputChangeHandler}
      />

      {isDelete ? (
        <button onClick={(e) => deleteImage(e)}>
          <CancelIcon />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ImageUploadBtn;
