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
          <PassengerIcon />
          Yangi yo'lovchilar
        </p>
        <p className="flex gap-1 items-center">
          <DriverIcon />
          Yangi haydo'vchilar
        </p>
        <p className="flex gap-1 items-center">
          <DriverVehicleIcon />
          Haydovchi marshruti
        </p>
        <p className="flex gap-1 items-center">
          <PassengerVehicleIcon />
          Yo’lovchi marshruti
        </p>
      </div>
    </div>
  );
};

export default Header;
