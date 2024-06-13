import CBreadcrumbs from "../../../../components/CElements/CBreadcrumbs";
import { Header } from "../../../../components/UI/Header";
import Rolls from "./Rolls";
import { useForm } from "react-hook-form";
import { CreateFunction, FetchFunction, breadCrumbs } from "./Logic";
import { yupResolver } from "@hookform/resolvers/yup";
import { Validation } from "./validate";
import { useParams } from "react-router-dom";
import { RollList } from "./List";
import { RollForm } from "./Form";
import { useEffect, useState } from "react";
import { SectionBtnHeader } from "../../../../components/UI/SectionBtnHeader";

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
  const [permissions, setPermissions]: any = useState([]);

  const onSubmit = (data: any) => {
    const permissions = data.permissions.map((element: any) =>
      parseInt(element.trim(), 10)
    );
    data.permissions = permissions;
    if (id !== ":create") {
      updateRoll(data, id);
    } else {
      createRoll(data);
    }
  };

  const handleCheck = (permission: any, type?: string) => {
    let data = permissions;
    if (type === "all") {
      const ids = permission?.map((item: any) => item.id);
      const found = ids.find((el: any) => {
        permissions.includes(el);
      });
      console.log("111", ids);

      if (found) {
        data = permissions.filter((item: string) => {
          if (!ids.includes(item)) return item;
        });
      } else {
        data = [...data, ...ids];
      }
    } else {
      const value = permission.value;

      if (permissions.find((item: string) => item === value)) {
        data = permissions.filter((item: string) => item !== value);
      } else {
        data = [...data, value];
      }
    }

    setValue("permissions", data);
    setPermissions(data);
  };

  useEffect(() => {
    if (rollData?.permissions?.length) {
      setPermissions(rollData.permissions);
      setValue("permissions", rollData.permissions);
    }
  }, [rollData]);

  return (
    <>
      <Header sticky={true}>
        <CBreadcrumbs items={breadCrumbsItems} progmatic={true} type="link" />
      </Header>
      <div className="container">
        <SectionBtnHeader
          title={id === ":create" ? "Yangi rol yaratish" : "Rolni tahrirlash"}
          text={
            id === ":create"
              ? "Admin panel yangi boshqaruvchi yaratish"
              : "Admin panel boshqaruvchini tahrirlash"
          }
        />
      </div>
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
          handleCheck={handleCheck}
          permissions={permissions}
          errors={errors}
        />
      </div>
    </>
  );
};

export default NewRolls;
