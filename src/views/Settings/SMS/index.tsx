import { useCallback, useMemo } from "react";
import AddButton from "../../../components/Buttons/AddButton";
import CTabs from "../../../components/CElements/CTab";
import usePageRouter from "../../../hooks/useObjectRouter";
import CTable from "../../../components/CElements/CTable";

const tabList = [
  {
    slug: "push",
    name: "Push xabar",
  },
  {
    slug: "sms",
    name: "Sms xabarnoma",
  },
  {
    slug: "news",
    name: "Yangiliklar",
  },
];

const SMS = () => {
  const { navigateTo, navigateQuery } = usePageRouter();

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
      <div className="flex justify-between">
        <CTabs tabList={tabList} />

        <div>
          <AddButton text="Yangi xabar" onClick={() => navigateTo('/settings/sms/news')} />
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

      {/* <div className="space-y-[18px]">
        <TypeCard List={ListSms} title="Xabar turi" />
        <TypeCard List={ListPerson} title="Kimga yuborish kerak?" />
        <SMSMessage title="Xabar matni" />
      </div>

      <div className="flex justify-end mt-6">
        <div className="inline-block">
          <AddButton iconLeft={false} text="Xabarni yuborish" />
        </div>
      </div> */}
    </>
  );
};
export default SMS;
