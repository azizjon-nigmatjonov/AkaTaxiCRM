import { useMemo } from "react";
import { useQuery } from "react-query";
import operatorService from "../../services/operator";

export const UseOperators = ({ type = "id" }: { type?: string }) => {
  const { data: operatorData } = useQuery(["GET_OPERATORS_LIST"], () => {
    return operatorService.getList();
  });

  const operatorOptions = useMemo(() => {
    return (
      operatorData?.data?.map(
        (item: { name: string; id: number; sip_id: number }) => {
          return {
            label: item.name,
            value: type === "id" ? item.id : item.sip_id,
          };
        }
      ) ?? []
    );
  }, [operatorData]);

  return { operatorOptions };
};
