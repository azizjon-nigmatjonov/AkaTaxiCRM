import { Skeleton } from "@mui/material";

const SkeletonCard = () => {
  return (
    <div className="grid grid-cols-3 gap-[18px] h-[270px]">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} style={{ height: "100%", borderRadius: "24px" }} />
      ))}
    </div>
  );
};

export default SkeletonCard;
