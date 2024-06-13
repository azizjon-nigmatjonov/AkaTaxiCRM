import { SectionBtnHeader } from "../../../../components/UI/SectionBtnHeader";
import { Header } from "../../../../components/UI/Header";
import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { breadCrumbs } from "./Logic";
import CDriver from "../../../../components/CElements/CDivider";
import { useForm } from "react-hook-form";
import { DriverInfo } from "./Driver";
import { CarInfo } from "./Car";
import { ToInfo } from "./To";
import { FromInfo } from "./From";

const DriverAttachment = () => {
  const { breadCrumbsItems } = breadCrumbs();
  const { control } = useForm();

  return (
    <>
      <Header>
        <CBreadcrumbs items={breadCrumbsItems} progmatic={true} type="link" />
      </Header>
      <form className="container">
        <div className="flex justify-between">
          <SectionBtnHeader
            title="Yangi haydovchi biriktirish"
            text="Ro’yxatda yo’q haydovchini mavjud yo’nalishdagi yo’lovchiga biriktirish"
          />
          <div>
            <button className="custom-btn">Biriktirish</button>
          </div>
        </div>
        <CDriver classes="py-5" />
        <DriverInfo control={control} />
        <CDriver classes="py-5" />
        <CarInfo control={control} />
        <CDriver classes="py-5" />
        <FromInfo control={control} />
        <CDriver classes="py-5" />
        <ToInfo control={control} />
      </form>
    </>
  );
};

export default DriverAttachment;
