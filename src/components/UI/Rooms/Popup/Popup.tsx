import { useState, useEffect } from "react";
import style from "./Popup.module.css";
import Cross from "../../../../assets/UI/Sidebar/cross.svg?react";

const Popup = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {}, [popup]);

  return (
    <>
      <p id={style.button} onClick={() => setPopup(true)}>
        Créer un salon
      </p>
      {popup && (
        <div id={style.popup}>
          <Cross
            id={style.cross}
            width={35}
            height={35}
            onClick={() => setPopup(false)}
          />
          <h3>Créer un salon</h3>
          <form>
            <div className={style.field}>
              <label htmlFor="name">Nom</label>
              <input
                id="name"
                type="text"
                name="name"
                value=""
                placeholder="Name's room"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Popup;
