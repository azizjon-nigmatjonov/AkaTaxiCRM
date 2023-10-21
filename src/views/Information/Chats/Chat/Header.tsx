import { UserIcon } from "../../../../components/IconGenerator/Svg";
import cls from './style.module.scss'
const Header = ({ current }: { current?: any }) => {
  return (
    <div className={`flex items-center justify-between text-[var(--black)] p-5 ${cls.header}`}>
      <div className="flex items-center space-x-3">
        <div className="border border-[var(--lineGray)] w-[30px] h-[30px] rounded-full flex items-center justify-center">
          {current.driver?.image ? (
            <img
              className="w-full h-full"
              src={current.driver.image}
              alt={current.driver.image}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <p className="font-[600]">{current.driver?.name}</p>
        <div className="w-[1px] h-[20px] bg-[var(--lineGray)]"></div>
        <span className="text-[var(--gray)]">Haydovchi</span>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-[var(--gray)]">Yo’lovchi</span>
        <div className="w-[1px] h-[20px] bg-[var(--lineGray)]"></div>

        <div className="border border-[var(--lineGray)] w-[30px] h-[30px] rounded-full flex items-center justify-center">
          {current.passenger?.image ? (
            <img
              className="w-full h-full"
              src={current.passenger.image}
              alt={current.passenger.image}
            />
          ) : (
            <UserIcon />
          )}
        </div>
        <p className="font-[600]">{current.passenger?.name}</p>
      </div>
    </div>
  );
};

export default Header;
