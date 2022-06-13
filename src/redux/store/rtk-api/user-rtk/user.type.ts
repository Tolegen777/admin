

export interface IUserResponse
{
  id: number,
  phone: number,
  roles: [
    {
      id: number,
      value: string,
      description: string | null
    }
  ],
  profile: {
    createdAt: string | null,
    updateAt: string | null,
    id: number | null,
    description: string | null,
    age: number | null,
    firstName: string | null,
    secondName: string | null,
    middleName: string | null,
    block: boolean,
    kids: number,
    date: string | null,
    iin: string | null
  }
}

