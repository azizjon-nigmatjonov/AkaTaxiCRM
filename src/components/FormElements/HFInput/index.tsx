import { useTranslation } from "react-i18next";
import { ReactNode, useMemo } from "react";

interface Props {
  name: string;
  label?: string;
  register?: any;
  type?: string;
  placeholder?: string;
  classes?: string;
  classesInput?: string;
  errors?: any;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: any;
  defaultValue?: any;
  icon?: ReactNode;
}

export default function HFInput({
  name,
  label,
  register,
  type = "text",
  placeholder = "",
  classes = '',
  classesInput = "",
  errors = {},
  disabled = false,
  required = false,
  errorMessage,
  defaultValue = "",
  icon,
  ...props
}: Props) {
  const { t } = useTranslation();
  const registerProps = useMemo(
    () => (register ? { ...register(name, { required }) } : {}),
    [name]
  );
  return (
    <div
      className={`${classes} flex items-center w-full bg-[var(--softGray)] rounded-[14px] px-[14px] h-[50px] font-[500]`}
    >
      {label && (
        <p className="font-[500] mb-[6px]">
          {required ? <span className="text-error pr-1">*</span> : ""}
          {t(label)}
        </p>
      )}
      {icon ? icon : ""}
      <input
        type={type}
        placeholder={t(placeholder)}
        disabled={disabled}
        defaultValue={defaultValue}
        className={`w-full h-full bg-transparent px-2 placeholder:text-[var(--gray)] ${
          errors[name] ? "border border-error" : ""
        } ${classesInput}`}
        {...props}
        {...registerProps}
      />
      {errors[name]?.message && (
        <p className="text-sm text-error">{t(errors[name].message || "")}</p>
      )}
    </div>
  );
}
