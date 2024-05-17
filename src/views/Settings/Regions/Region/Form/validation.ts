import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    uz: yup.string().required("Majbiriy maydon"),
    oz: yup.string().required("Majbiriy maydon"),
    ru: yup.string().required("Majbiriy maydon"),
    en: yup.string().required("Majbiriy maydon"),
  });
};
