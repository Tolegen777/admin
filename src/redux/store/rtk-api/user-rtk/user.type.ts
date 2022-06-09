export interface IGetProfiles {
  count: number;
  profiles: IProfile[];
}

interface IUser {
  id: number;
  phone: string;
}

interface IProfile {
  age: number;
  block: null | boolean;
  createdAt: string;
  date: null | string;
  description: string;
  firstName: string;
  id: number;
  iin: null;
  kids: number;
  middleName: null | string;
  secondName: string;
  updateAt: string;
  user: IUser;
}
