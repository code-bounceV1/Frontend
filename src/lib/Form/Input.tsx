import React from "react";
import cx from "classnames";

interface InputProps {
  label?: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  error?: any;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", error, placeholder, ...rest }, ref) => {
    return (
      <div>
        {label ? <label className="text-sm">{label}</label> : null}
        {type === "password" ? (
          <div
            className={cx(
              "border-2 my-1 rounded-md overflow-hidden ring-2 ring-transparent focus-within:ring-blue-600",
              error
                ? "border-red-500 focus-within:ring-transparent"
                : "border-gray-200"
            )}
          >
            <input
              className="outline-none p-2 text-sm"
              type="password"
              placeholder={placeholder}
              ref={ref}
              {...rest}
            />
          </div>
        ) : type === "number" ? (
          <div
            className={cx(
              "border-2 my-1 rounded-md overflow-hidden ring-2 ring-transparent focus-within:ring-blue-600",
              error
                ? "border-red-500 focus-within:ring-transparent"
                : "border-gray-200"
            )}
          >
            <input
              className="outline-none p-2 text-sm"
              type="number"
              placeholder={placeholder}
              ref={ref}
              {...rest}
            />
          </div>
        ) : (
          <div
            className={cx(
              "border-2 my-1 rounded-md overflow-hidden ring-2 ring-transparent focus-within:ring-blue-600",
              error
                ? "border-red-500 focus-within:ring-transparent"
                : "border-gray-200"
            )}
          >
            <input
              className="outline-none p-2 text-sm"
              type={type}
              placeholder={placeholder}
              ref={ref}
              {...rest}
            />
          </div>
        )}
        {error ? <p className="text-red-500 text-sm">{error}</p> : null}
      </div>
    );
  }
);

export default Input;
