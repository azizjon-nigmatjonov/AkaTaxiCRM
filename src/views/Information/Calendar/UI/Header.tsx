import { PassengerIcon, PassengerVehicleIcon, DriverIcon, DriverVehicleIcon } from '../../../../components/IconGenerator/Svg'
const Header = () => {
  return (
    <div className="flex justify-between h-[60px] items-center px-5">
      <p className="text-[var(--error)] font-medium">1 Fevral, 2024 - 31 Fevral, 2024</p>

      <div className="flex space-x-[30px] font-medium">
        <p className="flex gap-1 items-center">
          <PassengerVehicleIcon/>
          Yangi mashurtlar
          {/* <div className="w-[8px] h-[8px] bg-[var(--darkerGreen)] rounded-full ml-1"></div> */}
        </p>
        <p className="flex gap-1 items-center">
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
          <DriverVehicleIcon/>
          Yangi qidiruvlar
          {/* <div className="w-[8px] h-[8px] bg-yellow-500 rounded-full ml-1"></div> */}
        </p>
      </div>
    </div>
  );
};

export default Header;
