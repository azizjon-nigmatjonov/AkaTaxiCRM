import CCard from "../../../../../components/CElements/CCard";
import { UserIcon } from "../../../../../components/IconGenerator/Svg";
import { ColorConstants } from "../../../../../constants/website";


type CardProps = {
  selectedElement: any;
  element: any;
  handleClick?: (val?: any) => void;
  active: boolean | any;
};

const Card = ({ selectedElement, element, handleClick = () => { }, active = false }: CardProps) => {

  active

  const [datePart, timePart] = element.last_message.created_at.split(" ");

  const [hours, minutes] = timePart.split(":");

  datePart



  return (
    <CCard style={{ minHeight: 0, background: selectedElement === element.id ? '#FF5B01' : '#fff' }} classes={`mt-[12px]  p-4 cursor-pointer rounded-[14px]`} >
      <div
        className="flex items-center "
        onClick={() => handleClick(element.id)}
      >
        <div className="relative mb-4">
          <div className="border border-[var(--lineGray)] w-[30px] h-[30px]  rounded-full flex items-center justify-center">
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
        <div className="ml-8 flex justify-between flex-grow">
          <div>
            <h3 className={`${selectedElement === element.id ? 'text-[#fff]' : 'text-[var(--black)]'} font-[600]`}>
              {element.driver.name}/{element.passenger.name}
            </h3>
            <p className={`${selectedElement === element.id ? 'text-[#fff]' : 'text-[var(--black)]'}  mt-1`}>
              {element.last_message.text}
            </p>
          </div>
          <p className={`${selectedElement === element.id ? 'text-[#fff]' : 'text-[#858592]'} `}>{`${hours}:${minutes}`}</p>
        </div>
      </div>
    </CCard>
  );
};

export default Card;
