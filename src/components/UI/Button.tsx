import React, { MouseEventHandler } from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  buttonType?: "button" | "submit" | "reset";
  clickHandler: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonType,
  clickHandler,
}) => {
  return (
    <button
      onClick={clickHandler}
      className={classes.button}
      type={buttonType || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
