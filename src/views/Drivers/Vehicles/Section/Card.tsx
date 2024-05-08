import { FC } from "react";
import CCard from "../../../../components/CElements/CCard";
import {
  CarIcon,
  EditIcon,
  EyeIcon,
} from "../../../../components/UI/IconGenerator/Svg";
// import { RoutingIcon } from "../../../../components/IconGenerator/Svg/Sidebar";
import { ColorConstants } from "../../../../constants/website";
// import Progress from "./Progress";
import usePageRouter from "../../../../hooks/useObjectRouter";
// import VehicleModel from "./VehicleModel";

interface Props {
  element: any;
  setInputValue: any;
}

const Card: FC<Props> = ({ setInputValue, element }) => {
  const { navigateTo, navigateQuery } = usePageRouter();

  // console.log(element.name);

  const handleClick = (element: any) => {
    navigateQuery({ id: element.id });
    // setInputValue(element2);
    console.log("tah", element);
    setInputValue(element.name);
  };
  return (
    <CCard classes="min-h-0 rounded-xl" style={{ minHeight: "0", padding: 0 }}>
      <div className="flex items-center justify-between p-6">
        <div>
          <h5 className="text-base text-black font-semibold">{element.name}</h5>
          <div className="mt-[14px] flex flex-col space-x-2">
            <div className="flex space-x-1">
              <CarIcon />
              <span className="text-[var(--main)]">{element.all_cars}</span>
            </div>
            <div className="flex items-center space-x-2">
              {/* <RoutingIcon /> */}
              <div className="h-2 w-2 bg-[var(--green)] rounded-full" />
              <span className="text-[var(--black)]">{element.in_trip} </span>
            </div>
          </div>
        </div>
        <div className="h-[80px] max-w-[110px]">
          <img
            className="w-full h-full object-cover"
            src={element.image}
            alt={element.image || "image"}
          />
        </div>
      </div>

      {/* <div className="p-6 border-b border-[var(--lineGray)] cursor-pointer">
        <Progress all={element.all_cars} current={element.in_trip} />

        <div className="mt-5">
          <VehicleModel />
        </div>
      </div> */}

      <div className="flex justify-end">
        <div
          onClick={() => navigateTo(`/drivers/cars/${element.id}`)}
          className="cursor-pointer px-6 border-r border-[var(--lineGray)] h-[50px] flex items-center w-full font-medium"
        >
          <div className="border border-[var(--lineGray)] h-[30px] w-[30px] flex items-center justify-center rounded-full mr-2">
            <EyeIcon />
          </div>
          <p className="text-[13px] whitespace-nowrap">Batafsil</p>
        </div>
        <div
          onClick={() => handleClick(element)}
          className="px-6  h-[50px] flex items-center w-full font-medium cursor-pointer"
        >
          <div className="border border-[var(--lineGray)] h-[30px] w-[30px] flex items-center justify-center rounded-full mr-2">
            <EditIcon fill={ColorConstants.gray} />
          </div>
          <p className="text-[13px]">Tahrirlash</p>
        </div>
      </div>
    </CCard>
  );
};

export default Card;
