import HFSelect from "../../../../../components/FormElements/HFSelect";
import HFTextField from "../../../../../components/FormElements/HFTextField";
import cls from "../style.module.scss";
import { useMemo, useState } from "react";
import HFInputMask from "../../../../../components/FormElements/HFInputMask";
import usePageRouter from "../../../../../hooks/useObjectRouter";
import { SelectData } from "../Logic";
interface Props {
  control?: any;
  getHandler?: () => void;
}

const Info = ({ control }: Props) => {
  const { regionList, villageList, districtList } = SelectData();
  const { navigateQuery } = usePageRouter();
  const [fromDistrics, setFromDistrics] = useState([]);
  const [fromVillages, setFromVillages] = useState([]);

  const [toDistrics, setToDistrics] = useState([]);
  console.log('toDistrics', toDistrics);
  
  const [toVillages, setToVillages] = useState([]);

  const Regions = useMemo(() => {
    return regionList?.map((i: any) => {
      return {
        value: i.id,
        label: i.name.uz,
      };
    });
  }, [regionList]);

  const handlerDistrics = (e: any) => {
    for (let i = 0; i < regionList.length; i++) {
      if (regionList[i].id == e) {
        setFromDistrics(
          regionList[i].list?.map((i: any) => {
            return {
              value: i.id,
              label: i.name.uz,
              villages: i.village,
            };
          })
        );
      }
    }
  };

  const handlerVillage = (e: any) => {
    fromDistrics.map((val: any) => {
      if (e == val.value) {
        if (!fromVillages.length) {
          setFromVillages(
            val.villages?.map((val: any) => {
              return {
                value: val.id,
                label: val.name.uz,
              };
            })
          );
        } else {
          setToVillages(
            val.villages?.map((val: any) => {
              return {
                value: val.id,
                label: val.name.uz,
              };
            })
          );
        }
      }
    });
  };

  const ToHandlerDistrics = (e: any) => {
    for (let i = 0; i < regionList.length; i++) {
      if (regionList[i].id == e) {
        setToDistrics(
          regionList[i].list?.map((i: any) => {
            return {
              value: i.id,
              label: i.name.uz,
              villages: i.village,
            };
          })
        );
      }
    }
  };

  const toHandlerVillage = (e: any) => {
    fromDistrics.map((val: any) => {
      if (e == val.value) {
        setToVillages(
          val.villages?.map((val: any) => {
            return {
              value: val.id,
              label: val.name.uz,
            };
          })
        );
      }
    });
  };
  console.log("1", districtList?.length ? true : false);

  return (
    <div className="divide-y-[1px] divide-[#EAECF0]">
      {/* USER info */}
      <div className={cls.flex}>
        <p className={cls.title}>Yo’lovchi ma’lumotlari</p>
        <div className={`${cls.inputs} flex w-full max-w-[800px] gap-4`}>
          <HFInputMask
            name="passenger_phone"
            control={control}
            label="Tel raqami"
            placeholder={`+998 -- --- -- --`}
            mask={"+\\9\\9\\8 99 999 99 99"}
          />
          <HFTextField
            name="passenger_name"
            control={control}
            label="Ism"
            placeholder="Ismni kiriting"
          />
        </div>
      </div>

      {/* From distance */}
      <div className={cls.flex}>
        <p className={cls.title}>Qayerdan</p>
        <div className={cls.parent}>
          <div className={cls.inputs}>
            <HFSelect
              name="from_region"
              onChange={handlerDistrics}
              control={control}
              label="Viloyat"
              options={Regions}
              placeholder="Select"
              handleClick={(obj: any) => navigateQuery({ region: obj.value })}
            />
            <HFSelect
              name="start_location_id"
              onChange={handlerVillage}
              control={control}
              options={districtList}
              label="Tuman 2"
              placeholder="Select"
              disabled={districtList?.length ? false : true}
            />
          </div>
          <div className="mt-4">
            <HFSelect
              name="from_village_id"
              onChange={handlerVillage}
              control={control}
              options={villageList}
              label="Qishloq (mahalla yoki ko'cha)"
              placeholder="Select"
            />
          </div>
        </div>
      </div>

      {/* To distance */}
      <div className={cls.flex}>
        <p className={cls.title}>Qayerga</p>
        <div className={cls.parent}>
          <div className={cls.inputs}>
            <HFSelect
              name="to_region"
              onChange={ToHandlerDistrics}
              control={control}
              label="Viloyat"
              options={Regions}
              placeholder="Select"
            />
            <HFSelect
              name="end_location_id"
              onChange={toHandlerVillage}
              control={control}
              options={districtList}
              label="Tuman"
              placeholder="Select"
              disabled={true}
            />
          </div>
          <div className="mt-4">
            <HFSelect
              name="to_village_id"
              onChange={toHandlerVillage}
              control={control}
              options={toVillages}
              label="Qishloq (mahalla yoki ko'cha)"
              placeholder="Select"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
