interface Props {
  title?: string;
}

const CDriver = ({ title = "" }: Props) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="w-full h-[2px] bg-[var(--lightGray)]"></div>
      {title && <span className="font-medium">{title}</span>}
      <div className="w-full h-[2px] bg-[var(--lightGray)]"></div>
    </div>
  );
};

export default CDriver;
