import Tabledirvers from "./Tables/Tabledirvers";
import TableDriversVilage from "./Tables/TableDriversVilage";
import TablePessengersVilage from "./Tables/TablePessengersVilage";
import TablePessengers from "./Tables/TablePessengers";
import { CPeriodPicker } from "../../components/CElements/CPeriodPicker";

interface DataListType {
  canceled: number;
  canceled_by_client: number;
  canceled_by_driver: number;
  done: number;
  region_id: number;
  region_name: string;
  isLoading: boolean;
}

function ContentTable({
  handleDate,
  driverTripsDataFromVilage,
  passengersDataVilage,
  driverTripsDataFromCity,
  dataList,
}: {
  handleDate: (val: any, type: string) => void;
  dataList: DataListType[];
  driverTripsDataFromCity: any;
  passengersDataVilage: any;
  driverTripsDataFromVilage: any;
  isLoading: boolean;
}) {
  return (
    <>
      <div className="px-5 w-full mb-6">
        <div className="flex items-center justify-between mt-5">
          <h2 className=" text-[30px] my-5 text-[#101828] font-semibold">
            Yo’lovchilar qatnovi
          </h2>
          <div className="w-[240px]">
            <CPeriodPicker
              handleValue={(val: any) => handleDate(val, "passenger")}
              placeholder="Vaqt tanlang"
            />
          </div>
        </div>
        <div className="rounded-[10px] shadow-sm">
          <TablePessengers dataList={dataList} />

          <div className="w-[240px] ml-auto mt-5">
            <CPeriodPicker
              placeholder="Vaqtni tanlang"
              handleValue={(val: any) => handleDate(val, "passenger_to")}
            />
          </div>
          <TablePessengersVilage passengersDataVilage={passengersDataVilage} />
        </div>

        <div className="flex items-center justify-between">
          <h2 className=" text-[30px] mt-6 text-[#101828] font-semibold mb-6">
            Haydovchilar
          </h2>
          <div className="w-[240px]">
            <CPeriodPicker
              handleValue={(val: any) => handleDate(val, "driver")}
              placeholder="Vaqt tanlang"
            />
          </div>
        </div>
        <Tabledirvers driverTripsDataFromCity={driverTripsDataFromCity} />

        <div className="w-[240px] ml-auto mt-5">
          <CPeriodPicker
            handleValue={(val: any) => handleDate(val, "driver_to")}
            placeholder="Vaqt tanlang"
          />
        </div>
        <div className="rounded-[10px] shadow-sm">
          <TableDriversVilage
            driverTripsDataFromVilage={driverTripsDataFromVilage}
          />
        </div>
      </div>
    </>
  );
}

export default ContentTable;
