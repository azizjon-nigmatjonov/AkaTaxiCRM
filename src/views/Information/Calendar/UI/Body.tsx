import { ColorConstants } from "../../../../constants/website";
import Lighter from "./Lighter";
import cls from "./style.module.scss";

const Body = ({ list = [], month = {} }: { list: any, month: any }) => {
  // console.log('month', month);


  return (
    <div className={cls.calendar}>
      <div className={cls.header}>
        <div className="grid grid-cols-7">
          <div className={cls.cell}>
            <span>Payshanba</span>
          </div>
          <div className={cls.cell}>
            <span>Juma</span>
          </div>
          <div className={cls.cell}>
            <span>Shanba</span>
          </div>
          <div className={cls.cell}>
            <span>Yakshanba</span>
          </div>
          <div className={cls.cell}>
            <span>Dushanba</span>
          </div>
          <div className={cls.cell}>
            <span>Seshanba</span>
          </div>
          <div className={cls.cell}>
            <span>Chorshanba</span>
          </div>
        </div>
      </div>

      <div className={cls.body}>
        <div className="grid grid-cols-7">
          {list.map((element: any, index: number) => (
            <div className={cls.cell} key={index}>
              <span className="font-medium">{index + 1}</span>
              <Lighter
                text={`${element.passenger_count} ta`}
                color={ColorConstants.blue}
              />
              <Lighter
                text={`${element.driver_count} ta`}
                color={ColorConstants.error}
              />
              <Lighter
                text={`${element.trip_count} ta`}
                color={ColorConstants.darkerGreen}
              />
              <Lighter
                text={`${element.bookings_count} ta`}
                color={'rgb(234 179 8)'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
