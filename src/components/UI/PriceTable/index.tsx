import { HeadCell } from "./Details/HeadCell";
import "./style.scss";
import { BodyData, CreateFunction, TableData } from "./Logic";
import { useForm } from "react-hook-form";
import { BodyUI } from "./Details/Body";
import { useEffect, useState } from "react";

interface Props {
  region: any;
  from_tashkent: number;
  handleSucces: () => void;
  handleDistanceSet: (val: string, val2: any) => void;
  getDistanceValues: () => void;
}

export const PriceTable = ({
  from_tashkent = 0,
  region = {},
  handleSucces,
  handleDistanceSet,
  getDistanceValues,
}: Props) => {
  const { headColumns, handleCheckKm, handlePriceInput } = TableData({
    region,
  });
  const { submitPrice, submitDistance } = CreateFunction({
    handleSucces,
    from_tashkent: from_tashkent,
  });
  const [districtList, setDistrictList] = useState([]);
  const { handleKmInput } = BodyData({
    bodyList: region?.districts,
    handleDistanceSet,
    districtList,
    setDistrictList
  });
  const { setValue, getValues } = useForm();

  const submitFn = (type: string, id: number) => {
    if (type === "submit") {
      const params = getValues();
      submitPrice(params, id);
    }
    if (type === "submitDistance") {
      const params: any = getDistanceValues();

      if (Object.values(params).length) {
        submitDistance(params);
      }
    }
  };


  useEffect(() => {
    if (region?.districts?.length) {
      setDistrictList(region.districts);
    }
  }, [region?.districts]);

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
          />
        </div>
      </div>
    </div>
  );
};
