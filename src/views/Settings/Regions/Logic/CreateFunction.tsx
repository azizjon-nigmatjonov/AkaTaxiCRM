import { useMutation } from "react-query";
import regionService from "../../../../services/regions";
import { useGetQueries } from "../../../../hooks/useGetQueries";

export const CreateFunction = ({
  handleClose,
}: {
  handleClose: () => void;
}) => {
  const {
    add_region,
    edit_region,
    add_district,
    edit_district,
    add_village,
    edit_village,
    region,
    district,
  } = useGetQueries();
  const HandleSuccess = () => {
    handleClose();
  };

  const { mutate: regionAdd } = useMutation({
    mutationFn: (data: any) => {
      return regionService.addVillage(data).then(() => {
        HandleSuccess();
      });
    },
  });
  const { mutate: regionEdit } = useMutation({
    mutationFn: (data: any) => {
      return regionService.editRegion(data).then(() => {
        HandleSuccess();
      });
    },
  });

  const { mutate: districtAdd } = useMutation({
    mutationFn: (data: any) => {
      return regionService.addDistrict(data).then(() => {
        HandleSuccess();
      });
    },
  });
  const { mutate: districtEdit } = useMutation({
    mutationFn: (data: any) => {
      return regionService.editDistrict(data).then(() => {
        HandleSuccess();
      });
    },
  });

  const { mutate: villageAdd } = useMutation({
    mutationFn: (data: any) => {
      return regionService.addVillage(data).then(() => {
        HandleSuccess();
      });
    },
  });
  const { mutate: villageEdit } = useMutation({
    mutationFn: (data: any) => {
      return regionService.editVillage(data).then(() => {
        HandleSuccess();
      });
    },
  });

  const addPlace = (data: any) => {
    const params = { name: data };

    if (add_region) {
      regionAdd(params);
    }
    if (edit_region) {
      regionEdit({ ...params, id: edit_region });
    }

    if (add_district) {
      districtAdd({ ...params, region_id: region });
    }
    if (edit_district) {
      districtEdit({ ...params, id: edit_district, region_id: region });
    }

    if (add_village) {
      villageAdd({ ...params, district_id: district });
    }
    if (edit_village) {
      villageEdit({ ...params, id: edit_village, district_id: district });
    }
  };

  return { addPlace };
};
