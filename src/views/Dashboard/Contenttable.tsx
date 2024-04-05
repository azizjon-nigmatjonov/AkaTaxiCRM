import Tabledirvers from './Tables/Tabledirvers';
import TableDriversVilage from './Tables/TableDriversVilage';
import TablePessengersVilage from './Tables/TablePessengersVilage';
import TablePessengers from './Tables/TablePessengers';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

interface DataListType {
    canceled: number,
    canceled_by_client: number,
    canceled_by_driver: number,
    done: number,
    region_id: number,
    region_name: string,
}



function ContentTable({setCountWeekDriversVilage, setSelectMonthDriversVilage, setYearDriversVilage, yearDriversVilage, setCountDrivers, setSelectMonthDrivers, setYearDrivers, yearDrivers, setCountWeekPessengerVilage, setSelectMonthPessengerVilage, setYearPessengerVilage, yearPessengerVilage, setCountWeek, setSelectMonth, year, setYear, driverTripsDataFromVilage, passengersDataVilage, driverTripsDataFromCity, dataList }: {setCountWeekDriversVilage: any, setSelectMonthDriversVilage: any, setYearDriversVilage: any, yearDriversVilage: string, setCountDrivers: any, setSelectMonthDrivers: any, setYearDrivers: any, yearDrivers: any, setCountWeekPessengerVilage: any, setSelectMonthPessengerVilage: any, setYearPessengerVilage: any, yearPessengerVilage: any, setCountWeek: any, setSelectMonth: any, year: any, setYear: any, dataList: DataListType[], driverTripsDataFromCity: any, passengersDataVilage: any, driverTripsDataFromVilage: any }) {

    return (
        <>
            <div className="px-6 w-full mb-6">
                <h2 className=" text-[30px] mt-6 text-[#101828] font-semibold mb-6">Yo’lovchilar</h2>
                <div className="rounded-[10px] shadow-sm  pt-3">
                    <TablePessengers setYear={setYear} year={year} dataList={dataList} setCountWeek={setCountWeek} setSelectMonth={setSelectMonth} />
                    <TablePessengersVilage setCountWeekPessengerVilage={setCountWeekPessengerVilage} setSelectMonthPessengerVilage={setSelectMonthPessengerVilage} setYearPessengerVilage={setYearPessengerVilage} yearPessengerVilage={yearPessengerVilage} passengersDataVilage={passengersDataVilage} />
                </div>
                <h2 className=" text-[30px] mt-6 text-[#101828] font-semibold mb-6">Haydovchilar</h2>
                <div className="rounded-[10px] shadow-sm  pt-3">
                    <Tabledirvers setCountDrivers={setCountDrivers} setSelectMonthDrivers={setSelectMonthDrivers} setYearDrivers={setYearDrivers} yearDrivers={yearDrivers} driverTripsDataFromCity={driverTripsDataFromCity} />
                    <TableDriversVilage setCountWeekDriversVilage={setCountWeekDriversVilage} setSelectMonthDriversVilage={setSelectMonthDriversVilage} setYearDriversVilage={setYearDriversVilage} yearDriversVilage={yearDriversVilage} driverTripsDataFromVilage={driverTripsDataFromVilage} />
                </div>

            </div>

        </>
    )
}

export default ContentTable;