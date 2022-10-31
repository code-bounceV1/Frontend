import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }, ref) => {
    return (
      <button
        className="bg-blue-600 text-white font-medium p-2 rounded-md"
        ref={ref}
      >
        <p>{children}</p>
      </button>
    );
  }
);

export default Button;
