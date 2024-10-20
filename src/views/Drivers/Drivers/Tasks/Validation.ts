import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    deadline: yup.string().required("Majburiy maydon"),
    note: yup.string().required("Majburiy maydon"),
  });
};
