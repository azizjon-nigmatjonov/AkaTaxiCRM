import { UserIconOutline } from "../../../components/UI/IconGenerator/Svg";
import { ClockIcon } from "@mui/x-date-pickers-pro";
import { FormatTime } from "../../../utils/formatTime";
import { OneSkeleton } from "../../../components/CElements/CSkeleton/OneSkeleton";

const ListItem = ({
  classes,
  element = {},
}: {
  classes?: string;
  element: any;
}) => {
  return (
    <li className={`border-t py-16px px-24px ${classes}`}>
      <div className="flex justify-between items-center">
        <span>{element.label}</span>
        <div className="flex items-center space-x-1">
          <div className="bg-[var(--primary50)] flex items-center space-x-1 p-6px rounded-full">
            <UserIconOutline />
            <span>{element.count} ta</span>
          </div>
          <div className="bg-[var(--gray50)] flex items-center space-x-1 p-6px rounded-full">
            <ClockIcon />
            <span>{FormatTime(element.duration, "minutes")}</span>
          </div>
        </div>
      </div>

      <div className="bg-[var(--gray50)] w-full h-[8px] rounded-[4px] mt-12px">
        <div className="bg-[var(--main)] w-[30%] h-[8px] rounded-[4px] mt-12px"></div>
      </div>
    </li>
  );
};

export const CallCenterStatistics = ({
  statisticsList = [],
  isLoading = false,
}: {
  isLoading: boolean;
  statisticsList: any;
}) => {
  return (
    <div className="border border-[var(--gray20)] rounded-[12px] bg-white card-shadow">
      <div className="mb-24px p-24px">
        <div>
          <h2 className="text-[18px] font-[600] mb-2px">Statistika</h2>
          <p className="text-[var(--gray60)]">
            Operatorlarning mijozlar bilan qilgan suhbatlari
          </p>
        </div>
      </div>

      {isLoading ? (
        <OneSkeleton height={200} />
      ) : statisticsList?.length ? (
        <div className="grid grid-cols-2">
          <ul>
            {statisticsList
              .slice(0, Math.round(statisticsList.length / 2))
              .map((item: { value: number }) => (
                <ListItem key={item.value} element={item} classes="pr-24px" />
              ))}
          </ul>
          <ul>
            {statisticsList
              .slice(Math.round(statisticsList.length / 2))
              .map((item: { value: number }) => (
                <ListItem key={item.value} element={item} classes="pl-24px" />
              ))}
          </ul>
        </div>
      ) : (
        <div className="flex justify-center">
          <img width={200} src="/images/no-data.png" alt="no data" />
        </div>
      )}
    </div>
  );
};
