import { ManIcon, UserIcon, WomenIcon } from "../IconGenerator/Svg";

const ImageFrame = ({
  image = "",
  classes = "",
  gender = "",
}: {
  image: any;
  classes?: string;
  gender?: string;
}) => {
  return (
    <div className="w-[42px] h-[42px] relative">
      <div
        className={`w-[42px] h-[42px] rounded-[10px] bg-[var(--lightGray)] border border-[#C8C8C8] overflow-hidden flex items-center justify-center ${classes}`}
      >
        {image ? (
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={image || "image"}
          />
        ) : (
          <UserIcon />
        )}
        {gender && (
          <div className="absolute right-[-5px] bottom-[-5px] w-[20px] h-[20px] p-[2px] rounded-full bg-white border border-border flex items-center justify-center">
            {gender === "m" ? <ManIcon /> : <WomenIcon />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageFrame;
