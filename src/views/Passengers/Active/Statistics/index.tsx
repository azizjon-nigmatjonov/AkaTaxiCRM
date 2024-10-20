import {
  UserTagIcon,
  ArrowDown,
  ArrowUp,
} from "../../../../components/UI/IconGenerator/Svg";
import CCard from "../../../../components/CElements/CCard";
// import { useQuery } from "react-query";
// import passengerService from "../../../../services/passengers";
import { useMemo, useState } from "react";
import { ListSkeleton } from "../../../../components/CElements/CSkeleton/ListSkeleton";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
interface ListProps {
  name: string;
  current_month: number;
  status: number;
  percentage: any;
}

interface Props {
  data: any;
  isLoading: boolean;
  handleClick: (val: any) => void;
}

const Statistics = ({ data, isLoading, handleClick = () => {} }: Props) => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [show, setShow] = useState(true);

  const widgets = useMemo(() => {
    if (!data?.data) return [];

    return data?.data.map((val: any) => {
      return {
        ...val,
        status: val?.current_month - val?.last_month,
        percentage:
          val?.current_month && val?.last_month
            ? (
                ((val?.current_month - val?.last_month) / val.last_month) *
                100
              ).toFixed(2)
            : 0,
      };
    });
  }, [data]);

  if (isLoading) {
    return (
      <div className="mb-5">
        <ListSkeleton count={4} height={103} />
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        className="absolute right-0 top-[-55px] default-btn"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? <FolderOpenIcon /> : <FolderIcon />}
      </button>
      {show && (
        <div className={`mb-5 grid grid-cols-${widgets.length} gap-x-5`}>
          {widgets?.map(
            (
              { name, current_month, status, percentage }: ListProps,
              index: number
            ) => (
              <CCard
                style={{
                  minHeight: 0,
                  background: activeCard === index ? "var(--main)" : "white",
                }}
              >
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => {
                    if (activeCard === index) {
                      setActiveCard(null);
                      handleClick({ index: 0 });
                    } else {
                      handleClick({ index });
                      setActiveCard(index);
                    }
                  }}
                >
                  {name == "Aktiv" ? (
                    <div className="bg-[#0BD976]/10 p-[6px] rounded-lg inline-flex">
                      <UserTagIcon
                        stroke={activeCard === index ? "white" : undefined}
                      />
                    </div>
                  ) : status >= 0 ? (
                    <ArrowUp
                      fill={true}
                      stroke={activeCard === index ? "white" : undefined}
                    />
                  ) : (
                    <ArrowDown
                      fill={true}
                      stroke={activeCard === index ? "white" : undefined}
                    />
                  )}
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <p
                        className={`${
                          activeCard === index
                            ? "text-white"
                            : "text-[var(--black)] "
                        } font-semibold text-[28px]`}
                      >
                        {current_month} ta
                      </p>
                      {name != "Aktiv" && (
                        <p
                          className={`${
                            percentage >= 0
                              ? "text-[var(--green)]"
                              : "text-[var(--error)]"
                          }   text-base font-semibold`}
                        >
                          {percentage > 0 ? "+" + percentage : percentage}%
                        </p>
                      )}
                    </div>
                    <p
                      className={`text-sm font-normal ${
                        activeCard === index
                          ? "text-white"
                          : "text-[var(--gray)]"
                      }`}
                    >
                      {name}
                    </p>
                  </div>
                </div>
              </CCard>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Statistics;
