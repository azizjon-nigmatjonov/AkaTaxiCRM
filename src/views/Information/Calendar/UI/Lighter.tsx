import IconGenerator from "../../../../components/IconGenerator";

const Lighter = ({ text = '', color = 'red', icon }: { color?: string, text: string, icon?: any }) => {
  return (
    <div className="flex items-center">
      <span className="font-medium text-[var(--black)]">{text}</span>
      <div className="w-[8px] h-[8px] rounded-full ml-1" style={{ backgroundColor: color }}></div>
      <IconGenerator icon={icon} />
    </div>
  );
};

export default Lighter;
