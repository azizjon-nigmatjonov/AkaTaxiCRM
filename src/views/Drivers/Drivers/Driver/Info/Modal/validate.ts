import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    langs: yup
      .array()
      .of(yup.string())
      .required("Majburiy maydon")
      .test(
        "is-roles-empty",
        "Majburiy maydon",
        (value) => value && value.length > 0
      ),
  });
};
