import { PassengerIcon, PassengerVehicleIcon, DriverIcon, DriverVehicleIcon } from '../../../../components/IconGenerator/Svg'
import Tools from './Tools';


const Header = () => {

  // const nextButton = () => {
  //   if (MONTHS.length - 1 > index) {
  //     setIndex((prev: any) => ++prev)
  //   } else if (MONTHS.length - 1 == index) {
  //     setIndex(0)
  //   }
  // }

  // const prevButton = () => {
  //   if (index > 0) {
  //     setIndex((prev: any) => --prev)
  //   } else if (index == 0) {
  //     setIndex(11)
  //   }
  // }


  return (
    <div className="flex justify-between h-[60px] items-center px-5">

      <Tools />

      <div className="flex text-[14px] text-[var(--gray)] space-x-[30px] font-medium">
        <p className="flex gap-1 items-center">
          <PassengerVehicleIcon />
          Yo’lovchi marshruti
          {/* <div className="w-[8px] h-[8px] bg-[var(--darkerGreen)] rounded-full ml-1"></div> */}
        </p>
        <p className="flex  gap-1 items-center">
          <DriverIcon />
          Yangi haydo'vchilar
          {/* <div className="w-[8px] h-[8px] bg-[var(--error)] rounded-full ml-1"></div> */}
        </p>
        <p className="flex gap-1 items-center">
          <PassengerIcon />
          Yangi yo'lovchilar
          {/* <div className="w-[8px] h-[8px] bg-[var(--blue)] rounded-full ml-1"></div> */}
        </p>
        <p className="flex gap-1 items-center">
          <DriverVehicleIcon />
          Haydovchi marshruti
          {/* <div className="w-[8px] h-[8px] bg-yellow-500 rounded-full ml-1"></div> */}
        </p>
      </div>
    </div>
  );
};

export default Header;
