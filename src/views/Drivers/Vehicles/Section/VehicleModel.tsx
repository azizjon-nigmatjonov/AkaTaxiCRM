import { useMemo } from "react";

const VehicleModel = () => {
  const list = useMemo(() => {
    return [
      {
        title: "KA",
      },
      {
        title: "rr",
      },
      {
        title: "kf",
      },
      {
        title: "ol",
      },
      {
        title: 'kk'
      }
    ];
  }, []);
  return (
    <div className="flex gap-[10px]">
      {list.map((element, index, row) => (
        <div
          key={index}
          className={`${
            index === row.length - 1
              ? "border border-[var(--lineGray)]"
              : "bg-[var(--darkGray)]"
          } w-[36px] h-[36px] rounded-full flex items-center justify-center font-medium uppercase`}
        >
          {index === row.length - 1 ? (
            <span className="text-[var(--darkestGray)] text-[12px]">+3...</span>
          ) : (
            <span className="text-white">{element.title}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default VehicleModel;
