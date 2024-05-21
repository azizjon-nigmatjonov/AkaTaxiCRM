import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    send_at: yup.string().required("Majbiriy maydon"),
    title: yup.string().required("Majbiriy maydon"),
    body: yup.string().required("Majbiriy maydon"),
  });
};
