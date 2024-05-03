// import SearchHeader from "../../../components/Header/SearchHeader";
import AccountStatistics from "./AccountStatistics";
import Selection from "./SelectionData";
import StatisticsGender from "./GenderRegions";
import { Header } from "../../../components/UI/Header";
import CBreadcrumbs from "../../../components/CElements/CBreadcrumbs";
import { useMemo } from "react";


const Statistics = () => {

  const breadCrubmsItems = useMemo(() => {
    return [
      {
        label: "Yo'lovchilar",
        link: '/passengers/main'
      },
      {
        label: 'Statistika',
        // link: '/statistics'
      }
    ]
  }, [])

  return (
    <section className="relative">
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrubmsItems} progmatic={true} type="link"/>
      </Header>
      <AccountStatistics />
      <Selection />
      <StatisticsGender />
    </section>
  );
};

export default Statistics;