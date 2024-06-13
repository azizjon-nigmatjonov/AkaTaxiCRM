import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    note: yup.string().required("Majburiy maydon"),
  });
};
