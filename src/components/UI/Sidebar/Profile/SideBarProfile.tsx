import style from "./SideBarProfile.module.css";
import Cross from "../../../../assets/UI/Sidebar/cross.svg?react";

type SideBarProfileProps = {
  links: [{ link: string; name: string }];
  closeFunction?: () => void;
};

const SideBarProfile: SideBarProfileProps = ({ links, closeFunction }) => {
  return (
    <aside id={style.sidebar}>
      <Cross id={style.cross} width={40} height={40} onClick={closeFunction} />
      <div id={style.content}>
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
      </div>
    </aside>
  );
};

export default SideBarProfile;
