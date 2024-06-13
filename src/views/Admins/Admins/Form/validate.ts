import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    name: yup.string().required("Majbiriy maydon"),
    email: yup.string().required("Majburiy maydon").email("enter_valid_email"),
    roles: yup
    .array()
    .of(yup.string())
    .required("Majburiy maydon")
    .test('is-roles-empty', 'Majburiy maydon', value => value && value.length > 0),
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
    name: yup.string().required("Majburiy maydon"),
    email: yup.string().required("Majburiy maydon").email("Tog'ri email kiriting!"),
    phone: yup.string().required("enter_phone_number"),
    roles: yup
    .array()
    .of(yup.string())
    .required("Majburiy maydon")
    .test('is-roles-empty', 'Majburiy maydon', value => value && value.length > 0),
  });
};
