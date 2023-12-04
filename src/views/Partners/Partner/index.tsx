import { useQuery } from "react-query";
import InfoCard from "../../../components/InfoCard";
import partnerService from "../../../services/partners";
import { useGetQueries } from "../../../hooks/useGetQueries";
import SectionHeader from "../../../components/Sections/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useMemo } from "react";

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
      <SectionHeader>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </SectionHeader>
      <div className="grid grid-cols-3 gap-2">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </div>
    </>
  );
};

export default Partner;
