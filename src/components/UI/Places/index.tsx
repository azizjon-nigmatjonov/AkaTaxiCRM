import cls from "./style.module.scss";
import { PassengerManIcon, PassangerFemaleIcon } from "../IconGenerator/Svg";
import usePageRouter from "../../../hooks/useObjectRouter";
import { useMemo } from "react";

interface Props {
  data: any;
  element?: any;
  clickHandle?: (val: any) => void;
}

const Places = ({ data, element, clickHandle = () => {} }: Props) => {
  const { navigateQuery } = usePageRouter();

  const places = useMemo(() => {
    return {
      front: data ? data?.slice(0, 1) : [],
      back: data ? data?.slice(1, 6) : [],
    };
  }, [data]);

  const handleClick = () => {
    navigateQuery({ id: element.id });
    clickHandle(element);
  };

  return (
    <div className="max-w-[55px] w-full " onClick={handleClick}>
      {places.front.map((item: any) => (
        <div className={cls.front}>
          <div
            className={`${cls.seat} ${
              item.reserved
                ? cls.driver
                : item.gender === "m" || item.gender === "f"
                ? cls.user
                : cls.empty
            }`}
          >
            {item.gender == "m" ? (
              <PassengerManIcon />
            ) : item.gender === "f" ? (
              <PassangerFemaleIcon />
            ) : null}
          </div>
        </div>
      ))}
      <div className={cls.back}>
        {places.back.map((item: any) => (
          <div
            className={`${cls.seat} ${
              item.reserved
                ? cls.driver
                : item.gender === "m" || item.gender === "f"
                ? cls.user
                : cls.empty
            }`}
          >
            {item.gender === "m" ? (
              <PassengerManIcon />
            ) : item.gender === "f" ? (
              <PassangerFemaleIcon />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
