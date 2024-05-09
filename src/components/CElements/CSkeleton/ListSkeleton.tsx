import { OneSkeleton } from "./OneSkeleton";

export const ListSkeleton = ({
  rounded = 12,
  count = 4,
  height = 150,
}: {
  rounded?: number;
  count?: number;
  height?: number;
}) => {
  return (
    <div className={`grid grid-cols-${count} gap-x-5`}>
      {Array.from(new Array(count)).map((i) => (
        <OneSkeleton key={i} height={height} rounded={rounded} />
      ))}
    </div>
  );
};
