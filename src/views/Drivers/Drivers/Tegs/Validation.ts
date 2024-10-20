import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    tegs: yup.string().required("Majburiy maydon"),
  });
};
