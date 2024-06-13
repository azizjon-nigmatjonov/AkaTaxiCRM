import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    // send_at: yup.string().required("Majbiriy maydon"),
    title_uz: yup.string().required("Majbiriy maydon"),
    description_uz: yup.string().required("Majbiriy maydon"),
    title_oz: yup.string().required("Majbiriy maydon"),
    description_oz: yup.string().required("Majbiriy maydon"),
    title_ru: yup.string().required("Majbiriy maydon"),
    description_ru: yup.string().required("Majbiriy maydon"),
    image_id_uz: yup.string().required("Majbiriy maydon"),
    image_id_oz: yup.string().required("Majbiriy maydon"),
    image_id_ru: yup.string().required("Majbiriy maydon"),
  });
};
