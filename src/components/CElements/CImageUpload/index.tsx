import { useRef, useState } from "react";
import { PhotoIcon } from "../../IconGenerator/Svg";

const CImageUpload = () => {
  const [value, setValue] = useState("");
  const inputRef: any = useRef(null);
  const [loading, setLoading] = useState(false);

  const inputChangeHandler = (e: any) => {
    setLoading(true);
    const file = e.target.files[0];

    const data = new FormData();
    data.append("file", file);
  };

  return (
    <div className="border rounded-full w-[80px] h-[80px] overflow-hidden bg-[var(--lineGray)] flex items-center justify-center cursor-pointer">
      {!value && (
        <div onClick={() => inputRef.current.click()}>
          <div className="add-icon">
            {!loading ? (
              <>
                <PhotoIcon />
              </>
            ) : (
              "222"
            )}
          </div>

          <input
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={inputChangeHandler}
          />
        </div>
      )}
    </div>
  );
};

export default CImageUpload;
