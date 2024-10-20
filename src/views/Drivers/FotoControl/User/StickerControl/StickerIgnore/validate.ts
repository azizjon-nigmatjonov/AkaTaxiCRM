import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    ignore: yup.string().required("Majburiy maydon"), 
    // uz: yup.string().required("Majburiy maydon"),
    // oz: yup.string().required("Majburiy maydon"),
    // ru: yup.string().required("Majburiy maydon"),
  });
};
