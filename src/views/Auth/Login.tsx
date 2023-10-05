import { useForm } from "react-hook-form";
import HFInput from "../../components/FormElements/HFInput";
import {
  CheckLine,
  PasswordIcon,
  UserIcon,
} from "../../components/IconGenerator/Svg";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import useAuth from "../../services/auth/useAuth";

const Login = () => {
  const [password, setPassword] = useState(true);

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
    handleSubmit
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = (data: any) => {
    login.mutate(data)
    console.log('data', data);
    
  }
  
  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-[500px] border border-[#E2E2EA] bg-white rounded-[14px] p-6 rounded-tl-[0] relative">
        <div className="border border-[#E2E2EA] bg-white rounded-[14px] rounded-bl-[0] rounded-br-[0] absolute top-[-60px] left-[-1px] p-4">
          <img src="/logo-full.svg" alt="logo" />
        </div>

        <h2 className="text-2xl font-[600]">Tizimga kirish</h2>

        <div className="mt-[18px] space-y-3">
          <HFInput
            name="email"
            register={register}
            placeholder="Email"
            classes="bg-[#FAFAFB] border border-[#F1F1F5]"
            errors={errors}
            icon={<UserIcon />}
          />
          <div className="relative">
            <HFInput
              name="password"
              register={register}
              placeholder="Parol"
              classes="bg-[#FAFAFB] border border-[#F1F1F5]"
              classesInput="pr-[30px]"
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
        {/* <div className="mt-3 mb-6 flex items-center justify-between">
          <button
            onClick={() => setCheck((prev) => !prev)}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div
              className={`w-[20px] h-[20px] rounded-[4px] ${
                check ? "bg-[var(--main)]" : "border border-[var(--lineGray)]"
              }`}
            >
              {check ? <CheckLine fill="white" /> : ""}
            </div>
            <span>Eslab qolish</span>
          </button>
          <button className="text-[var(--main)] font-medium">
            Parolni unutdingizmi?
          </button>
        </div> */}

        <button type="submit" className="h-[48px] bg-[var(--main)] w-full mt-3 rounded-[10px] text-white">Tasdiqlash</button>
      </form>
    </div>
  );
};

export default Login;
