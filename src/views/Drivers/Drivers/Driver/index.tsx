import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import CTabs from "../../../../components/CElements/CTab";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import DriverBallance from "./Ballance";
import DriverTrip from "./Trip";
import DriverInfo from "./Info";
import { useMemo, useState } from "react";
import { Header } from "../../../../components/UI/Header";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { useParams } from "react-router-dom";
import { PostBallance } from "./Logic";

const tabList = [
  {
    slug: "",
    name: "Ma’lumotlar",
  },
  {
    slug: "trip_hostory",
    name: "Triplar tarixi",
  },
  {
    slug: "ballance",
    name: "Moliyaviy ma’lumotlar",
  },
];

const Driver = () => {
  const { tab } = useGetQueries();
  const { id } = useParams();
  const { getQueries } = usePageRouter();
  const [date, setDate] = useState([]);
  const { BalanceFeatures } = PostBallance({ setDate });
  const query = getQueries();

  const { data: driver, refetch } = useQuery(
    ["GET_DRIVER", id],
    () => {
      return driverService.getElement(id);
    },
    {
      enabled: !!id,
    }
  );

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: "Haydovchi",
        link: "/drivers/main",
      },
      {
        label: "Ro‘yxat",
        link: "/drivers/main",
      },
      {
        label: driver?.data?.full_name || "Haydovchi",
      },
    ];
  }, [driver]);
  
  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>

      <div className="p-5">
        <div className="flex justify-between">
          <CTabs tabList={tabList} />
          <div>{query.tab == "ballance" && BalanceFeatures()}</div>
        </div>

        {tab === "ballance" ? (
          <DriverBallance date={date} />
        ) : tab === "trip_hostory" ? (
          <DriverTrip />
        ) : (
          <DriverInfo refetch={refetch} driver={driver?.data} />
        )}
      </div>
    </>
  );
};

export default Driver;
