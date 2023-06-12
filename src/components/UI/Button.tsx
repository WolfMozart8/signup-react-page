import React from 'react';

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ buttonType }) => {
  return (
    <button type={buttonType || "button"}>Subscribe to monthly newsletter</button>
  );
}

export default Button;
