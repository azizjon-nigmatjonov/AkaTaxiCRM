import { useMemo } from "react";
import { FormatTime } from "../../../../../../utils/formatTime";
import { FormatMoney } from "../../../../../../utils/formatMoney";
import { useQuery } from "react-query";
import driverService from "../../../../../../services/drivers";
import { useParams } from "react-router-dom";
import { getStoredFilters } from "../../../../../../components/UI/Filter/Logic";
import { useTranslation } from "react-i18next";

export const HeaderData = () => {
  const { t } = useTranslation();
  const headColums = useMemo(() => {
    return [
      {
        title: "Summa",
        id: "amount",
        render: (val?: any) => {
          return (
            <p
              className={
                val < 0
                  ? "text-[var(--main)]"
                  : val === 0
                  ? "text-[var(--black)]"
                  : "text-[var(--green)]"
              }
            >
              {val < 0 ? `${val} so'm` : val === 0 ? val : `+${val} so'm`}
            </p>
          );
        },
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
        title: "to'lov turi",
        id: "source",
        render: (val: string) => {
          if (!val) return <>-</>;
          return <div className="capitalize">{t(val)}</div>;
        },
      },
      {
        title: "Kim tarafidan to'ldirildi",
        id: "by_admin",
      },
      {
        title: "Sana",
        id: "created_at",
        render: (val?: any) => val && FormatTime(val),
      },
    ];
  }, []);

  return { headColums };
};
export const FetchFunction = ({ date }: { date: any }) => {
  const { id } = useParams();
  const { filters } = getStoredFilters({});
  const { data, isLoading, refetch } = useQuery(
    ["GET_DRIVERS_BALLANCE", id, filters?.page, date],
    () => {
      const created_at = date?.length > 1 ? date[0] + "," + date[1] : "";
      return driverService.getDriverBallance({
        id,
        page: filters?.page || 1,
        created_at,
      });
    }
  );
  const { data: cardData, refetch: refetchCard } = useQuery(
    ["GET_DRIVERS_BALLANCE_CARD", id, filters?.page],
    () => {
      return driverService.getDriverBallanceCard({
        id,
        page: filters?.page || 1,
      });
    }
  );

  const ballanceData: any = useMemo(() => {
    // if (!data?.data.length) return {};
    const newData = data ?? {};
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
