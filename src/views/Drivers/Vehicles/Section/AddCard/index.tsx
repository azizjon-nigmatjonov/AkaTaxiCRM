import CCard from "../../../../../components/CElements/CCard";
import { PlusIcon } from "../../../../../components/IconGenerator/Svg";
import { ColorConstants } from "../../../../../constants/website";

const AddCard = () => {
  return (
    <CCard
      classes="min-h-0 rounded-[24px] border-none flex items-center justify-center cursor-pointer"
      style={{
        minHeight: "250px",
        padding: 0,
        background: "transparent",
        border: `1px dashed ${ColorConstants.lightestGray}`,
      }}
    >
      <div className="w-[32px] h-[32px] flex items-center justify-center border border-[var(--gray)] rounded-full mr-2">
        <PlusIcon fill={ColorConstants.gray} />
      </div>
      <p className="text-base text-[var(--black)] font-medium">
        Mashina qo‘shish
      </p>
    </CCard>
  );
};

export default AddCard;
