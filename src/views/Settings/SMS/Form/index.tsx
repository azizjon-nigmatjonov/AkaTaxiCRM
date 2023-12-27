import { Header } from "../../../../components/Header";
import CCard from "../../../../components/CElements/CCard";
import { Radio } from "@mui/material";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import HFTextField from "../../../../components/FormElements/HFTextField";
import { useParams } from "react-router-dom";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import CLabel from "../../../../components/CElements/CLabel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import smsService from "../../../../services/sms";

const list = [
  {
    title: "Barchasi",
    id: "all",
  },
  {
    title: "Haydovchi",
    id: "drivers",
  },
  {
    title: "Yo'lovchi",
    id: "passenger",
  },
];

export const SmsCreateForm = () => {
  const { type } = useParams();
  const [active, setActive] = useState("all");

  const schema = yup.object().shape({
    title: yup.string().required("Majbiriy maydon"),
    body: yup.string().required("Majbiriy maydon"),
    user_group: yup.string().required("Majbiriy maydon"),
  });

  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_group: "all",
      body: "",
      title: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    const obj: any = getValues();
    obj.user_group = active;
    obj.type = type || "sms";
    obj.send_after = "";

    smsService.createElement(obj);
  };

  const breadCrumbItems = useMemo(() => {
    return [
      {
        label: "SMS xabarnoma",
        link: "/settings/sms",
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

      <form onSubmit={handleSubmit(onSubmit)}>
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
              <div className="relative">
                <textarea
                  onChange={(e) => setValue("body", e.target.value)}
                  className={`bg-transparent border border-border rounded-[10px] resize-y w-full p-4 outline-none focus:border-[#DD431F] ${
                    errors["body"]?.message ? "border-red-500" : ""
                  }`}
                  rows={10}
                  placeholder="Matn"
                />
                {errors["body"]?.message && (
                  <p className="text-sm text-[var(--error)] absolute -bottom-5">
                    {errors["body"].message || ""}
                  </p>
                )}
              </div>
            </div>
          </CCard>
        </div>

        <div className="flex justify-end p-5">
          {/* <AddButton
            onClick={() => sendMail()}
            iconLeft={false}
            text="Xabarni yuborish"
            style={{ width: "auto" }}
          /> */}
          <button type="submit" className="bg-[var(--main)] px-4 h-[48px] rounded-[10px] text-white">Xabarni yuborish</button>
        </div>
      </form>
    </>
  );
};
