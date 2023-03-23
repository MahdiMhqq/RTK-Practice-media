export interface IUser {
  name: string;
  id: number;
}

export interface IUsersStore {
  data: IUser[];
  error: any;
  loading: boolean;
}

export interface IAlbum {
  title: string;
  userId: string;
  id: string;
}

export interface IPhoto {
  alt: string;
  src: string;
  albumId: string;
  id: string;
}