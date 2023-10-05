import { Skeleton } from "@mui/material";
const SkeletonCard = () => {
  return (
    <Skeleton
      style={{
        height: "100px",
        width: '100%',
        borderRadius: "18px",
        margin: 0,
        padding: 0,
      }}
    />
  );
};

export default SkeletonCard;
