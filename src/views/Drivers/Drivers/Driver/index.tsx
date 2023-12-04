import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import SectionHeader from "../../../../components/Sections/Header";
import { useQuery } from "react-query";
import driverService from "../../../../services/drivers";
import CTabs from "../../../../components/CElements/CTab";
import { useGetQueries } from "../../../../hooks/useGetQueries";
import DriverBallance from "./Ballance";
import DriverTrip from "./Trip";
import DriverInfo from "./Info";
import { useMemo } from "react";

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
  const { tab, id } = useGetQueries();

  const { data: driver } = useQuery(
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
        label: "Haydovchilar ro‘yxati ",
        link: "/drivers/main",
      },
      {
        label: driver?.data?.full_name || "Haydovchi",
      },
    ];
  }, [driver]);

  return (
    <>
      <SectionHeader
        extra={
          <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
        }
      />

      <CTabs tabList={tabList} />

      {tab === "ballance" ? (
        <DriverBallance />
      ) : tab === "trip_hostory" ? (
        <DriverTrip />
      ) : (
        <DriverInfo driver={driver?.data} />
      )}
    </>
  );
};

export default Driver;
