import { BodyCell } from "./BodyCell";

interface Props {
  districtList: any;
  headColumns: any;
  submitFn: (val: string, val2: number) => void;
  handleKmInput: (val: number, id: number) => void;
}

export const BodyUI = ({
  districtList,
  headColumns,
  handleKmInput = () => {},
  submitFn = () => {}
}: Props) => {
  return (
    <div className="flex flex-col">
      {districtList?.map((district: any, districtsIndex: number) => (
        <div key={districtsIndex} className="row">
          {headColumns
            .slice(1, headColumns.length)
            .map((col: any, colIndex: number) => (
              <BodyCell
                key={colIndex}
                edit={col?.edit_km}
                district={district}
                handleKmInput={handleKmInput}
                column={col}
                submitFn={submitFn}
              />
            ))}
        </div>
      ))}
    </div>
  );
};
