import style from "./Button.module.css";
import BackgroundButton from "../../../assets/UI/Button/bg_button.svg?react";
import ArrowDown from "../../../assets/UI/Button/arrow_down.svg?react";

type ButtonProps = {
  link: string;
  text: string;
  borderColor: string;
  color?: string;
  backgroundColor?: string;
};

const Button = ({
  link,
  text,
  color,
  borderColor,
  backgroundColor,
}: ButtonProps) => {
  const styleButton = {
    fill: `${backgroundColor}`,
    strokeWidth: 3,
    stroke: `${borderColor}`,
    transition: ".3s",
  };

  return (
    <div id={style.container}>
      <ArrowDown className={style.arrow} />
      <BackgroundButton className={style.bg_button} style={styleButton} />
      <a
        className={style.button_text}
        href={link}
        style={{ color: `${color}` }}
      >
        {text}
      </a>
      <ArrowDown
        className={style.arrow}
        id={style.arrow_up}
        style={{ fill: `${color}` }}
      />
    </div>
  );
};

export default Button;
