import { useMemo } from "react";
import { BodyCell } from "./Details/BodyCell";
import { HeadCell } from "./Details/HeadCell";
import "./style.scss";

export const PriceTable = () => {
  const headColumns = useMemo(() => {
    return [
      {
        title: "Voloyat",
        id: "region",
        type: "cell",
      },
      {
        title: "Tumanlar",
        id: "discrict",
        type: "cell",
      },
      {
        title: "Yo'l-yo'lakay",
        id: "by_way",
        type: "collapsed",
        price: 250,
        edit_km: false,
        edit_price: false,
      },
      {
        title: "Standart",
        id: "standard",
        type: "collapsed",
        price: 300,
        edit_km: false,
        edit_price: false,
      },
      {
        title: "Komfort",
        id: "comfort",
        type: "collapsed",
        price: 350,
        edit_km: false,
        edit_price: false,
      },
      {
        title: "Biznes",
        id: "business",
        type: "collapsed",
        price: 500,
        edit_km: false,
        edit_price: false,
      },
    ];
  }, []);

  const handleCheckKm = (id: string) => {
    console.log(id);
  };

  return (
    <div
      className={`price-table bg-white rounded-[12px] border border-[var(--border)] common-shadow overflow-hidden`}
    >
      <div className="header">
        <div className="row">
          {headColumns?.map((item: any, index: number) => (
            <HeadCell
              key={index}
              type={item.type}
              element={item}
              handleCheckKm={handleCheckKm}
            />
          ))}
        </div>
      </div>
      <div className="body">
        <div className="left">
          <div className="cell">
            <p>Andijon</p>
          </div>
        </div>
        <div className="right">
          <div className="row">
            {headColumns?.splice(1)?.map((headCol: any, index: number) => (
              <BodyCell
                key={index}
                edit={headCol?.edit_km}
                type={headCol.type}
                element={{}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
