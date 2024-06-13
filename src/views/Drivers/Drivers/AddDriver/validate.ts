import * as yup from "yup";

export const Validation = () => {
  
  return yup.object().shape({
    full_name: yup.string().required("Majburiy maydon"),
    phone: yup.string().required("Majburiy maydon"),
    birthday: yup.string().required("Majburiy maydon"),
    gender: yup.string().required("Majburiy maydon"),
    car_first_image_id: yup.string().required("Majburiy maydon"),
    car_second_image_id: yup.string().required("Majburiy maydon"),
    profile_image: yup.string().required("Majburiy maydon"),
    tex_passport_id: yup.string().required("Majburiy maydon"),
    driver_license_id: yup.string().required("Majburiy maydon"),
    selfie_driver_license_id: yup.string().required("Majburiy maydon"),
  });
};
