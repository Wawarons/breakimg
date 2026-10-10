import type { Rooms } from "../../../../type.d.ts";
import Lock from "../../../assets/UI/Rooms/lock.svg?react";
import LockOpen from "../../../assets/UI/Rooms/lock-open.svg?react";
import style from "./roomContainer.module.css";

const RoomsContainer = ({
  title,
  rooms,
  id,
}: {
  title: string;
  rooms: Rooms;
  id: string;
}) => {
  return (
    <div className={style.roomContainer} id={style[id]}>
      <h2 className={style.titleContainer}>{title}</h2>
      <div>
        {rooms.list.map((room) => {
          return (
            <div key={room.id} className={style.roomPresentation}>
              <a className={style.roomLink} href={`/room/${room.id}`}>
                {room.name}
              </a>
              <div className={style.roomPlayers}>
                <p>
                  {room.activePlayer}/{room.maxPlayer}
                </p>
                {room.isPrivate ? (
                  <Lock width={30} height={30} />
                ) : (
                  <LockOpen width={30} height={30} />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <a className={style.newRoom} href="">
        Create a room
      </a>
    </div>
  );
};

export default RoomsContainer;
