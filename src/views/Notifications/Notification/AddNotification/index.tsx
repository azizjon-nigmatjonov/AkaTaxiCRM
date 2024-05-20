import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import Setting from "./Setting";
import { useForm } from "react-hook-form";
import { breadCrumbItems } from "./Logic";

const AddNotification = () => {
  const { control, getValues } = useForm();

  const submitHandler = (evt: any) => {
    const values = getValues();
    console.log(values);
    console.log(evt);
  };

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbItems} progmatic={true} type="link" />
      </Header>

      <div className="px-6">
        <Setting control={control} submitHandler={submitHandler} />
      </div>
    </>
  );
};

export default AddNotification;
