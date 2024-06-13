import { useMemo } from "react";
import { useQuery } from "react-query";
import CCard from "../../../../components/CElements/CCard";
import {
  ArrowUp,
  ArrowDown,
  IncreaseIcon,
  DecreaseIcon,
} from "../../../../components/UI/IconGenerator/Svg";
import statistics from "../../../../services/statistics";
import { ListSkeleton } from "../../../../components/CElements/CSkeleton/ListSkeleton";

interface Props {
  name: string;
  current_month: number;
  last_month: number;
  percentage: number;
}

const AccountStatistics = () => {
  const { data, isLoading } = useQuery(["GET_STATICS_WIDGETS"], () => {
    return statistics.getWidgets();
  });

  const staticsWidgets = useMemo(() => {
    if (!data) return [];
    const staticsWidgets = data?.data;
    
    return staticsWidgets.map(({ name, current_month, last_month }: Props) => ({
      name,
      current_month,
      last_month,
      percentage: last_month ? Math.trunc(((current_month - last_month) / last_month) * 100) : 100,
    }));
  }, [data]);

  if (isLoading) {
    return (
      <div className="container mb-5">
        <ListSkeleton count={3} height={164} />
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-${staticsWidgets.length} gap-x-5 container mb-5`}>
      {staticsWidgets?.map(({ name, current_month, percentage }: Props) => {
        return (
          <CCard style={{ minHeight: 0 }}>
            <p className="text-base font-medium text-[var(--black)] mb-5">
              {name}
            </p>
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <p className="text-[var(--black)] text-3xl font-semibold">
                  {current_month}
                </p>
                <div className="flex items-center">
                  {percentage > 0 ? (
                    <ArrowUp fill={false} />
                  ) : (
                    <ArrowDown fill={false} />
                  )}
                  <p className={` text-sm font-medium`}>
                    <span
                      className={`${
                        percentage > 0
                          ? "text-[var(--darkerGray)]"
                          : "text-[var(--error)]"
                      } mr-2`}
                    >
                      {percentage} %
                    </span>
                    oxirgi oydan
                  </p>
                </div>
              </div>
              <div>{percentage > 0 ? <IncreaseIcon /> : <DecreaseIcon />}</div>
            </div>
          </CCard>
        );
      })}
    </div>
  );
};

export default AccountStatistics;
