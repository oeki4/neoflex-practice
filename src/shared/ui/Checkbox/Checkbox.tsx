import type { InputHTMLAttributes } from "react";
import cls from "./checkbox.module.scss";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, error, required, ...otherProps } = props;
  return (
    <div>
      <label className={cls.checkboxContainer}>
        {label || ""}
        {required && <span className={cls.required}>*</span>}
        <input type="checkbox" {...otherProps} />
        <span className={cls.checkmark}></span>
      </label>
      {error && <p>{error}</p>}
    </div>
  );
};
