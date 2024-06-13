import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    send_at: yup.string().required("Majbiriy maydon"),
    title_uz: yup.string().required("Majbiriy maydon"),
    body_uz: yup.string().required("Majbiriy maydon"),
    title_oz: yup.string().required("Majbiriy maydon"),
    body_oz: yup.string().required("Majbiriy maydon"),
    title_ru: yup.string().required("Majbiriy maydon"),
    body_ru: yup.string().required("Majbiriy maydon"),
  });
};
