const Lighter = ({ text = '', color = 'red' } : { color?: string, text: string }) => {
  return (
    <div className="flex items-center">
      <span className="font-medium text-[var(--black)]">{ text }</span>
      <div className="w-[8px] h-[8px] rounded-full ml-1" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Lighter;
