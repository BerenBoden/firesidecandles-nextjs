"use client";
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
    "transition-colors duration-200";

  return (
    <button {...props} className={`${baseStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
