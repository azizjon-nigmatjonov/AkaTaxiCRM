import AddCard from "./AddCard";
import CCard from "../../../../components/CElements/CCard";
import Card from "./Card";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

interface Props {
  title: string;
  list: object[];
}

const Section = ({ title, list = [] }: Props) => {
  const { navigateTo } = usePageRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <CCard
      classes="bg-transparent rounded-[30px] border-[var(--lineGray)]"
      style={{ background: "transparent", padding: "18px", minHeight: "0" }}
    >
      <p className="text-[var(--gray)] mb-[14px] text-base font-medium">
        {title}
      </p>

      {!loading && (
        <div className="grid grid-cols-3 gap-[18px]">
          {list.map((element, index) => (
            <div
              key={index}
              onClick={() => navigateTo(`/drivers/car/${index}`)}
              className="cursor-pointer"
            >
              <Card element={element} />
            </div>
          ))}

          <AddCard />
        </div>
      )}
      {loading && <SkeletonCard />}
    </CCard>
  );
};

export default Section;
