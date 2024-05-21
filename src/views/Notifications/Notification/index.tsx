import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import AddButton from "../../../components/UI/Buttons/AddButton";
import { useNavigate } from "react-router-dom";
import CTable from "../../../components/CElements/CTable";
import { FetchFunction, TableData } from "./Logic";
import CTabs from "../../../components/CElements/CTab";

const breadCrumbItems = [
  {
    label: "Xabarnomalar",
    link: "/notifications/notification",
  },
  {
    label: "Bildirishnomalar",
  },
];

const tabList = [
  {
    slug: "passenger",
    name: "Yo’lovchi",
  },
  {
    slug: "driver",
    name: "Haydovchi",
  },
];

const Notification = () => {
  const navigate = useNavigate();
  const { bodyColumns, isLoading } = FetchFunction();
  const { headColumns } = TableData();

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbItems} type="link" />
      </Header>

      <div className="px-5 flex justify-between">
        <CTabs tabList={tabList} />
        <div>
          <AddButton
            text="Yangi bildirishnoma"
            onClick={() =>
              navigate("/notifications/notification/add_notification")
            }
          />
        </div>
      </div>

      <section className="px-6">
        <CTable
          headColumns={headColumns}
          bodyColumns={bodyColumns}
          isLoading={isLoading}
        />
      </section>
    </>
  );
};

export default Notification;
