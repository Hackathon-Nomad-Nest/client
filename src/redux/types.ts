export interface IUser {
  data: {
    name: string;
    email: string;
    picture: string;
    given_name: string;
    family_name: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
