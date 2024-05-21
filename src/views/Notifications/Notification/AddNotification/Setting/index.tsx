import { useMemo, useState } from "react";

interface Props {
  control?: any;
  submitHandler: (evt: any) => void;
}


const Setting = ({ control, submitHandler }: Props) => {
  const [value, setValue] = useState("Hammasi");

  const handleChange = (e: any) => {
    setValue(e);
    submitHandler(e);
  };

  // const { regionList } = usePlaces();

  // const Regions = useMemo(() => {
  //   return regionList?.map((i: any) => {
  //     return {
  //       value: i.id,
  //       label: i.name.uz,
  //     };
  //   });
  // }, [regionList]);

  return ""
};

export default Setting;
