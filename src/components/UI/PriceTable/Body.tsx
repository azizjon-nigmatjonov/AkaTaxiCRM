import { BodyUI } from "./Details/Body";
import { HeadCell } from "./Details/HeadCell";

interface Props {
  districtList: any;
  headColumns: any;
  region: any;
  handleKmInput: (val: number, id: number) => void;
  setValue: (val: string, val2: any) => void;
  submitFn: (val: string, val2: number) => void;
  handlePriceInput: (val: string, val2: number) => void;
  handleCheckKm: (val: number, val2: boolean) => void;
  handleSelectDelivery: (val: string) => void;
}

export const PriceTableBody = ({
  districtList = [],
  headColumns = [],
  region,
  setValue,
  submitFn,
  handlePriceInput,
  handleCheckKm,
  handleKmInput,
  handleSelectDelivery = () => {}
}: Props) => {
  return (
    <div
      className={`price-table bg-white rounded-[12px] border border-[var(--border)] common-shadow overflow-hidden`}
    >
      <div className="header">
        <div className="row">
          {headColumns?.map((item: any, index: number) => (
            <HeadCell
              key={index}
              orderNumber={index}
              type={item.type}
              column={item}
              region={region}
              setValue={setValue}
              submitFn={submitFn}
              handlePriceInput={handlePriceInput}
              handleCheckKm={handleCheckKm}
              handleSelectDelivery={handleSelectDelivery}
            />
          ))}
        </div>
      </div>
      <div className="body">
        <div className="left">
          <div className="cell">
            <p>{region?.region_name}</p>
          </div>
        </div>
        <div className="right">
          <BodyUI
            headColumns={headColumns}
            districtList={districtList}
            handleKmInput={handleKmInput}
            submitFn={submitFn}
          />
        </div>
      </div>
    </div>
  );
};
