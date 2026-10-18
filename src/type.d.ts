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

export type User = {
  id: number;
  username: string;
  email: string;
  email_verified_at: boolean;
  created_at: date;
  updated_at: date;
};

export type SideLinks = {
  name: string;
  link: string;
};

export type ApiResponse<T> = {
  data?: T;
  message?: string;
  error?: Record<string, unknown>;
};
