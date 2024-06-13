import { useMutation } from "react-query";
import driverService from "../../../../../../services/drivers";
import { useParams } from "react-router-dom";
import usePageRouter from "../../../../../../hooks/useObjectRouter";

export const ModalData = () => {
  const { id } = useParams();
  const { navigateTo } = usePageRouter();
  const { mutate: updateCarInfo } = useMutation({
    mutationFn: (data: any) => {
      return driverService
        .updateCarInfo(id, {
          reason_of_status: data,
          status: "banned",
        })
        .then(() => {
          navigateTo("/drivers/main");
        });
    },
  });

  const updateElement = (data: any) => {
    updateCarInfo(data);
  };

  return { updateElement };
};
