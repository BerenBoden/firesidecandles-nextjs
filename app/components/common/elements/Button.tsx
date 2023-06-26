import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  const baseStyle =
    "text-white bg-black py-2 px-4 transition-colors duration-200";

  return (
    <button {...props} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
