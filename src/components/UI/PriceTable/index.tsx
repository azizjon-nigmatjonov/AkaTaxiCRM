import { HeadCell } from "./Details/HeadCell";
import "./style.scss";
import { CreateFunction, TableData } from "./Logic";
import { BodyCell } from "./Details/BodyCell";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface Props {
  region: any;
  handleSucces: () => void;
}

export const PriceTable = ({ region = {}, handleSucces }: Props) => {
  const { headColumns, handleCheckKm, handlePriceInput, handleKmInput } = TableData({
    region,
  });
  const { submitPrice } = CreateFunction({ handleSucces });
  const [districtList, setDistrictList] = useState([])
  const { setValue, getValues } = useForm({
    mode: "onSubmit",
  });

  const submitFn = (type: string, region_id: number) => {
    if (type === "submit") {
      const params = getValues();
      submitPrice(params, region_id);
    }
  };

  useEffect(() => {
    if (region?.districts) {
      setDistrictList(region.districts)
    }
  }, [region?.districts])
  

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
              submitPrice={submitFn}
              handlePriceInput={handlePriceInput}
              handleCheckKm={handleCheckKm}
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
          <div className="flex flex-col">
            {districtList?.map((district: any, districtsIndex: number) => (
              <div key={districtsIndex} className="row">
                {headColumns
                  .slice(1, headColumns.length)
                  .map((col: any, colIndex: number) => (
                    <BodyCell
                      key={colIndex}
                      edit={col?.edit_km}
                      type={col.type}
                      district={district}
                      handleKmInput={handleKmInput}
                      column={col}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
