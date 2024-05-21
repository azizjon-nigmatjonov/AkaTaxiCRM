import AddButton from "../../../components/UI/Buttons/AddButton";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../components/UI/Header";
import CTable from "../../../components/CElements/CTable";
import { useNavigate } from "react-router-dom";
import { FetchFunction } from "./Logic";

const breadCrumbsItems = [
  {
    label: "Xabarnomalar",
    link: "/notifications/news_notification",
  },
  {
    label: "Yangiliklar",
  },
];

const headColumns = [
  {
    title: "xabar",
  },
  {
    title: "sana",
  },
];

const NewsNotification = () => {
  const navigate = useNavigate();
  const { bodyColumns } = FetchFunction()

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbsItems} progmatic={true} type="link" />
      </Header>
      <div className="px-6 flex justify-end">
        <div>
          <AddButton
            text="Yangi bildirishnoma"
            onClick={() => navigate("/notifications/new_notification/add_news")}
          />
        </div>
      </div>

      <div className="container">
        <CTable headColumns={headColumns} bodyColumns={bodyColumns} />
      </div>
    </>
  );
};

export default NewsNotification;
