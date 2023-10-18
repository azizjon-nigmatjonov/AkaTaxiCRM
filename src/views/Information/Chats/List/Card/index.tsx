import CCard from "../../../../../components/CElements/CCard";
import { UserIcon } from "../../../../../components/IconGenerator/Svg";
import { ColorConstants } from "../../../../../constants/website";

const Card = ({
  element,
  handleClick = () => {},
}: {
  element: any;
  handleClick?: (val?: any) => void;
}) => {
  return (
    <CCard classes="p-4 cursor-pointer rounded-[14px]" style={{ minHeight: 0 }}>
      <div
        className="flex items-center"
        onClick={() => handleClick(element.id)}
      >
        <div className="relative mb-4">
          <div className="border border-[var(--lineGray)] w-[30px] h-[30px] rounded-full flex items-center justify-center">
            {element.driver.image ? (
              <img className="w-full h-full" src={element.driver.image} alt={element.driver.image} />
            ) : (
              <UserIcon />
            )}
          </div>
          <div className="border border-[var(--lineGray)] bg-white w-[30px] h-[30px] rounded-full absolute -bottom-1/2 -right-1/2 flex items-center justify-center">
            {element.passenger.imag ? (
              <img
                className="w-full h-full"
                src={element.passenger.image}
                alt={element.passenger.image}
              />
            ) : (
              <UserIcon fill={ColorConstants.main} />
            )}
          </div>
        </div>
        <div className="ml-8">
          <h3 className="text-[var(--black)] font-[600]">
            {element.driver.name}/{element.passenger.name}
          </h3>
          <p className="text-[var(--black)] mt-1">
            {element.last_message.text}
          </p>
        </div>
      </div>
    </CCard>
  );
};

export default Card;
