export interface IGetProfiles {
  count: number;
  profiles: IProfile[];
}

export interface IGetOneProfile {
  createdAt: string;
  updateAt: string;
  id: number;
  description: string;
  age: number;
  firstName: string;
  secondName: string;
  middleName: null | string;
  kids: number;
  date: null | string;
  iin: null | string;
  block: null | IBlockUser;
  region: IValue;
  category: IValue;
  hobbies: IValue[];
  gender: IValue;
  complaints: IComplains[];
  sendReports: [];
}

interface IBlockUser {
  block: boolean;
  id: number;
  text: null | string;
  workerProfile: null | string;
}

interface IValue {
  id: number;
  value: string;
}

interface IComplains {
  createdAt: string;
  updateAt: string;
  id: number;
  text: string;
  status: string;
  reporter: null | string;
  message: null | string;
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

export interface IRole {
  id: number;
  value: string;
  description: string;
}
