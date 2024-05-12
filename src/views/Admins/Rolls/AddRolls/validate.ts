import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    name: yup.string().required("Majbiriy maydon"),
    permissions: yup
      .array()
      .of(yup.string())
      .required("Majbiriy maydon")
      .test(
        "is-roles-empty",
        "Permission kiritilmagan",
        (value) => value && value.length > 0
      ),
  });
};
