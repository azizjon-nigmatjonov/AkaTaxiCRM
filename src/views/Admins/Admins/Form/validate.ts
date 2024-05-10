import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    name: yup.string().required("Majbiriy maydon"),
    email: yup.string().required("enter_email").email("enter_valid_email"),
    roles: yup.string().required("Majbiriy maydon"),
    phone: yup
      .string()
      .matches(
        /^(\+998)\s(9[0-9])\s([0-9]{3})\s([0-9]{2})\s([0-9]{2})$/,
        "enter_valid_phone_number"
      )
      .required("enter_phone_number"),

    password: yup.string().required("Majbiriy maydon"),
  });
};

export const UpdateValidation = () => {
  return yup.object().shape({
    name: yup.string().required("Majbiriy maydon"),
    email: yup.string().required("enter_email").email("enter_valid_email"),
    phone: yup.string().required("enter_phone_number"),
    roles: yup.string().required("Majbiriy maydon"),
  });
};
