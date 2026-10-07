import style from "./Button.module.css";
import BackgroundButton from "../../../assets/UI/Button/bg_button.svg?react";
import ArrowDown from "../../../assets/UI/Button/arrow_down.svg?react";

type ButtonProps = {
  link: string;
  text: string;
  borderColor: string;
  backgroundColor?: string;
  id?: string;
};

const Button = ({
  link,
  text,
  borderColor,
  backgroundColor,
  id,
}: ButtonProps) => {


  return (
    <>
      <style>{`

        #${id} .${style.bg_button} {
          fill: ${backgroundColor};
          stroke: ${borderColor};
          transition: .3s;
        }

        #${id}:hover .${style.bg_button} {
          fill: ${borderColor};
          stroke: ${backgroundColor};
        }

        #${id}:hover .${style.arrow} {
          color: ${backgroundColor};
        }

        #${id}:hover .${style.button_text} {
          color: ${backgroundColor};
        }

      `}</style>
      <div className={style.container} id={id}>
        <ArrowDown className={style.arrow} />
        <BackgroundButton className={style.bg_button} />
        <a
          className={style.button_text}
          href={link}
        >
          {text}
        </a>
        <ArrowDown
          className={style.arrow + " " + style.arrow_up}
        />
      </div>
    </>
  );
};

export default Button;
