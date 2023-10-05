import { FC } from "react";
import CCard from "../../../../components/CElements/CCard";
import { CarIcon } from "../../../../components/IconGenerator/Svg";
import { RoutingIcon } from "../../../../components/IconGenerator/Svg/Sidebar";
import { ColorConstants } from "../../../../constants/website";
import Progress from "./Progress";
import VehicleModel from "./VehicleModel";

interface Props {
  element: any
}

const Card: FC<Props> = ({ element }) => {
  return (
    <CCard
      classes="min-h-0 rounded-[24px]"
      style={{ minHeight: "0", padding: 0 }}
    >
      <div className="flex items-center justify-between border-b border-[var(--lineGray)] p-6">
        <div>
          <h5 className="text-2xl text-black font-[600]">{element.title}</h5>

          <div className="mt-2 flex space-x-2">
            <div className="flex space-x-1">
              <CarIcon fill={ColorConstants.gray} />
              <span className="text-[var(--main)]">37 ta</span>
            </div>
            <div className="flex space-x-1">
              <RoutingIcon fill={ColorConstants.gray} width={18} height={18} />
              <span className="text-[var(--main)]">37 ta</span>
            </div>
          </div>
        </div>
        <div>
          <img src={element.image} alt={element.image || 'image'} />
        </div>
      </div>

      <div className="p-6">
        <Progress />

        <div className="mt-5">
          <VehicleModel />
        </div>
      </div>
    </CCard>
  );
};

export default Card;
