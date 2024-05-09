export const RollCreateHeder = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className="flex items-start justify-between px-6">
      <div>
        <h1 className="text-[#101828] text-lg font-semibold">{title}</h1>
        <p className="text-[#475467] text-sm font-normal">{text}</p>
      </div>
    </div>
  );
};
