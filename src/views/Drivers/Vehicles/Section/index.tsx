import CCard from "../../../../components/CElements/CCard";
import Card from "./Card";
import usePageRouter from "../../../../hooks/useObjectRouter";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

interface Props {
  list: object[];
}

const Section = ({ list = [] }: Props) => {
  const { navigateTo } = usePageRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <CCard
      classes="bg-transparent border-0 p-0"
      style={{ background: "transparent", minHeight: "0" }}
    >

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
        </div>
      )}
      {loading && <SkeletonCard />}
    </CCard>
  );
};

export default Section;
