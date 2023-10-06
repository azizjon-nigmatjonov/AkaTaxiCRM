import { useForm } from "react-hook-form";
import HFInput from "../../components/FormElements/HFInput";
import { PasswordIcon, UserIcon } from "../../components/IconGenerator/Svg";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import useAuth from "../../services/auth/useAuth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const [password, setPassword] = useState(true);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("required_field")
      .email("Tog'ri email kiriting"),
    password: yup
      .string()
      .required("required_field")
      .min(4, "Eng kamida 8 xonalik so'z kiriting"),
  });

  const { login } = useAuth({
    loginProps: {
      onSuccess: (value: any) => {
        console.log("va", value);
      },
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    login.mutate(data);
    console.log("data", data);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[500px] border border-[#E2E2EA] bg-white rounded-[14px] p-6 rounded-tl-[0] relative"
      >
        <div className="border border-[#E2E2EA] bg-white rounded-[14px] rounded-bl-[0] rounded-br-[0] absolute top-[-60px] left-[-1px] p-4">
          <img src="/logo-full.svg" alt="logo" />
        </div>

        <h2 className="text-2xl font-[600]">Tizimga kirish</h2>

        <div className="mt-[18px] space-y-5">
          <HFInput
            name="email"
            register={register}
            placeholder="Email"
            classesInput="bg-[#FAFAFB] border border-[#F1F1F5]"
            errors={errors}
            icon={<UserIcon />}
          />
          <div className="relative">
            <HFInput
              name="password"
              register={register}
              errors={errors}
              placeholder="Parol"
              classesInput="bg-[#FAFAFB] border border-[#F1F1F5]"
              type={password ? "password" : "text"}
              icon={<PasswordIcon />}
            />
            <span
              className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
              onClick={() => setPassword((prev) => !prev)}
            >
              {password ? <VisibilityOff /> : <Visibility />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="h-[48px] bg-[var(--main)] w-full mt-6 rounded-[10px] text-white"
        >
          Tasdiqlash
        </button>
      </form>
    </div>
  );
};

export default Login;
