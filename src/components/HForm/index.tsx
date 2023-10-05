import { ReactNode, useImperativeHandle, FormEvent } from "react";
import cls from "./style.module.scss";

interface Props {
  footer?: boolean;
  formRef?: any;
  handleSubmit?: (val?: any) => void;
  submit?: (val: any) => void;
  styles?: any;
  children?: ReactNode;
}

const HForm = ({
  footer = false,
  formRef,
  handleSubmit = () => {},
  submit = () => {},
  styles = {},
  children,
}: Props) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSubmit(); // Call handleSubmit when the form is submitted
  };

  useImperativeHandle(formRef, () => ({
    submitForm() {
      if (typeof handleSubmit === "function") {
        handleSubmit(submit);
      }
    },
  }));

  return (
    <form onSubmit={onSubmit} ref={formRef} style={{ ...styles }}>
      {children}
      {footer && (
        <div className={cls.btns}>{/* Include your buttons here */}</div>
      )}
    </form>
  );
};

export default HForm;
