import { useState } from "react";
import Places from "../../../../../components/UI/Places";
import cls from "../style.module.scss";
import {
  PassangerFemaleIcon,
  PassengerManIcon,
} from "../../../../../components/UI/IconGenerator/Svg/index";
import { Closer } from "../../../../../components/UI/Closer";
interface Props {
  id: number;
  title: string;
  data: any;
  fee: number;
}

const DATA = [
  {
    id: 1,
    title: "Oldi",
    fee: 5,
    data: [
      { gender: "m", reserved: false },
      { gender: "false", reserved: false },
      { gender: "false", reserved: false },
      { gender: "false", reserved: false },
    ],
  },
  {
    id: 2,
    title: "Orqa o’ng",
    fee: 0,
    data: [
      { gender: "false", reserved: false },
      { gender: "false", reserved: false },
      { gender: "false", reserved: false },
      { gender: "m", reserved: false },
    ],
  },
  {
    id: 3,
    title: "O’rta",
    fee: -5,
    data: [
      { gender: "false", reserved: false },
      { gender: "false", reserved: false },
      { gender: "m", reserved: false },
      { gender: "false", reserved: false },
    ],
  },
  {
    id: 4,
    title: "Orqa chap",
    fee: 0,
    data: [
      { gender: "false", reserved: false },
      { gender: "m", reserved: false },
      { gender: "false", reserved: false },
      { gender: "false", reserved: false },
    ],
  },
];

const SelectedSeating = ({
  classes,
  clickHandle,
}: {
  classes?: string;
  clickHandle: any;
}) => {
  return (
    <div className={classes}>
      <div className="bg-white relative z-10 shadow-md border border-[var(--lineGray)] p-4 rounded-2xl divide-x-2 divide-[var(--lineGray)] flex items-center">
        <div className="pr-4" onClick={() => clickHandle("f")}>
          <PassangerFemaleIcon width={37} height={41} color="#FF5B01" />
        </div>
        <div onClick={() => clickHandle("m")} className="pl-4">
          <PassengerManIcon width={37} height={41} color="#FF5B01" />
        </div>
      </div>
      <div className="absolute top-1/2 right-[-7px] -translate-y-1/2">
        <div className="w-[15px] h-[15px] rotate-[45deg] bg-white"></div>
      </div>
    </div>
  );
};

const Seating = ({
  handleSeatActions = () => {},
}: {
  handleSeatActions: (val: any) => void;
}) => {
  const [activeNumber, setActiveNumber] = useState<any>(null);
  const [result, setResult] = useState([
    { place_number: 0, gender: "false" },
    { place_number: 3, gender: "false" },
    { place_number: 2, gender: "false" },
    { place_number: 1, gender: "false" },
  ]);

  let front = result.slice(0, 1);
  let back = result.slice(1);

  const handleList = (status: string, number: number) => {
    const newRes = result?.map((item) => {
      if (item.place_number == number) {
        item.gender = item.gender === "false" ? status : "false";
      }
      return {
        ...item,
      };
    });

    setResult(newRes);
    handleSeatActions(newRes)
    setActiveNumber(null);
  };

  const handleSeat = (place_number: any) => {
    const find: any = result.find(
      (item: any) => item.place_number === place_number
    );

    if (find.gender === "false") {
      setActiveNumber(place_number);
    } else {
      handleList("m", place_number);
      setActiveNumber(null);
    }
  };

  return (
    <div className={cls.flex}>
      <p className={cls.title}>O'rindiq</p>
      <div className="flex items-center gap-6">
        <div>
          <p className={cls.title}>Tanlash</p>
          <div className="bg-white border border-[var(--lineGray)] grid place-items-center p-6 h-[244px] w-[248px] rounded-xl">
            <div className="relative">
              {/* SEAT FRONT */}
              {front.map((val: any) => (
                <div className="px-1 border-r-2">
                  <div
                    onClick={() => handleSeat(val.place_number)}
                    className={`relative ${
                      val.gender != "false" ? "bg-[#FF5B01]" : "bg-[#EAEAEB]"
                    } h-9 w-9 grid place-items-center rounded-lg  ml-auto cursor-pointer`}
                  >
                    {val.gender == "false" ? null : val.gender == "m" ? (
                      <PassengerManIcon width={20} height={23} />
                    ) : (
                      <PassangerFemaleIcon width={20} height={23} />
                    )}
                  </div>
                  {activeNumber === 0 && (
                    <SelectedSeating
                      clickHandle={(val: string) =>
                        handleList(val, activeNumber)
                      }
                      classes="absolute top-[-20px] right-[40px] z-[98]"
                    />
                  )}
                </div>
              ))}

              {/* SEAT BACKSIDE */}
              <div className="flex items-center gap-1 p-1 border-b-2 border-r-2 border-l-2 rounded-b-lg ">
                {back?.map((val: any) => (
                  <div className="relative">
                    <div
                      onClick={() => handleSeat(val.place_number)}
                      className={`relative ${
                        val.gender != "false" ? "bg-[#FF5B01]" : "bg-[#EAEAEB]"
                      } h-9 w-9 grid place-items-center rounded-lg  ml-auto cursor-pointer`}
                    >
                      {val.gender == "false" ? null : val.gender == "m" ? (
                        <PassengerManIcon width={20} height={23} />
                      ) : (
                        <PassangerFemaleIcon width={20} height={23} />
                      )}
                    </div>
                    {activeNumber === val.place_number && (
                      <SelectedSeating
                        clickHandle={(val: string) =>
                          handleList(val, activeNumber)
                        }
                        classes="absolute top-[-20px] right-[120%] z-[98]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4">
          {DATA?.map(({ id, data, title, fee }: Props) => (
            <div className="flex items-start gap-4" key={id}>
              <Places data={data} />
              <div>
                <p className={` font-semibold text-lg`}>{title}</p>
                <span
                  className={`${
                    fee == 0
                      ? "text-[var(--gray)]"
                      : fee > 0
                      ? "text-[var(--green)]"
                      : "text-[var(--main)]"
                  } text-base font-normal`}
                >
                  {fee > 0 ? "+" + fee : fee}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeNumber !== null && (
        <Closer handleClose={() => setActiveNumber(null)} />
      )}
    </div>
  );
};

export default Seating;
