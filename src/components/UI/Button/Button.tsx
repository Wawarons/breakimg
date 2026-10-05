import style from "./button.css";

type ButtonProps = {
  link: string;
  text: string;
};

const Button = ({ link, text }: ButtonProps) => {
  return (
    <div className="button">
      <a href={link}>{text}</a>
    </div>
  );
};

export default Button;
