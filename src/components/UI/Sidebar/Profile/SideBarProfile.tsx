import style from "./SideBarProfile.module.css";
import Cross from "../../../../assets/UI/Sidebar/cross.svg?react";

type SideBarProfileProps = {
  links: [{ link: string; name: string }];
};

const SideBarProfile: SideBarProfileProps = ({ links }) => {
  return (
    <aside id={style.sidebar}>
      <Cross id={style.cross} width={40} height={40} />
      <p className={style.banner}>
        ////////////////////////////////////////////
      </p>
      <ul>
        {links.map((link) => {
          return (
            <a href={link.link}>
              <li>{link.name}</li>
            </a>
          );
        })}
      </ul>
      <p className={style.banner}>
        ////////////////////////////////////////////
      </p>
    </aside>
  );
};

export default SideBarProfile;
