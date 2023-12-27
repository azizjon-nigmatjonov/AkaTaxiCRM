import { useQuery } from "react-query";
import InfoCard from "../../../components/InfoCard";
import partnerService from "../../../services/partners";
import { useGetQueries } from "../../../hooks/useGetQueries";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useMemo } from "react";
import { Header } from "../../../components/Header";

const Partner = () => {
  const { id } = useGetQueries();
  const { data: partnerData } = useQuery(
    ["GET_PARTNER"],
    () => {
      return partnerService.getElement(id);
    },
    {
      enabled: !!id,
    }
  );

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: "Hamkorlar ro‘yxati",
        link: -1,
      },
      {
        label: partnerData?.data?.name || "Hamkor",
      },
    ];
  }, [partnerData]);

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>
      <div className="grid grid-cols-3 gap-2 px-6">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </>
  );
};

export default Partner;
