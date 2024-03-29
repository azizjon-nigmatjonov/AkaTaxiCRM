import { useEffect, useState } from "react";
import SwitchBtn from "../../../../components/Buttons/Switch";
import { Divider } from "@mui/material";

interface Props {
  classes: any;
  defaultValue?: any;
  setValue?: (val1?: any, val2?: any) => void;
  clas?: any
  
}

const Classes = ({clas, classes = [], setValue = () => { } }: Props) => {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);

  console.log(clas);
  // console.log(customClass);
  
  // console.log(clas);
  // console.log(classes);


  // console.log(groupA);


  useEffect(() => {
    if (!classes?.length) return;

    const a = classes.slice(0, 3)?.map((i: any) => {


      return {
        ...i,
        checked: i.name === clas,
      };
    });

    const b = classes.slice(3);

    setGroupA(a);
    setGroupB(b);
    const ids = a
      .concat(b)
      .filter((item: any) => item.checked)
      .map((item: any) => item.slug);

    setValue("ids", ids);


  }, [classes, clas, setValue]);




  const handleCheck = (name: string, check: boolean, group: string) => {

    // console.log(name);

    if (group === "a") {
      const b: any = groupB.map((i: any) => {
        return {
          ...i,
          checked: false,
        };
      });
      setGroupB(b);

      const a: any = groupA.map((i: any) => {
        if (i.name === name) i.checked = check;
        return {
          ...i,
        };
      });

      setGroupA(a);
    } else {
      const a: any = groupA.map((i: any) => {
        return {
          ...i,
          checked: false,
        };
      });
      setGroupA(a);

      const b: any = groupB.map((i: any) => {
        if (i.name === name) i.checked = check;
        return {
          ...i,
        };
      });

      setGroupB(b);
    }
    const ids = groupA
      .concat(groupB)
      .filter((item: any) => item.checked)
      .map((item: any) => item.slug);
    setValue("ids", ids);
  };

  // console.log(groupA);

  return (
    <>


      {groupA?.map((item: any) => (
        <SwitchBtn

          text={item.name}
          name={item.name}
          checked={item.checked}
          handleCheck={handleCheck}
          group="a"
        />
      ))}
      <Divider />
      {groupB?.map(
        (item: any) =>
          item.name !== "standart" && (
            <SwitchBtn
              text={item.name}
              name={item.name}
              handleCheck={handleCheck}
              checked={item.checked}
              group="b"
            />
          )
      )}
    </>
  );
};

export default Classes;