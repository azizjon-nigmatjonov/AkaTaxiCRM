import { useForm } from "react-hook-form";
import CCard from "../../../../../components/CElements/CCard";
import MainInfo from "./Main";
import CarInfo from "./CarInfo";
import DriverImages from "./Images";

const DriverInfo = ({ driver = {} }: { driver?: any }) => {
  const { control, setValue } = useForm({
    mode: "onSubmit",
  });
  
  return (
    <div className="grid gap-5">
      <CCard style={{ minHeight: "auto" }}>
        <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
          Asosiy ma’lumotlar
        </p>

        <MainInfo driver={driver} control={control} setValue={setValue} />
      </CCard>

      <CCard style={{ minHeight: "auto" }}>
        <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
          Mashina ma’lumotlari
        </p>

        <CarInfo driver={driver} control={control} setValue={setValue} />
      </CCard>

      <CCard style={{ minHeight: "auto" }}>
        <p className="bg-[var(--softGray)] p-3 rounded-[10px] font-[600]">
          Haydovchi rasmlari
        </p>

        <DriverImages driver={driver} control={control} setValue={setValue} />
      </CCard>
    </div>
  );
};

export default DriverInfo;
