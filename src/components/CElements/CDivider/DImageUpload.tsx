import { useEffect, useRef, useState } from "react";
import { DeleteIcon, DotsIcon, ImageFrame, InfoIcon } from "../../IconGenerator/Svg";
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
  const [imageTool, setImageTool] = useState(false);

  const inputChangeHandler = (e: any) => {

    setLoading(true);
    const file = e?.target.files[0];

    const data = new FormData();

    data.append("file", file);

    fileService
      .upload(data)
      .then((res: any) => {
        setValue(name, res?.data.data?.id);
        setImage(res?.data?.data?.id);
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

   
  

  const updateImage = (e: any) => {
    e.stopPropagation();
    if (!readOnly) {
      inputRef.current.click()
      setImageTool(false)
    }
  }

  const deleteImage = (e: any) => {
    e.stopPropagation();
    setImage("");
    setImageTool(false)
    defaultValue = ''
  };

  
  
  return (
    <>
      <Controller name={name} control={control} render={({ field: { onChange } }) => (
        <div className="flex  flex-col">
          {label ?
            <div className="flex items-center justify-between">
              <CLabel title={label} />
              <div className="relative p-5" onClick={() => setImageTool(true)}>
                <DotsIcon />
                {imageTool && <div className="bg-white divide-y-2 absolute w-[156px] top-[30px] right-0 z-10 rounded-xl border border-[var--softgray]">
                  <div onClick={deleteImage} className="flex items-center gap-2 p-2  hover:bg-[var(--lineGray)] rounded-xl cursor-pointer">
                    <DeleteIcon fill='#858592' />
                    <p className="text-xs font-normal text-[var(--gray)]">O’chirish</p>
                  </div>
                </div>}
              </div>
            </div> : ""}
          <div onClick={updateImage}
            className={`cursor-pointer flex px-[14px] text-[var(--gray)] font-medium border border-[var(--lineGray)] rounded-[10px] h-[50px] bg-[var(--lightGray)] flex-col justify-center items-center max-w-[250px] min-w-[249px]`}
            style={style}
          >
            <span >{text}</span>
            {defaultValue || (image && !loading) ? (
              <img
                className={`h-full  w-full object-cover `}
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
          {!image && !defaultValue && <div className="flex items-start gap-1 mt-2">
            <InfoIcon size={14} />
            <span className="text-xs font-normal leading-[18px] text-[var(--gray)]">Rasm formati png, jpg bo’lishi kerak. <br />O’lchami maksimum 12 MB. </span>
          </div>}

        </div>
      )}></Controller>
    </>
  );
};

export default DImageUpload;

