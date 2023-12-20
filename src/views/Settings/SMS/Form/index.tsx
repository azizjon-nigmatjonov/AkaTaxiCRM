import { Header } from "../../../../components/Header";
import CCard from "../../../../components/CElements/CCard";
import { Radio } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import HFTextField from "../../../../components/FormElements/HFTextField";
import smsService from "../../../../services/sms";
import { useParams } from "react-router-dom";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import CLabel from "../../../../components/CElements/CLabel";
import AddButton from "../../../../components/Buttons/AddButton";

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
  const { type } = useParams();
  const [active, setActive] = useState("all");
  const { control, setValue } = useForm({
    defaultValues: {
      user_group: "all",
      body: "",
      title: "",
    },
  });

  const sendMail = () => {
    const obj = {
      title: "new one",
      body: "as",
      phone: "998994912830",
      user_group: "drivers",
      type: "sms",
      send_after: "20.12.2023",
    };
    smsService.createElement(obj);
  };
  useEffect(() => {
    sendMail();
  }, []);

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: "Haydovchilar ro‘yxati ",
        link: "/drivers/cars",
      },
      {
        label: type === "push" ? "Push xabar" : "SMS",
      },
    ];
  }, [type]);

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>

      <div className="px-5 space-y-5">
        <CCard title="Kimga yuborish kerak?" style={{ minHeight: "0" }}>
          {list?.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.id)}
              className="border border-border rounded-[10px] mr-4 pl-4 pr-1"
            >
              {item.title}
              <Radio checked={item.id === active} />
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
          <div className="mt-5">
            <CLabel title="Matn" required={true} />
            <textarea
              onChange={(e) => setValue("body", e.target.value)}
              className="bg-transparent border border-border rounded-[10px] resize-y w-full p-4 outline-none focus:border-[#DD431F]"
              rows={10}
              placeholder="Matn"
            />
          </div>
        </CCard>
      </div>

      <div className="flex justify-end p-5">
        <AddButton iconLeft={false} text="Xabarni yuborish" style={{ width: 'auto' }}/>
      </div>
    </>
  );
};
