// import { ColorConstants } from "../../../../constants/website";
import { useState, useEffect } from "react";
import Lighter from "./Lighter";
import cls from "./style.module.scss";

const DAYS = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];


const Body = ({ list = [], }: { list?: any, month?: any }) => {



  


  const [calendarEmptyCell, setCalendarEmptyCell] = useState<any>([])

  const emtyCell: any = () => {
    const startWeekDay = list[0].day;
    let now = new Date(startWeekDay)
    let day = now.getDay() / 2

    if (calendarEmptyCell.length < day) {
      for (let i = 1; i <= day; i++) {
        setCalendarEmptyCell((e: any) => [...e, i])
      }
    }
  }

  useEffect(() => {
    emtyCell()
  }, [list])


  // const startWeekDay = () => {
  //   const startWeekDay = list[0].day;
  //   const now = new Date(startWeekDay)
  //   let day = now.getDay()
  // }

  // startWeekDay()

  // console.log(new Date('2024-02-01').toLocaleDateString('en-US', { weekday: 'long' }));


  return (
    <div className={cls.calendar}>
      <div className={cls.header}>
        <div className="grid grid-cols-7">
          {DAYS.map((day, i: number) => (<div className={cls.cell}>
            <span key={i}>{day}</span>
          </div>))}
        </div>
      </div>

      <div className={cls.body}>
        <div className="grid grid-cols-7">
          {calendarEmptyCell.map((_: unknown, i: number) => <div className={cls.cell} key={i}></div>)}

          {list.map((element: any, index: number) => (
            <div className={cls.cell} key={index}>
              <span className="font-medium">{index + 1}</span>
              <Lighter
                text={`${element.passenger_count} ta`}
                // color={ColorConstants.blue}
                icon={'passenger_count'}
              />
              <Lighter
                text={`${element.driver_count} ta`}
                // color={ColorConstants.error}
                icon={'driver_count'}
              />
              <Lighter
                text={`${element.trip_count} ta`}
                // color={ColorConstants.darkerGreen}
                icon={'trip_count'}
              />
              <Lighter
                text={`${element.bookings_count} ta`}
                // color={'rgb(234 179 8)'}
                icon={'bookings_count'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
