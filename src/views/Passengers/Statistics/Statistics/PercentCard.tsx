export const PercentCard = ({
  icon,
  text = "",
  color = "#0062FF",
  percent = 0,
  column = false,
}: {
  icon: any;
  text: string;
  color?: string;
  percent: number;
  column?: boolean;
}) => {
  return (
    <div
      className="flex items-center space-x-5 px-6"
      style={{ flexDirection: column ? "column" : "row" }}
    >
      <div
        className="border-[3px] w-[70px] h-[70px] rounded-full flex items-center justify-center"
        style={{ borderColor: color }}
      >
        {icon}
      </div>
      <div className={column ? 'text-center mt-4' : ''}>
        <h5 className="text-2xl font-[700]">{percent}%</h5>
        <span className="text-[var(--gray)]">{text}</span>
      </div>
    </div>
  );
};
