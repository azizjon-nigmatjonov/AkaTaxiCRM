import { memo, useEffect, useState } from "react";
import CCard from "../../../../../components/CElements/CCard";
import CardElement from "./Element";
import AddCard from "./Element/AddCard";
import SkeletonCard from "./Skeleton";

interface Props {
  title: string;
  list: { region: string; district: string }[];
  direction: string
}

const DirectionCard = ({ title = "", list = [], direction = '' }: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300);
  }, [])

  return (
    <CCard
      classes="bg-transparent rounded-[30px] border-[var(--lineGray)]"
      style={{ background: "transparent", padding: "18px", minHeight: "100%" }}
    >
      <p className="text-[var(--gray)] mb-[14px] text-base font-medium">
        {title}
      </p>

      <div className="space-y-2">
        {!loading && list.map((el, ind) => (
          <CardElement key={ind} element={el} direction={direction} />
        ))}
        {loading && <SkeletonCard />}
        <AddCard />
      </div>
    </CCard>
  );
};

export default memo(DirectionCard);
