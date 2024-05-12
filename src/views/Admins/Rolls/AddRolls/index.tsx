import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import Rolls from "./Rolls";
import { useForm } from "react-hook-form";
import { CreateFunction, FetchFunction, breadCrumbs } from "./Logic";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import { useParams } from "react-router-dom";
import { RollCreateHeder } from "./Header";
import { RollList } from "./List";
import { RollForm } from "./Form";

const NewRolls = () => {
  const schema = Validation();
  const { id } = useParams();
  const {
    newRouteList,
    isLoading: listLoading,
    rollData,
  } = FetchFunction({ id });
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { createRoll, updateRoll, isLoading } = CreateFunction({});
  const { breadCrumbsItems } = breadCrumbs({ id });

  const onSubmit = (data: any) => {
    if (id) {
      updateRoll(data, id);
    } else {
      createRoll(data);
    }
  };
  console.log("rollData", rollData);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbsItems} progmatic={true} type="link" />
      </Header>
      <RollCreateHeder
        title={id ? "Rolni tahrirlash" : "Yangi rol yaratish"}
        text={
          id
            ? "Admin panel boshqaruvchini tahrirlash"
            : "Admin panel yangi boshqaruvchi yaratish"
        }
      />

      <div className="container divide-y-[1px] divide-[var(--gray20)] w-[80%] my-5">
        <Rolls text="Yangi rol nomi">
          <RollForm
            id={id}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            control={control}
            setValue={setValue}
            rollData={rollData}
            isLoading={isLoading}
          />
        </Rolls>

        <RollList
          newRouteList={newRouteList}
          isLoading={listLoading}
          setValue={setValue}
          rollData={rollData}
          errors={errors}
        />
      </div>
    </>
  );
};

export default NewRolls;
