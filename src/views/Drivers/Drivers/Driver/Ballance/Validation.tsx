import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    amount: yup.string().required("Majbiriy maydon"),
  });
};
