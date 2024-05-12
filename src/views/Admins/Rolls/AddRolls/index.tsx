import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import Rolls from "./Rolls";
import HFTextField from "../../../../components/FormElements/HFTextField";
import { useForm } from "react-hook-form";
import { CreateFunction, FetchFunction, breadCrumbs } from "./Logic";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { RollCreateHeder } from "./Header";
import { RollList } from "./List";

const NewRolls = () => {
  const schema = Validation();
  const { id } = useParams();
  const { newRouteList, isLoading: listLoading } = FetchFunction();
  const { control, handleSubmit, reset, setValue } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { createRoll, isLoading } = CreateFunction({ reset });
  const { breadCrumbsItems } = breadCrumbs({ id });

  const onSubmit = (data: any) => createRoll(data);

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <HFTextField
              name="name"
              control={control}
              placeholder="e.g.Admin 1"
            />
            <div className="fixed top-[90px] right-20px">
              {isLoading ? (
                <div className="custom-btn">
                  <CircularProgress size={24} />
                </div>
              ) : (
                <button type="submit" className="custom-btn">
                  Rol qo'shish
                </button>
              )}
            </div>
          </form>
        </Rolls>

        <RollList
          newRouteList={newRouteList}
          isLoading={listLoading}
          setValue={setValue}
        />
      </div>
    </>
  );
};

export default NewRolls;
