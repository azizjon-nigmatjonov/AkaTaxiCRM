import { useEffect, useRef, useState } from "react";
import { ImageFrame } from "../../IconGenerator/Svg";
import fileService from "../../../services/fileService";
import CancelIcon from "@mui/icons-material/Cancel";
import { CircularProgress } from "@mui/material";
import CLabel from "../../CElements/CLabel";
import { Controller } from 'react-hook-form'

interface Props {
  control?: any;
  isDelete?: boolean;
  defaultValue?: string;
  name: string;
  text?: string;
  label?: string;
  readOnly?: boolean;
  setValue?: (val?: any, val2?: any) => void;
  style?: any,
}

const DImageUpload = ({
  control,
  isDelete = false,
  defaultValue = "",
  name,
  setValue = () => { },
  text = "",
  readOnly = false,
  label = "",
  style,
}: Props) => {
  const inputRef: any = useRef(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const inputChangeHandler = (e: any) => {

    setLoading(true);
    const file = e?.target.files[0];

    const data = new FormData();

    data.append("file", file);

    fileService
      .upload(data)
      .then((res: any) => {
        setValue(name, res?.data?.id);
        setImage(res?.data?.id);
      })
      .finally(() => {
        setLoading(false);
      })
  };


  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  const deleteImage = (e: any) => {
    e.stopPropagation();
    setImage("");
  };


  return (
    <>
      <Controller name={name} control={control} render={({ field: { onChange } }) => (
        <div className="flex  flex-col">
          {label ? <CLabel title={label} /> : ""}
          <div
            onClick={() => {
              if (!readOnly) inputRef.current.click()
            }}
            className={`cursor-pointer flex px-[14px] text-[var(--gray)] font-medium border border-[var(--lineGray)] rounded-[10px] h-[50px] bg-[var(--lightGray)] flex-col justify-center items-center max-w-[250px] min-w-[249px]`}
            style={style}
          >
            <span >{text}</span>
            {defaultValue || (image && !loading) ? (
              <img
                className={`h-full  w-full `}
                src={image ? `https://cdn.akataxi.uz/media/get-image/${image}` : defaultValue}
                alt={defaultValue || "image"}
              />
            ) : loading ? (
              <CircularProgress />
            ) : (
              <ImageFrame />
            )}
            <input
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={(e: any) => [inputChangeHandler(e), onChange(e.target?.files[0])]}
            />

            {isDelete ? (
              <button onClick={(e) => deleteImage(e)}>
                <CancelIcon />
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      )}></Controller>


    </>
  );
};

export default DImageUpload;

