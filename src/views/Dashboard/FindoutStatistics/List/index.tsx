import { UserIconOutline } from "../../../../components/UI/IconGenerator/Svg";
import {
  InstagramIcon,
  TelegramIcon,
} from "../../../../components/UI/IconGenerator/Svg/Socials";

const List = [
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    count: 50,
  },
  {
    icon: <TelegramIcon />,
    name: "Instagram",
    count: 50,
  },
];

const ListItem = ({ classes, element }: { classes?: string; element: any }) => {
  return (
    <li className={`py-16px px-24px flex space-x-24px w-full ${classes}`}>
      <div>{element.icon}</div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <span>{element.name}</span>
          <div className="bg-[var(--primary50)] flex items-center space-x-1 p-6px rounded-full">
            <UserIconOutline />
            <span>{element.count} ta</span>
          </div>
        </div>

        <div className="bg-[var(--gray50)] w-full h-[8px] rounded-[4px] mt-12px">
          <div className="bg-[var(--main500)] w-[10%] h-[8px] rounded-[4px] mt-12px"></div>
        </div>
      </div>
    </li>
  );
};

export const StatisticsList = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h3 className="pl-24px text-[var(--gray90)] text-lg font-[600]">
          Yo’lovchilar
        </h3>
        <ul>
          {List.map((item, index) => (
            <ListItem key={index} element={item} classes="pr-24px" />
          ))}
        </ul>
      </div>
      <div>
        <h3 className="pl-24px text-[var(--gray90)] text-lg font-[600]">
          Haydovchilar
        </h3>
        <ul>
          {List.map((item, index) => (
            <ListItem key={index} element={item} classes="pl-24px" />
          ))}
        </ul>
      </div>
    </div>
  );
};
