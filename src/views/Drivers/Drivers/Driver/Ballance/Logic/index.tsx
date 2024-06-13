import { useMemo } from "react";
import { FormatTime } from "../../../../../../utils/formatTime";
import { FormatMoney } from "../../../../../../utils/formatMoney";
import { useQuery } from "react-query";
import driverService from "../../../../../../services/drivers";
import { useParams } from "react-router-dom";
import { getStoredFilters } from "../../../../../../components/UI/Filter/Logic";

export const headColums = [
  {
    title: "Summa",
    id: "amount",
    render: (val?: any, item?: any) =>
      val && (
        <p
          className={
            item.type == "expense"
              ? "text-[var(--main)]"
              : "text-[var(--green)]"
          }
        >
          {item.type == "expense" ? `${val} so'm` : `+${val} so'm`}
        </p>
      ),
  },
  {
    title: "tranzaksiya turi",
    id: "type",
    render: (val?: any) =>
      val && (
        <p>{val == "expense" ? "Komissiya olindi" : "Hisob to’ldirildi"}</p>
      ),
  },
  {
    title: "Sana",
    id: "created_at",
    render: (val?: any) => val && FormatTime(val),
  },
];

export const FetchFunction = ({ date }: { date: any }) => {
  const { id } = useParams();
  const { filters } = getStoredFilters({});
  const { data, isLoading, refetch } = useQuery(
    ["GET_DRIVERS_BALLANCE", id, filters?.page],
    () => {
      return driverService.getDriverBallance({ id, page: filters?.page || 1 });
    }
  );
  const { data: cardData, refetch: refetchCard } = useQuery(
    ["GET_DRIVERS_BALLANCE_CARD", id, filters?.page, date],
    () => {
      const created_at = date?.length > 1 ? date[0] + "," + date[1] : ""
      
      return driverService.getDriverBallanceCard({ id, page: filters?.page || 1, created_at });
    }
  );
  
  const ballanceData: any = useMemo(() => {
    // if (!data?.data.length) return {};
    const newData = data ?? {}
    return {
      ...newData,
      generalAmount: [
        {
          id: "balance",
          name: "Haydovchi balansi",
          amount: FormatMoney(+cardData?.data?.balance || 0),
        },
        {
          id: "tax",
          name: "Komissiya summasi",
          amount: FormatMoney(+cardData?.data?.commission || 0),
        },
        {
          id: "salary",
          name: "Ishlab topilgan summa",
          amount: FormatMoney(+cardData?.data?.earnings || 0),
        },
      ],
    };
  }, [data, cardData]);
  
  return { data, isLoading, refetch, ballanceData, refetchCard };
};
