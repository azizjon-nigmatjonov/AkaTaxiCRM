import { Controller } from "react-hook-form";
// import { CgFormatBold } from "react-icons/cg";
// import { GoItalic } from "react-icons/go";
// import { FiUnderline } from "react-icons/fi";
// import { ImageFrameIcon } from "../../../components/UI/IconGenerator/Svg";
import { TextareaAutosize } from "@mui/material";
import CLabel from "../../../components/CElements/CLabel";

interface Props {
  control?: any;
  name: string;
  defaultValue?: any;
  rules?: any;
  type?: string;
  activePassword?: boolean;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const HFTextarea = ({
  control,
  name,
  defaultValue,
  rules,
  type = "text",
  label = "",
  required = false,
  activePassword = false,
  ...props
}: Props) => {
  return (
    <div>
      {label && <CLabel title={label} required={required} />}
      <div className="border border-[var(--lineGray)] rounded-xl ">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={{ ...rules }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <div className="HFTextarea p-5 relative">
              <TextareaAutosize
                // size="small"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                name={name}
                minRows={5}
                {...props}
              />
              {error?.message && (
                <p className="text-sm text-[var(--error)] absolute left-1 -bottom-5 whitespace-nowrap">
                  {error.message}
                </p>
              )}
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default HFTextarea;
