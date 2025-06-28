import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
}

export const Input = (props: InputProps) => {
  const { label, error, required, ...otherProps } = props;
  return (
    <div className="flex flex-col w-full gap-2">
      {label && (
        <label
          className="font-rubik text-gray-400"
          htmlFor={otherProps.id || ""}
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        className="border-2 text-rubik rounded-lg font-semibold w-full focus:border-blue-600 transition-colors text-gray-600 border-gray-400 focus:ring-0 focus:outline-0 px-4 py-2"
        type="text"
        {...otherProps}
      />
      {error && <p>{error}</p>}
    </div>
  );
};
