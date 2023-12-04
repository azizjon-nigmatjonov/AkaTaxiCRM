import { UserIcon } from "../IconGenerator/Svg";

const ImageFrame = ({
  image = "",
  classes = "",
}: {
  image: any;
  classes?: string;
}) => {
  return (
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
    </div>
  );
};

export default ImageFrame;
