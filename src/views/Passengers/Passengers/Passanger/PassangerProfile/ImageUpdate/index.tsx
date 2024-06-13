import { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Controller } from "react-hook-form";
import {
  CameraIcon,
  EditIcon,
  DeleteIcon,
  PhotoIcon,
} from "../../../../../../components/UI/IconGenerator/Svg";
import fileService from "../../../../../../services/fileService";
import { ImageViewer } from "../../../../../../components/UI/ImageViewer";

interface Props {
  view?: boolean;
  isDelete?: boolean;
  defaultValue?: string;
  name: string;
  control?: any;
  setValue?: (val?: any, val2?: any) => void;
}

const PImageUpdate = ({
  view = false,
  isDelete = false,
  defaultValue = "",
  name,
  control,
  setValue = () => {},
}: Props) => {
  const inputRef: any = useRef(null);
  const [image, setImage] = useState("");
  const [imageTool, setImageTool] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageView, setImageView] = useState("");

  const inputChangeHandler = (e: any) => {
    setLoading(true);
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);

    fileService
      .upload(data)
      .then((res: any) => {
        setValue(name, res?.data?.id);
        setImage(res?.data?.original_url);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteImage = (e: any) => {
    e.stopPropagation();
    setImage("");
    setImageTool(false);
  };

  useEffect(() => {
    if (defaultValue) {
      setImage(defaultValue);
    }
  }, [defaultValue]);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <div className="relative  rounded-full">
            <div className="border relative rounded-full w-[150px] h-[150px] overflow-hidden bg-[var(--lineGray)] flex items-center justify-center">
              {defaultValue || (image && !loading) ? (
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setImageView(image)}
                  src={image ? image : defaultValue}
                  alt={defaultValue || "image"}
                />
              ) : (
                ""
              )}

              <div className="z-[2] absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                {loading ? <CircularProgress /> : view ? "" : <PhotoIcon />}
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
                onChange={(e: any) => [inputChangeHandler(e), onChange(image)]}
              />
            </div>
            <div
              onClick={() => setImageTool((prev) => !prev)}
              className="bg-white cursor-pointer p-[10px] border border-[var(--lightGray)] inline-flex rounded-full absolute bottom-[5px] right-[5px]"
            >
              <CameraIcon />
            </div>
            {imageTool && (
              <div className="bg-white divide-y-2 absolute w-[156px] top-full left-[50%] z-10 rounded-xl border border-[var--softgray]">
                <div
                  onClick={() => {
                    inputRef.current.click(), setImageTool(false);
                  }}
                  className="flex items-center gap-2 p-2 hover:bg-[var(--lineGray)] rounded-t-xl cursor-pointer"
                >
                  <EditIcon fill="#858592" />
                  <p className="text-xs font-normal text-[var(--gray)]">
                    Rasm yuklash
                  </p>
                </div>
                <div
                  onClick={deleteImage}
                  className="flex items-center gap-2 p-2  hover:bg-[var(--lineGray)] rounded-b-xl cursor-pointer"
                >
                  <DeleteIcon fill="#858592" />
                  <p className="text-xs font-normal text-[var(--gray)]">
                    O’chirish
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      />
      {view && (
        <ImageViewer url={imageView} closeViewer={() => setImageView("")} />
      )}
    </>
  );
};

export default PImageUpdate;
