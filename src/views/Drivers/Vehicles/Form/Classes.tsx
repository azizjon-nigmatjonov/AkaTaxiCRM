import { useEffect, useState } from "react";
import SwitchBtn from "../../../../components/Buttons/Switch";
import { Divider } from "@mui/material";

interface Props {
  classes: any;
}

const Classes = ({ classes = [] }: Props) => {
  const [groupA, setGroupA] = useState([]);
  const [groupB, setGroupB] = useState([]);

  useEffect(() => {
    if (!classes?.length) return;

    const a = classes.slice(0, 3).map((i: any) => {
      return {
        ...i,
        checked: true,
      };
    });

    const b = classes.slice(3).map((i: any) => {
      return {
        ...i,
        checked: false,
      };
    });

    setGroupA(a);
    setGroupB(b);
  }, [classes]);

  const handleCheck = (name: string, check: boolean, group: string) => {
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
  };

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
      {groupB?.map((item: any) => (
        <SwitchBtn
          text={item.name}
          name={item.name}
          handleCheck={handleCheck}
          checked={item.checked}
          group="b"
        />
      ))}
    </>
  );
};

export default Classes;
