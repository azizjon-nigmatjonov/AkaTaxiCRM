import { Header } from "../../components/Header"
import Drivers from "./Drivers"
import Passenger from "./Passenger"
import ContentTable from "./Contenttable"
import dashboardService from "../../services/dashboard";
import { useQuery } from "react-query";


function Dashboard() {

    const { data } = useQuery('dashboardWidgets', dashboardService.getWidgets);

    const { data: passengersData } = useQuery('passengersFromTashkent', dashboardService.getPessengers)
    const { data: driverTripsData } = useQuery('driverTrips', dashboardService.getDriverTrips);

    // console.log(data?.data[0]);
    // console.log(passengersData?.data);
    console.log(driverTripsData);



    return (
        <>
            <Header title={'Dashboard'} />
            <div className="flex gap-6 px-6">
                <Passenger data={data?.data[1]} />
                <Drivers data={data?.data[0]} />

            </div>
            <ContentTable dataList={passengersData?.data} />

        </>
    )
}

export default Dashboard
