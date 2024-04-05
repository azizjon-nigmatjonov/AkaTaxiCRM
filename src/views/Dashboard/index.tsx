import { Header } from "../../components/Header"
import Drivers from "./Drivers"
import Passenger from "./Passenger"
import ContentTable from "./Contenttable"
import dashboardService from "../../services/dashboard";
import { useQuery } from "react-query";
import { useState } from "react";


// import { useHistory, useLocation } from "react-router-dom";

function Dashboard() {


    const [year, setYear] = useState<string>('2023')
    const [selectMonth, setSelectMonth] = useState(null);
    const [countWeek, setCountWeek] = useState(null);


    const [yearPessengerVilage, setYearPessengerVilage] = useState<string>('2024');
    const [selectMonthPessengerVilage, setSelectMonthPessengerVilage] = useState(null);
    const [countWeekPessengerVilage, setCountWeekPessengerVilage] = useState(null);

    // navigateQuery({id: '2'})

    const [yearDrivers, setYearDrivers] = useState<string>('2023');
    const [selectMonthDrivers, setSelectMonthDrivers] = useState(null);
    const [countWeekDrivers, setCountDrivers] = useState(null);



    const [yearDriversVilage, setYearDriversVilage] = useState<string>('2023');
    const [selectMonthDriversVilage, setSelectMonthDriversVilage] = useState(null);
    const [countWeekDriversVilage, setCountWeekDriversVilage] = useState(null);


    // console.log(yearDriversVilage);




    const { data } = useQuery('dashboardWidgets', dashboardService.getWidgets);
    const { data: passengersData } = useQuery(['passengersFromTashkent', year, selectMonth, countWeek],
        () => dashboardService.getPessengersFromCity(year, selectMonth, countWeek),
        { enabled: !!year || !!selectMonth || !!countWeek, cacheTime: 0 }
    );


    const { data: passengersDataVilage } = useQuery(['passengersFromVilage', yearPessengerVilage, selectMonthPessengerVilage, countWeekPessengerVilage],
        () => dashboardService.getPessengersFromVilage(yearPessengerVilage, selectMonthPessengerVilage, countWeekPessengerVilage), { enabled: !!yearPessengerVilage || !!selectMonthPessengerVilage || !!countWeekPessengerVilage })




    const { data: driverTripsDataFromCity } = useQuery(['driverTrips', yearDrivers, selectMonthDrivers, countWeekDrivers], () => dashboardService.getDriverTripsFromCity(yearDrivers, selectMonthDrivers, countWeekDrivers), { enabled: !!yearDrivers || !!selectMonthDrivers || !!countWeekDrivers });





    const { data: driverTripsDataFromVilage } = useQuery(['driverTrips', yearDriversVilage, selectMonthDriversVilage, countWeekDriversVilage], () => dashboardService.getDriverTripsFromVilage(yearDriversVilage, selectMonthDriversVilage, countWeekDriversVilage));



    // console.log(data?.data[0]);
    // console.log(passengersData?.data);
    // console.log(data);
    // console.log(passengersDataVilage);




    return (
        <>
            <Header title={'Dashboard'} />
            <div className="flex gap-6 px-6">
                <Passenger data={data?.data[1]} />
                <Drivers data={data?.data[0]} />
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
                setCountWeekPessengerVilage={setCountWeekPessengerVilage} setSelectMonthPessengerVilage={setSelectMonthPessengerVilage} setYearPessengerVilage={setYearPessengerVilage} yearPessengerVilage={yearPessengerVilage} setCountWeek={setCountWeek} setSelectMonth={setSelectMonth} year={year} setYear={setYear} driverTripsDataFromVilage={driverTripsDataFromVilage} passengersDataVilage={passengersDataVilage} driverTripsDataFromCity={driverTripsDataFromCity} dataList={passengersData?.data} />

        </>
    )
}

export default Dashboard
