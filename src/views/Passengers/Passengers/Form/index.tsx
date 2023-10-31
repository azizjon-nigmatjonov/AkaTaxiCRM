import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import { useMutation, useQuery } from "react-query";
import regionService from "../../../../services/regions";
import { useMemo } from "react";
import HFSelect from "../../../../components/FormElements/HFSelect";
import HFDatePicker from "../../../../components/FormElements/HFDatePicker";
import HFInputMask from "../../../../components/FormElements/HFInputMask";
import passengerService from "../../../../services/passengers";

interface Props {
  refetch: () => void;
}

const Form = ({ refetch }: Props) => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const { control, setValue, getValues } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const { data: regions } = useQuery(["GET_REGIONS_LIST"], () => {
    return regionService.getList();
  });

  const SelecTList = useMemo(() => {
    if (!regions?.data) return [];
    return (regions.data as any).map((item: any) => {
      return {
        ...item,
        label: item.name?.uz,
        value: item.id,
      };
    });
  }, [regions]);

  const { data: passenger } = useQuery(
    ["GET_PASSENGER", query.id],
    () => {
      return passengerService.getElement(query.id);
    },
    {
      enabled: query.id !== "create" && query.id ? true : false,
    }
  );

  const userData: any = useMemo(() => {
    return passenger;
  }, [passenger]);

  const createElement = useMutation({
    mutationFn: (data?: any) => {
      return passengerService.createElement(data);
    },
    onSuccess: () => {
      navigateQuery({ id: "" });
      refetch();
    },
  });

  const handleSubmit = () => {
    const data = getValues();
    data.phone = data.phone?.substring(1)?.replace(/\s+/g, "");
    createElement.mutate(data);
  };

  console.log("passenger", passenger);

  return (
    <CModal
      title={query.id === "create" ? "add_new_passenger" : "update_passenger"}
      open={!!query?.id}
      handleClose={() => navigateQuery({ id: "" })}
      textDeleteBtn="cancel"
      handleSave={() => handleSubmit()}
    >
      <div className="grid space-y-3">
        <HFTextField
          name="full_name"
          control={control}
          placeholder="Ism sharif"
          label="Ism sharif"
          setValue={setValue}
          required={true}
          defaultValue={userData?.full_name}
        />

        <HFSelect
          name="region_id"
          control={control}
          options={SelecTList}
          label="Viloyatni tanlang"
          placeholder="Viloyatni tanlang"
          required={true}
          defaultValue={userData?.region_id}
        />

        <HFDatePicker
          control={control}
          name="birthday"
          label="Tug'ulgan kuningizni kiriting"
          placeholder="Tug'ulgan kuningizni kiriting"
          required={true}
          defaultValue={userData?.birthday}
        />
        
        <HFInputMask
          // defaultValue={userData?.phone}
          name="phone"
          setValue={setValue}
          mask={"+\\9\\9\\8 99 999 99 99"}
          label="Tel.raqam"
          placeholder="Tel.raqam"
          required={true}
        />
      </div>
    </CModal>
  );
};

export default Form;
