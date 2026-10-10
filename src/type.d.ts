export type Room = {
  id: number;
  name: string;
  maxPlayer: number;
  activePlayer: number;
  isPrivate: boolean;
};

export type Rooms = {
  list: Array<Room>;
  total: number;
  actualPage: number;
  maxPage: number;
};
