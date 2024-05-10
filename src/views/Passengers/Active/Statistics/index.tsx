import {
  UserTagIcon,
  ArrowDown,
  ArrowUp,
} from "../../../../components/UI/IconGenerator/Svg";
import CCard from "../../../../components/CElements/CCard";
import { useQuery } from "react-query";
import passengerService from "../../../../services/passengers";
import { useMemo } from "react";
import { ListSkeleton } from "../../../../components/CElements/CSkeleton/ListSkeleton";

interface Props {
  name: string;
  current_month: number;
  status: number;
  percentage: any;
}

const Statistics = () => {
  const { data, isLoading } = useQuery(
    ["GET_ACTIVE_PASSANGER_WIDGET"],
    () => {
      return passengerService.activePassengerWidget();
    },
    {
      refetchInterval: 4 * 60 * 1000,
    }
  );

  const widgets = useMemo(() => {
    if (!data?.data) return [];

    return data?.data.map((val: any) => {
      return {
        ...val,
        status: val?.current_month - val?.last_month,
        percentage:
          val?.current_month && val?.last_month
            ? (
                ((val?.current_month - val?.last_month) / val.last_month) *
                100
              ).toFixed(2)
            : 0,
      };
    });
  }, [data]);

  if (isLoading) {
    return (
      <div className="mb-5">
        <ListSkeleton count={4} height={103} />
      </div>
    );
  }

  return (
    <div className={`mb-5 grid grid-cols-${widgets.length} gap-x-5`}>
      {widgets?.map(({ name, current_month, status, percentage }: Props) => (
        <CCard style={{ minHeight: 0 }} classes="flex items-center gap-4">
          {name == "Aktiv" ? (
            <div className="bg-[#0BD976]/10 p-[6px] rounded-lg inline-flex">
              <UserTagIcon />
            </div>
          ) : status >= 0 ? (
            <ArrowUp fill={true} />
          ) : (
            <ArrowDown fill={true} />
          )}
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-[var(--black)] font-semibold text-[28px] ">
                {current_month} ta
              </p>
              {name != "Aktiv" && (
                <p
                  className={`${
                    percentage >= 0
                      ? "text-[var(--green)]"
                      : "text-[var(--error)]"
                  }   text-base font-semibold`}
                >
                  {percentage! > 0 ? "+" + percentage : percentage}%
                </p>
              )}
            </div>
            <p className="text-sm text-[var(--gray)] font-normal">{name}</p>
          </div>
        </CCard>
      ))}
    </div>
  );
};

export default Statistics;
