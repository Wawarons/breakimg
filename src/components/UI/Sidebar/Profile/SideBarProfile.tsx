import style from "./SideBarProfile.module.css";
import Cross from "../../../../assets/UI/Sidebar/cross.svg?react";
import { Link } from "react-router-dom";

type SideBarProfileProps = {
  links: { link: string, name: string }[];
  closeFunction?: () => void;
};

const SideBarProfile = ({ links, closeFunction }: SideBarProfileProps) => {


  return (
    <aside id={style.sidebar}>
      <Cross id={style.cross} width={40} height={40} onClick={closeFunction} />
      <div id={style.content}>
        <p className={style.banner}>
          ////////////////////////////////////////////
        </p>
        <ul>
          {links.map((link, index) => {
            return (
              <Link key={index} to={link.link}>
                <li>{link.name}</li>
              </Link>
            );
          })}
        </ul>
        <p className={style.banner}>
          ////////////////////////////////////////////
        </p>
      </div>
    </aside>
  );
};

export default SideBarProfile;
