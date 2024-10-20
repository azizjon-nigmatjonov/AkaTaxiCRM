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

function Dashboard() {
  const [passengerDate, setPassengerDate] = useState([]);
  const [passengerToData, setPassengerToData] = useState([]);
  const [driverFromDate, setDriverFromDate] = useState([]);
  const [driverToDate, setDriverToDate] = useState([]);

  const { data, isLoading } = useQuery(
    "dashboardWidgets",
    dashboardService.getWidgets
  );

  const { data: passengersData } = useQuery(
    ["passengersFromTashkent", passengerDate],
    () =>
      dashboardService.getPessengersFromCity({
        date: passengerDate?.length ? passengerDate.join(",") : undefined,
        from_tashkent: 1,
      })
  );

  const { data: passengersDataVilage, isLoading: isLoadingTable } = useQuery(
    ["passengersFromVilage"],
    () =>
      dashboardService.getPessengersFromVilage({
        date: passengerToData?.length ? passengerToData.join(",") : undefined,
        from_tashkent: 0,
      })
  );

  const { data: driverTripsDataFromCity } = useQuery(["driverTrips"], () =>
    dashboardService.getDriverTripsFromCity({
      from_tashkent: 1,
      date: driverFromDate?.length ? driverFromDate.join(",") : undefined,
    })
  );

  const { data: driverTripsDataFromVilage } = useQuery(["driverTrips"], () =>
    dashboardService.getDriverTripsFromVilage({
      from_tashkent: 0,
      date: driverToDate?.length ? driverToDate.join(",") : undefined,
    })
  );

  const handleDate = (date: any, type: string) => {
    if (type === "passenger") {
      setPassengerDate(date);
    }
    if (type === "passenger_to") {
      setPassengerToData(date);
    }

    if (type === "driver") {
      setDriverFromDate(date);
    }
    if (type === "driver_to") {
      setDriverToDate(date);
    }
  };

  return (
    <>
      <Header>
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
        isLoading={isLoadingTable}
        driverTripsDataFromVilage={driverTripsDataFromVilage}
        passengersDataVilage={passengersDataVilage}
        driverTripsDataFromCity={driverTripsDataFromCity}
        dataList={passengersData?.data}
        handleDate={handleDate}
      />
    </>
  );
}

export default Dashboard;
