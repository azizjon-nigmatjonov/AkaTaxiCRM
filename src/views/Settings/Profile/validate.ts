import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    name: yup.string().required("Majbiriy maydon"),
    email: yup.string().required("Majbiriy maydon").email("To'g'ri Email kiriting"),
    // phone: yup
    //   .string()
    //   .matches(/^(\+998)\s(9[0-9])\s([0-9]{3})\s([0-9]{2})\s([0-9]{2})$/, "enter_valid_phone_number")
    //   .required("required_field"),
  });
};
