import cls from "./style.module.scss";
import useDebounce from "../../../../../hooks/useDebounce";
import { useGetQueries } from "../../../../../hooks/useGetQueries";
import { useSelector } from "react-redux";
import { useMemo } from "react";
const PriceTable = ({
  locations = {},
  edit = false,
  updateCell = () => { },
}: {
  locations?: any;
  edit: boolean;
  updateCell?: (val: string, val2: any, val3: any, val4: any) => void;
}) => {
  const { start, end } = useGetQueries();
  const regions = useSelector((state: any) => state.regions.regions);



  const updateElement = useDebounce((value: any) => {

    updateCell(value.status, value.value, value.column, value.row);
  }, 0);

  const currentRegions = useMemo(() => {
    return {
      start: regions?.find((i: any) => i.id == start),
      end: regions?.find((i: any) => i.id == end),
    };
  }, [regions, start, end]);






  return (
    <div
      className={`mt-3 bg-white border border-[var(--lightGray)] rounded-[18px] max-h-[540px] overflow-scroll ${cls.table}`}
    >
      <div className={cls.body}>
        <div className="border-r-2 border-[var(--lineGray)]">
          <div
            className={`whitespace-nowrap h-[48px] flex items-center px-[130px] relative ${cls.cell}`}
          >
            <div className="bg-[var(--lineGray)] w-[101%] h-[2px] absolute left-0 rotate-[10deg]"></div>
            <div className="absolute top-1 right-[14px] font-bold">
              {currentRegions?.end?.name?.uz.substring(0, 15)}...
            </div>
            <div className="absolute bottom-1 left-[14px] font-bold">
              {currentRegions?.start?.name?.uz.substring(0, 15)}...
            </div>
          </div>
          {locations?.starting_cities?.map(
            (item: any) => (
              <div
                key={item.id}
                className={`whitespace-nowrap border-t-2 border-[--(lineGray)] h-[50px] flex items-center px-4 ${cls.cell}`}
              >
                {item.start_location_name}
              </div>
            )
          )}
        </div>
        <div className="flex">
          {locations?.ending_cities?.map(
            (row: any, index: number) => (
              <div
                key={index}
                className={`${cls.row} border-l-2 border-[var(--lineGray)] whitespace-nowrap`}
              >
                <div className={`${cls.cell} px-8 h-[48px]`}>
                  {row.end_location_name}
                </div>
                {row?.list?.map((column: any) => {

                  return (
                    <div
                      className={`border-t-2 flex px-4 font-medium ${cls.cell}`}
                      key={column.id}
                    >
                      <div className="border-r w-full flex items-center pr-2 h-[48px]">
                        <input
                          onChange={(e) =>
                            updateElement({
                              status: "price",
                              value: e.target.value,
                              column,
                              row
                            })
                          }
                          readOnly={!edit}
                          type="number"
                          defaultValue={column.price}
                        />{" "}
                        <span>so'm</span>
                      </div>
                      <div className="w-[35px] pr-2">
                        <input
                          onChange={(e) =>
                            updateElement({
                              status: "fee",
                              value: e.target.value,
                              column,
                              row
                            })
                          }
                          className="pl-2 w-full"
                          type="number"
                          readOnly={!edit}
                          defaultValue={column.fee ?? 0}
                        />

                        <span>%</span>
                      </div>
                    </div>
                  )


                })}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default PriceTable;