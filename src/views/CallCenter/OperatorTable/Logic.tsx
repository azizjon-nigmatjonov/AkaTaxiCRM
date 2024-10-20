import { useGetQueries } from "../../../hooks/useGetQueries";
import { AudioModal } from "../../../components/UI/CallModals/AudioModal";
import { NoteModal } from "../../../components/UI/CallModals/NoteModal";
// import CSelectColor from "../../../components/CElements/CSelectColor";
import { useForm } from "react-hook-form";
import callcenterService from "../../../services/callcenter";
import { useQuery } from "react-query";
import { ConvertTimeStamp } from "../../../utils/getDate";
import { UseOperators } from "../../../hooks/useOperators";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export const TableActions = () => {
  const { t } = useTranslation();
  // const options = [
  //   { value: "salom", label: "salom" },
  //   { value: "hayr", label: "hayr" },
  //   { value: "salom", label: "salom" },
  // ];
  const headColumns = [
    {
      title: "Boshlanish vaqti",
      id: "start_stamp",
      render: (val: number) => {
        return <>{ConvertTimeStamp(val)}</>;
      },
    },
    {
      title: "Tugash vaqti",
      id: "end_stamp",
      render: (val: number) => {
        return <>{ConvertTimeStamp(val)}</>;
      },
    },
    {
      title: "kim dan",
      id: "destination_number",
    },
    {
      title: "kim ga",
      id: "caller_id_name",
    },
    {
      title: "status",
      id: "hangup_cause",
    },
    {
      title: "Qo'ng'iroq",
      id: "accountcode",
      render: (val: string) => {
        return <div>{t(val)}</div>;
      },
    },
    // {
    //   title: "lead - sabablari",
    //   id: "lead",
    //   render: (val: any) => val && <CSelectColor options={options} />,
    // },
    // {
    //   title: "",
    //   id: "id",
    //   render: (id: any) => {
    //     return id ? (
    //       <div className="space-x-4">
    //         {/* <button
    //           onClick={() =>
    //             navigateQuery({ modal: "call_audio", user_id: id })
    //           }
    //         >
    //           <PlayIcon />
    //         </button>
    //         <button>
    //           <DownloadIcon />
    //         </button>
    //         <button
    //           onClick={() => navigateQuery({ modal: "note", user_id: id })}
    //         >
    //           <ListIcon />
    //         </button> */}
    //         <button
    //           onClick={() =>
    //             navigateTo(`/passengers/passenger-list/748?tab=calls`)
    //           }
    //         >
    //           <EyeIcon fill="var(--black)" />
    //         </button>
    //       </div>
    //     ) : (
    //       ""
    //     );
    //   },
    // },
  ];

  return { headColumns };
};

export const TableButtonActions = () => {
  const query = useGetQueries();
  const { control } = useForm();
  switch (query.modal) {
    case "call_audio":
      return <AudioModal />;
    case "note":
      return <NoteModal control={control} />;
    default:
      return "";
  }
};

export const FetchFunctions = ({
  filterParams,
}: {
  filterParams: { sip_id: undefined | number };
}) => {
  const { operatorOptions } = UseOperators({ type: "sip_id" });
  const { data: callCenterData, isLoading } = useQuery(
    ["GET_CALL_CENTER_TABLE_LIST", filterParams],
    () => {
      return callcenterService.getCallcenterList(filterParams);
    }
  );

  const PreapreData = (list: any, newList?: any) => {
    const data: any = {};
    const statusList: any = {
      inbound: 0,
      outbound: 0,
      local: 0,
      contacted: 0,
      not_contacted: 0,
      not_answered: 0,
      missed: 0,
    };

    list?.forEach((element: any) => {
      const cKey = element.caller_id_number;
      if (cKey in data) {
        data[cKey] = {
          ...data[cKey],
          count: data[cKey].count + 1,
          duration: data[cKey].duration + element.duration,
        };
      } else {
        data[cKey] = {
          count: 1,
          duration: element.duration,
        };
      }

      if (element.accountcode in statusList) {
        statusList[element.accountcode] += 1;
      }
    });

    const arr: any = [];

    if (!newList?.length) {
      return statusList;
    }

    newList.forEach((item: { value: number }) => {
      const cKey = item.value;

      if (cKey in data) {
        arr.push({
          ...item,
          ...data[cKey],
        });
      }
    });

    return arr;
  };

  const CardData = useMemo(() => {
    if (!callCenterData?.data?.length) return {};
    return PreapreData(callCenterData?.data ?? []);
  }, [callCenterData]);

  const StatisticsData = useMemo(() => {
    if (!callCenterData?.data?.length && !operatorOptions?.length) return [];

    return PreapreData(callCenterData?.data ?? [], [...operatorOptions]);
  }, [callCenterData, operatorOptions]);

  return {
    bodyData: callCenterData?.data ?? [],
    isLoading,
    operatorOptions,
    StatisticsData,
    CardData,
  };
};
