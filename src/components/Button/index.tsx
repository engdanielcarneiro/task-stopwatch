import React from "react";
import style from "./Button.module.scss";

interface Props {
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children?: React.ReactNode;
}

export default function Button({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  );
}

class ButtonClass extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.button}>
        {this.props.children}
      </button>
    );
  }
}
