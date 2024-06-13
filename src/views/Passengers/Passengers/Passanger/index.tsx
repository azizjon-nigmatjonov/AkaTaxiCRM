import { useMemo } from "react";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import { useQuery } from "react-query";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import passengerService from "../../../../services/passengers";
import CTabs from "../../../../components/CElements/CTab";
import cls from "./style.module.scss";
import { useParams } from "react-router-dom";
import { tabList, TabActions } from "./Logic";
const Passanger = () => {
  const { tab } = useGetQueries();
  const { id } = useParams();
  const { GetCurrentPage } = TabActions();

  const { data: passenger } = useQuery(["GET_PASSENGER", id], () => {
    return passengerService.getElement(id);
  });

  const breadCrubmsItems = useMemo(() => {
    return [
      {
        label: "Yo'lovchilar",
        link: "/passengers/passenger-list",
      },
      {
        label: "Ro'yxat",
        link: "/passengers/passenger-list",
      },
      {
        label: passenger?.data?.full_name || "Yo'lovchi",
      },
    ];
  }, [passenger]);

  return (
    <div className="relative pb-10">
      <Header>
        <CBreadcrumbs items={breadCrubmsItems} progmatic={true} type="link" />
      </Header>

      <div className={`px-5`}>
        <div className={cls.box}>
          <CTabs tabList={tabList} />
        </div>
        {GetCurrentPage(tab)}
      </div>
    </div>
  );
};

export default Passanger;
