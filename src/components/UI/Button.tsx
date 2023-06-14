import React from 'react';
import classes from "./Button.module.css"

interface ButtonProps {
  buttonType?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ buttonType }) => {
  return (
    <button className={classes.button} type={buttonType || "button"}>Subscribe to monthly newsletter</button>
  );
}

export default Button;
