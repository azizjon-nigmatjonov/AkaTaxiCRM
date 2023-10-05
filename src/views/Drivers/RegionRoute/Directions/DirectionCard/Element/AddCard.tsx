import CCard from "../../../../../../components/CElements/CCard";
import { PlusIcon } from "../../../../../../components/IconGenerator/Svg"; 
import { ColorConstants } from "../../../../../../constants/website";

const AddCard = () => {
  return (
    <CCard
      classes="min-h-0 rounded-[14px] border-none flex items-center justify-center cursor-pointer"
      style={{
        minHeight: "55px",
        padding: 0,
        background: "transparent",
        border: `1px dashed ${ColorConstants.lightestGray}`,
      }}
    >
      <div className="w-[32px] h-[32px] flex items-center justify-center border border-[var(--lineGray)] bg-white rounded-full mr-2">
        <PlusIcon fill={ColorConstants.gray} />
      </div>
    </CCard>
  );
};

export default AddCard;
