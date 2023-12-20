import { useCallback, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import CTabs from "../../../components/CElements/CTab";
import usePageRouter from "../../../hooks/useObjectRouter";
import CTable from "../../../components/CElements/CTable";
import { Header } from "../../../components/Header";
import { useGetQueries } from "../../../hooks/useGetQueries";
import { useQuery } from "react-query";
import smsService from "../../../services/sms";

const tabList = [
  {
    slug: "sms",
    name: "Sms xabarnoma",
  },
  {
    slug: "firebase",
    name: "Push xabar",
  },
  // {
  //   slug: "news",
  //   name: "Yangiliklar",
  // },
];

const SMS = () => {
  const { tab } = useGetQueries();
  const { navigateTo, navigateQuery } = usePageRouter();

  const { data: sms } = useQuery(["GET_SMS_LIST", tab], () => {
    return smsService.getList(tab || "sms");
  });
  console.log("sms", sms);

  const headColumns = useMemo(() => {
    return [
      {
        title: "Kimga",
        id: "partners_name",
      },
      {
        title: "Xabar",
        id: "login",
      },
      {
        title: "sana",
        id: "full_name",
      },
      {
        title: "",
        id: "actions",
        permission: ["learn_more", "edit", "delete"],
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

  return (
    <>
      <Header title="Header"></Header>
      <div className="px-6">
        <div className="flex justify-between">
          <CTabs tabList={tabList} />

          <div>
            <AddButton
              text="Yangi xabar"
              onClick={() =>
                navigateTo(`/settings/sms/create/${tab || "push"}`)
              }
            />
          </div>
        </div>

        <CTable
          headColumns={headColumns}
          bodyColumns={[]}
          count={1}
          handleActions={handleActions}
          handleRowClick={handleRowClick}
          isLoading={false}
          currentPage={1}
        />
      </div>
    </>
  );
};
export default SMS;
