import { ArrowUp } from "../IconGenerator/Svg";

const InfoCard = () => {
  return (
    <div className="border border-[var(--lightGray)] bg-white p-4 rounded-[18px] flex items-center justify-between">
      <div className="w-[36px] h-[36px] bg-[#0BD97633] flex items-center justify-center rounded-[10px]">
        <ArrowUp />
      </div>
      <div>
        <span className="text-[28px] font-[600]">849,000,000 U</span>
        <p className="text-[#858592]">Ishlab topilgan summa</p>
      </div>
      <div>
        <span className="text-[var(--green)] font-[600] text-base">+2.5%</span>
      </div>
    </div>
  );
};

export default InfoCard;
