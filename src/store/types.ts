export interface IUser {
  name: string;
  id: number;
}

export interface IUsersStore {
  data: IUser[];
  error: any;
  loading: boolean;
}
