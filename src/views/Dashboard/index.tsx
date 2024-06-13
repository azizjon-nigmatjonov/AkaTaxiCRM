import { Header } from "../../components/UI/Header";
import Drivers from "./Drivers";
import Passenger from "./Passenger";
import ContentTable from "./Contenttable";
import dashboardService from "../../services/dashboard";
import { useQuery } from "react-query";
import { useState } from "react";
import CBreadcrumbs from "../../components/CElements/CBreadcrumbs";
import { breadCrumbsItems } from "./Logic";
import { FindoutStatistics } from "./FindoutStatistics";
import StatusStatics from "./StatusStatistics";

// import { useHistory, useLocation } from "react-router-dom";

function Dashboard() {
  const [year, setYear] = useState<string>("2024");
  const [selectMonth, setSelectMonth] = useState(null);
  const [countWeek, setCountWeek] = useState(null);

  const [yearPessengerVilage, setYearPessengerVilage] =
    useState<string>("2024");
  const [selectMonthPessengerVilage, setSelectMonthPessengerVilage] =
    useState(null);
  const [countWeekPessengerVilage, setCountWeekPessengerVilage] =
    useState(null);

  const [yearDrivers, setYearDrivers] = useState<string>("2023");
  const [selectMonthDrivers, setSelectMonthDrivers] = useState(null);
  const [countWeekDrivers, setCountDrivers] = useState(null);

  const [yearDriversVilage, setYearDriversVilage] = useState<string>("2023");
  const [selectMonthDriversVilage, setSelectMonthDriversVilage] =
    useState(null);
  const [countWeekDriversVilage, setCountWeekDriversVilage] = useState(null);

  const { data, isLoading } = useQuery("dashboardWidgets", dashboardService.getWidgets);
  const { data: passengersData } = useQuery(
    ["passengersFromTashkent", year, selectMonth, countWeek],
    () => dashboardService.getPessengersFromCity(year, selectMonth, countWeek),
    { enabled: !!year || !!selectMonth || !!countWeek, cacheTime: 0 }
  );

  const { data: passengersDataVilage, isLoading: isLoadingTable } = useQuery(
    [
      "passengersFromVilage",
      yearPessengerVilage,
      selectMonthPessengerVilage,
      countWeekPessengerVilage,
    ],
    () =>
      dashboardService.getPessengersFromVilage(
        yearPessengerVilage,
        selectMonthPessengerVilage,
        countWeekPessengerVilage
      ),
    {
      enabled:
        !!yearPessengerVilage ||
        !!selectMonthPessengerVilage ||
        !!countWeekPessengerVilage,
    }
  );

  const { data: driverTripsDataFromCity } = useQuery(
    ["driverTrips", yearDrivers, selectMonthDrivers, countWeekDrivers],
    () =>
      dashboardService.getDriverTripsFromCity(
        yearDrivers,
        selectMonthDrivers,
        countWeekDrivers
      ),
    { enabled: !!yearDrivers || !!selectMonthDrivers || !!countWeekDrivers }
  );

  const { data: driverTripsDataFromVilage } = useQuery(
    [
      "driverTrips",
      yearDriversVilage,
      selectMonthDriversVilage,
      countWeekDriversVilage,
    ],
    () =>
      dashboardService.getDriverTripsFromVilage(
        yearDriversVilage,
        selectMonthDriversVilage,
        countWeekDriversVilage
      )
  );

  return (
    <>
      <Header >
        <CBreadcrumbs items={breadCrumbsItems} />
      </Header>
      <div className="flex gap-x-5 px-5">
        <Passenger data={data?.data[1]} isLoading={isLoading} />
        <Drivers data={data?.data[0]} isLoading={isLoading} />
      </div>

      <div className="mt-5 space-y-[20px]">
        <FindoutStatistics />
        <StatusStatics />
      </div>

      <ContentTable
        setCountWeekDriversVilage={setCountWeekDriversVilage}
        setSelectMonthDriversVilage={setSelectMonthDriversVilage}
        setYearDriversVilage={setYearDriversVilage}
        yearDriversVilage={yearDriversVilage}
        setCountDrivers={setCountDrivers}
        setSelectMonthDrivers={setSelectMonthDrivers}
        setYearDrivers={setYearDrivers}
        yearDrivers={yearDrivers}
        setCountWeekPessengerVilage={setCountWeekPessengerVilage}
        setSelectMonthPessengerVilage={setSelectMonthPessengerVilage}
        setYearPessengerVilage={setYearPessengerVilage}
        yearPessengerVilage={yearPessengerVilage}
        setCountWeek={setCountWeek}
        setSelectMonth={setSelectMonth}
        year={year}
        isLoading={isLoadingTable}
        setYear={setYear}
        driverTripsDataFromVilage={driverTripsDataFromVilage}
        passengersDataVilage={passengersDataVilage}
        driverTripsDataFromCity={driverTripsDataFromCity}
        dataList={passengersData?.data}
      />
    </>
  );
}

export default Dashboard;
