import { useEffect, useState } from "react";
import SwitchBtn from "../../../../components/UI/Buttons/Switch";

interface Props {
  classes: any;
  defaultValue?: any;
  setValue?: (val1?: any, val2?: any) => void;
  clas?: any;
  classIds?: number[];
}

const Classes = ({
  clas,
  classes = [],
  setValue = () => {},
}: Props) => {
  const [group, setGroup] = useState([]);
  
  useEffect(() => {
    if (!classes?.length) return;
    const arr = classes?.map((i: any) => {
      return {
        ...i,
        checked: i?.checked ?? false,
      };
    });


    setGroup(arr)
    const ids = arr
      .filter((item: any) => item.checked)
      .map((item: any) => item.slug);

    setValue("ids", ids);
  }, [classes, clas, setValue]);

  const handleCheck = (name: string, check: boolean,) => {
    const a: any = group.map((i: any) => {
      if (i.name === name) i.checked = check;
      return {
        ...i,
      };
    });

    setGroup(a);
    const ids = group

      .filter((item: any) => item.checked)
      .map((item: any) => item.slug);

    setValue("ids", ids);
  };
  
  return (
    <>
      {group?.map((item: any) => (
        <SwitchBtn
          text={item.name}
          name={item.name}
          checked={item.checked}
          handleCheck={handleCheck}
          group="a"
        />
      ))}
    </>
  );
};

export default Classes;
