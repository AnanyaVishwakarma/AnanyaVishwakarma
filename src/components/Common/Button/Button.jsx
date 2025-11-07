import React from "react";
import "./Button.css";

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) => {
  const baseClass = "btn";
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? "btn--disabled" : "";

  const buttonClass =
    `${baseClass} ${variantClass} ${sizeClass} ${disabledClass} ${className}`.trim();
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
