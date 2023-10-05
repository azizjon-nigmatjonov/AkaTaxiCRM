import { useEffect, useState } from "react";
import CCard from "../../../../components/CElements/CCard";
import PriceField from "./PriceField";
import { Skeleton } from "@mui/material";

interface Props {
  title: string;
  element: any;
}

const PriceCard = ({ title = "", element = {} }: Props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <CCard
      classes="bg-transparent rounded-[30px] border-[var(--lineGray)]"
      style={{ background: "transparent", padding: "18px", minHeight: "100%" }}
    >
      {!loading ? (
        <>
          <p className="text-[var(--gray)] mb-[14px] text-base font-medium">
            {title}
          </p>

          <div className="grid grid-cols-3 gap-x-[18px]">
            <PriceField title="Min. Narx" price={element.min_price} />
            <PriceField title="Max. Narx" price={element.max_price} />
            {element?.commission && (
              <PriceField title="Komissiya" price={element.commission} />
            )}
          </div>
        </>
      ) : (
        <Skeleton style={{ height: '90px', borderRadius: '14px' }} />
      )}
    </CCard>
  );
};

export default PriceCard;
