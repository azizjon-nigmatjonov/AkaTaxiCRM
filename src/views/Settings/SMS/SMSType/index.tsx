import { useEffect, useState } from "react";
import CCard from "../../../../components/CElements/CCard";
import { Skeleton } from "@mui/material";
import CCheck from "../../../../components/CElements/CCheck";

interface Props {
  title: string;
  List?: object[]
}

const TypeCard = ({ title = "", List = [] }: Props) => {
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState("");
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

          <div className="grid grid-cols-3 gap-x-[18px] w-1/2">
            {List.map((element: any, index) => (
              <CCheck key={index} value={element.value} label={element.label} checked={checked} onClick={() => setChecked(element.value)} />
            ))}
          </div>
        </>
      ) : (
        <Skeleton style={{ height: "90px", borderRadius: "14px" }} />
      )}
    </CCard>
  );
};

export default TypeCard;
