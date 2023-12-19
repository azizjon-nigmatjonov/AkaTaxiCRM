import { Header } from "../../../../components/Header";
import CCard from "../../../../components/CElements/CCard";
import { Radio } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import HFTextField from "../../../../components/FormElements/HFTextField";

const list = [
  {
    title: "Barchasi",
    id: "all",
  },
  {
    title: "Haydovchi",
    id: "driver",
  },
  {
    title: "Yo'lovchi",
    id: "passenger",
  },
];

export const SmsCreateForm = () => {
  const [params, setParams] = useState({ whom: "all" });
  const { control, setValue } = useForm();

  return (
    <>
      <Header />

      <div className="px-5 space-y-5">
        <CCard title="Kimga yuborish kerak?" style={{ minHeight: "0" }}>
          {list?.map((item, index) => (
            <button
              key={index}
              onClick={() => setParams({ ...params, whom: item.id })}
              className="border border-border rounded-[10px] mr-4 pl-4 pr-1"
            >
              {item.title}
              <Radio checked={item.id === params.whom} />
            </button>
          ))}
        </CCard>
        <CCard title="Xabar matni" style={{ minHeight: "0" }}>
          <HFTextField
            name="title"
            control={control}
            placeholder="Sarlavha"
            label="Sarlavha"
            required={true}
            setValue={setValue}
          />
        </CCard>
      </div>
    </>
  );
};
