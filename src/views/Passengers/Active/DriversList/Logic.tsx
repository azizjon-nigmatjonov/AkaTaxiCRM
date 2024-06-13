import { Reasons } from "../../../../constants/reason";
import CSelectColor from "../../../../components/CElements/CSelectColor";
import { useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import reasonService from "../../../../services/reason";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import passengerService from "../../../../services/passengers";
import { useTranslation } from "react-i18next";

export const TableData = (arr: any, refetch: any) => {
  const { t } = useTranslation();
  const { mutate: updateReason } = useMutation({
    mutationFn: (data: any) => {
      return reasonService.postReason(data).then(() => {
        refetch();
      });
    },
  });

  const handleReason = (obj: any) => {
    const params = {
      reason_id: obj.value,
      model_id: obj.model_id,
      model_type: "driver",
    };
    updateReason(params);
  };

  const headColumns = [
    {
      title: "Haydovchilar",
      id: "info",
      render: (val: any) => {
        return (
          <div className="flex space-x-2">
            <img src={val?.image} height={50} width={50} alt="image" />
            <div>
              <h4>{val?.full_name}</h4>
              <p>{val?.phone}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "sabablar",
      id: "ids",
      width: 260,
      render: (ids: any) => {
        if (!ids) return "";
        return (
          <CSelectColor
            options={Reasons?.map((i: any) => {
              return {
                ...i,
                model_id: ids.id,
              };
            })}
            defaultValue={ids.reason_id}
            handleClick={handleReason}
          />
        );
      },
    },
    {
      title: "Status",
      id: "status",
      render: (val: string) => {
        return <>{t(val)}</>;
      },
    },
    {
      title: "",
      id: "actions",
      actions: ["delete"],
    },
  ];

  const bodyColumns = useMemo(() => {
    return arr?.map((item: any) => {
      return {
        ...item,
        ids: {
          id: item.bid_id,
          reason_id: item.reason_id,
        },
        info: {
          image: item.image,
          full_name: item.full_name,
          phone: item.phone,
        },
      };
    });
  }, [arr]);

  return { headColumns, bodyColumns };
};

export const FetchFunction = () => {
  const { suggestion } = useGetQueries();
  const {
    data: passengerData,
    refetch,
    isLoading,
  } = useQuery(
    ["GET_ACTIVE_PASSENGER_DATA_DEFAULT", suggestion],
    () => {
      return passengerService.getActivePassenger(suggestion);
    },
    {
      enabled: !!suggestion,
    }
  );

  return { passengerData, refetch, isLoading };
};
