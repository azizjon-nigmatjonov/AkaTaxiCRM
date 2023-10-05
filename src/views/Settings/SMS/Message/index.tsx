import { useEffect, useState } from "react";
import CCard from "../../../../components/CElements/CCard";
import { Skeleton } from "@mui/material";
import HFTextField from "../../../../components/FormElements/HFTextField";
import { useForm } from "react-hook-form";

interface Props {
  title: string;
}

const SMSMessage = ({ title = "" }: Props) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const { control, setValue } = useForm({
    mode: "onSubmit",
  });

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

          <div>
            <HFTextField
              name="name"
              control={control}
              placeholder="Sarlavha"
              label="Sarlavha"
              setValue={setValue}
              required={true}
            />
          </div>
        </>
      ) : (
        <Skeleton style={{ height: "160px", borderRadius: "14px" }} />
      )}
    </CCard>
  );
};

export default SMSMessage;
