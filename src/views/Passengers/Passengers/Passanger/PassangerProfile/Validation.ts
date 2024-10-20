import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    full_name: yup.string().required("Majburiy maydon"),
    birthday: yup.string().required("Majburiy maydon"),
    gender: yup.string().required("Majburiy maydon"),
    region_id: yup.string().required("Majburiy maydon"),
    phone: yup.string().required("Majburiy maydon"),
  });
};
