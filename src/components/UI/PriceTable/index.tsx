import { BodyCell } from "./Details/BodyCell";
import { HeadCell } from "./Details/HeadCell";
import "./style.scss";

interface Props {
  bodyColumns: any;
}

export const PriceTable = ({ bodyColumns = [] }: Props) => {
  const headColumns = [
    {
      title: "Viloyat",
      id: "region",
      type: "cell",
    },
    {
      title: "Tumanlar",
      id: "name",
      type: "cell",
    },
    {
      title: "Yo'l-yo'lakay",
      id: "distance",
      type: "collapsed",
      price: 250,
      edit_km: false,
      edit_price: false,
    },
    {
      title: "Standart",
      id: "distance",
      type: "collapsed",
      price: 300,
      edit_km: false,
      edit_price: false,
    },
    {
      title: "Komfort",
      id: "distance",
      type: "collapsed",
      price: 350,
      edit_km: false,
      edit_price: false,
    },
    {
      title: "Biznes",
      id: "distance",
      type: "collapsed",
      price: 500,
      edit_km: false,
      edit_price: false,
    },
  ];

  const handleCheckKm = (id: string) => {
    console.log(id);
  };

  return (
    <div className="space-y-6">
      {bodyColumns?.map((region: any, regionIndex: number) => (
        <div
          key={regionIndex}
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
                <p>{region?.region_name}</p>
              </div>
            </div>
            <div className="right">
              <div className="flex flex-col">
                {region?.districts?.map(
                  (district: any, districtsIndex: number) => (
                    <div key={districtsIndex} className="row">
                      {headColumns
                        .slice(1, headColumns.length)
                        .map((col, colIndex) => (
                          <BodyCell
                            key={colIndex}
                            edit={col?.edit_km}
                            type={col.type}
                            district={district}
                            column={col}
                          />
                        ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
