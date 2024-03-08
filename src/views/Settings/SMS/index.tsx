import { useCallback, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import CTabs from "../../../components/CElements/CTab";
import usePageRouter from "../../../hooks/useObjectRouter";
import CTable from "../../../components/CElements/CTable";
import { Header } from "../../../components/Header";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { useQuery } from "react-query";
import smsService from "../../../services/sms";
import TypeCard from "./SMSType";
import SMSMessage from "./Message";
import { FormatTime } from "../../../utils/formatTime";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";

const tabList = [
  {
    slug: "firebase",
    name: "Push xabar",
  },
  {
    slug: "sms",
    name: "Sms xabarnoma",
  },
  {
    slug: 'sms_result',
    name: 'Sms hisobotlar'
  }
  // {
  //   slug: "news",
  //   name: "Yangiliklar",
  // },
];



const SMS = () => {
  const { tab, currentPage } = useGetQueries();
  const { navigateTo, navigateQuery } = usePageRouter();

  // const { data: sms } = useQuery(["GET_SMS_LIST", tab], () => {
  //   return smsService.getList(tab || "sms");
  // });


  const { data: smsReports } = useQuery(['GET_SMS_REPORTS', tab, currentPage], () => {
    return smsService.getReports({ page: currentPage, perPage: 10 });
  })


  const bodyColumns: any = useMemo(() => {
    if (!smsReports?.data) return []
    return smsReports
  }, [smsReports]);


  const headColumns = useMemo(() => {
    return [
      {
        title: "Kimga",
        id: "phone",
        render: (val: any) => {
          return <p>+{val}</p>
        }
      },
      {
        title: "Xabar",
        id: "text",
      },
      {
        title: "Status",
        id: "status",
        render: (val?: any) => {
          return <p className={`${val == 'DELIVERED' ? 'text-green-500' : 'text-red-500'}`}>{val == 'DELIVERED' ? 'Yuborildi' : 'Yuborilmadi'}</p>
        }
      },
      {
        title: "sana",
        id: "date",
        render: (val?: any) => {
          return <>{FormatTime(val, 'time')}</>;
        },
      },
    ];
  }, []);

  const handleActions = useCallback((status: string, element: any) => {
    if (status === "learn_more") {
      navigateTo(`/drivers/driver/${element.id}`);
    }

    if (status === "edit") navigateQuery({ id: element.id });

    if (status === "delete") {
    }
  }, []);

  const handleRowClick = (item: any) => {
    navigateTo(`/drivers/driver/${item.id}`);
  };

  const breadCrumbs = useMemo(() => {
    return [
      { label: "Sozlamalar" },
      { label: "SMS xabarnoma", link: "settings/sms" }
    ]
  }, [])

  return (
    <>
      <Header sticky={true} >
        <CBreadcrumbs items={breadCrumbs} progmatic={true} />
      </Header>
      <div className="px-6">
        <div className="flex justify-between">
          <CTabs tabList={tabList} />

          <div>
            <AddButton
              text="Yangi xabar"
              onClick={() =>
                navigateTo(`/settings/sms/create/${tab || "sms"}`)
              }
            />
          </div>
        </div>

        {tab == 'firebase' ? <TypeCard title='Firebase' /> : tab == 'sms' ? <SMSMessage title='SMS' /> : <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns?.data}
          count={bodyColumns?.meta?.totalCount}
          handleActions={handleActions}
          handleRowClick={handleRowClick}
          isLoading={false}
          currentPage={currentPage}
        />}

      </div>
    </>
  );
};
export default SMS;
