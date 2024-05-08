import { UserIconOutline } from "../../../components/UI/IconGenerator/Svg";
import CSelect from "../../../components/CElements/CSelect";
import { ClockIcon } from "@mui/x-date-pickers-pro";

const options = [
  {
    label: "Bugun",
    value: "today",
  },
];

const ListItem = ({ classes }: { classes?: string }) => {
  return (
    <li className={`border-t py-16px px-24px ${classes}`}>
      <div className="flex justify-between items-center">
        <span>Operator 1</span>
        <div className="flex items-center space-x-1">
          <div className="bg-[var(--primary50)] flex items-center space-x-1 p-6px rounded-full">
            <UserIconOutline/>
            <span>50 ta</span>
          </div>
          <div className="bg-[var(--gray50)] flex items-center space-x-1 p-6px rounded-full">
            <ClockIcon />
            <span>24 soat 59 minut</span>
          </div>
        </div>
      </div>

      <div className="bg-[var(--gray50)] w-full h-[8px] rounded-[4px] mt-12px">
        <div className="bg-[var(--main)] w-[30%] h-[8px] rounded-[4px] mt-12px"></div>
      </div>
    </li>
  );
};

export const CallCenterStatistics = () => {
  return (
    <div className="border border-[var(--gray20)] rounded-[12px] bg-white card-shadow">
      <div className="flex items-center justify-between mb-24px p-24px">
        <div>
          <h2 className="text-[18px] font-[600] mb-2px">Statistika</h2>
          <p className="text-[var(--gray60)]">Operatorlarning mijoslar bilan qilgan suhbatlari</p>
        </div>
        <div className="w-[200px]">
          <CSelect handlerValue={() => {}} options={options} id="filter" />
        </div>
      </div>

      <div className="grid grid-cols-2">
        <ul>
          <ListItem classes="pr-24px" />
          <ListItem classes="pr-24px" />
        </ul>
        <ul>
          <ListItem classes="pl-24px" />
          <ListItem classes="pl-24px" />
        </ul>
      </div>
    </div>
  );
};
