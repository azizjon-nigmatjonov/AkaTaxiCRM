interface Props {
  label: any;
  handleChange?: (e: string) => void;
  value?: any;
}

const CRadio = ({ label, value, handleChange = () => {} }: Props) => {
  return (
    <>
      <div
        onClick={() => handleChange(label)}
        className="px-5 h-[40px] rounded-[8px] border border-[var(--gray20)] bg-white w-full flex items-center justify-between cursor-pointer"
      >
        <span className="text-black font-normal">{label}</span>
        <div
          className={`h-[18px] w-[18px] rounded-full ${
            value == label
              ? "border-4 border-[var(--main)]"
              : "border-2 border-[var(--gray20)]"
          }`}
        />
      </div>
    </>
  );
};

export default CRadio;
