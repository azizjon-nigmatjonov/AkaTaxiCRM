import cls from "./style.module.scss";
const PriceTable = ({
  locations = {},
  updateCell = () => {},
}: {
  locations?: any;
  updateCell: (val: any, val2: any, val3: any) => void;
}) => {
  console.log("1", locations?.directions?.ending_cities);

  const updateElement = (status: string, val: any, el: any) => {
    console.log(status, 'val', val,'12', el);
    updateCell(status, val, el)
  };
  // console.log("2");

  return (
    <div
      className={`mt-3 bg-white border border-[var(--lightGray)] rounded-[18px] max-h-[540px] overflow-scroll ${cls.table}`}
    >
      {/* <div className={`flex ${cls.header}`}>
        <div
          className={`whitespace-nowrap h-[48px] flex items-center px-[100px] relative ${cls.cell}`}
        >
          <div className="bg-[var(--lineGray)] w-[102%] h-[2px] absolute left-0 rotate-[14deg]"></div>
          <div className="absolute top-1 left-1/2 font-medium">Samarqand</div>
          <div className="absolute bottom-1 right-[100px] font-medium">
            Buxoro
          </div>
        </div>
        {locations?.directions?.ending_cities?.map(
          (item: any, index: number) => (
            <div
              key={index}
              className={`whitespace-nowrap border-l border-[--(lineGray)] h-[48px] flex items-center px-6 ${cls.cell}`}
            >
              {item.end_location_name}
            </div>
          )
        )}
      </div> */}
      <div className={cls.body}>
        <div className="border-r-2 border-[var(--lineGray)]">
          <div
            className={`whitespace-nowrap h-[48px] flex items-center px-[100px] relative ${cls.cell}`}
          >
            <div className="bg-[var(--lineGray)] w-[102%] h-[2px] absolute left-0 rotate-[14deg]"></div>
            <div className="absolute top-1 right-[14px] font-bold">
              Samarqand
            </div>
            <div className="absolute bottom-1 left-[14px] font-bold">
              Buxoro
            </div>
          </div>
          {locations?.directions?.ending_cities?.map(
            (item: any, index: number) => (
              <div
                key={index}
                className={`whitespace-nowrap border-t-2 border-[--(lineGray)] h-[50px] flex items-center px-4 ${cls.cell}`}
              >
                {item.end_location_name}
              </div>
            )
          )}
        </div>
        <div className="flex">
          {locations?.directions?.starting_cities?.map(
            (row: any, index: number) => (
              <div
                key={index}
                className={`${cls.row} border-l-2 border-[var(--lineGray)] whitespace-nowrap`}
              >
                <div className={`${cls.cell} px-8 h-[48px]`}>
                  {row.start_location_name}
                </div>
                {row?.list?.map((column: any) => (
                  <div
                    className={`border-t-2 flex px-4 font-medium ${cls.cell}`}
                  >
                    <div className="border-r w-full flex items-center pr-2 h-[48px]">
                      <input
                        onChange={(e) =>
                          updateElement("price", e.target.value, column)
                        }
                        type="number"
                        defaultValue={column.price}
                      />{" "}
                      <span>so'm</span>
                    </div>
                    <div className="w-[35px]">
                      <input
                        className="pl-2 w-full"
                        type="text"
                        defaultValue={column.fee}
                      />
                      <span className="pr-4">%</span>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default PriceTable;
